import AsyncStorage from '@react-native-async-storage/async-storage';

const protocol = "https:"
const domain = 'skillhub.junhao.page';

const tokens = {};

const userData = {};


async function loadTokens() {
	const value = await AsyncStorage.getItem("auth-tokens");

	// No token stored dont try to parse it.
	if (value == null) return;

	const storedTokens = JSON.parse(value);
	tokens.access = storedTokens.access;
	tokens.refresh = storedTokens.refresh;
}
loadTokens();

async function saveTokens() {
	await AsyncStorage.setItem("auth-tokens", JSON.stringify(tokens));
}

async function handleLoginResponse( response ){
	const response_json = await response.json();

	tokens.access = response_json.tokens.access;
	tokens.refresh = response_json.tokens.refresh;
	
	await saveTokens();

	userData.id = response_json.id;
	userData.name = response_json.name;
	userData.role = response_json.role;
}

async function register({ name, email, password, passwordConfirm }) {
	if (password != passwordConfirm) throw "Password does not Match!";

	const response = await fetch(`${protocol}//${domain}/auth/register`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name,
			email,
			password,
		}),
	});

	await handleLoginResponse( response );
}

async function login({ email, password }) {
	const response = await fetch(`${protocol}//${domain}/auth/login`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});

	await handleLoginResponse( response );
}

async function refreshAccessToken() {
	const response = await fetch(`${protocol}//${domain}/auth/refresh-tokens`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			refreshToken: tokens.refresh.token
		}),
	});

	const response_json = await response.json();

	tokens.access = response_json.access;
	tokens.refresh = response_json.refresh;
	
	await saveTokens();
}

async function isLoggedIn() {
	if (tokens.refresh && tokens.access) {
		const refreshExpiryDate = new Date(tokens.refresh.expires).getTime();
		if (Date.now() > refreshExpiryDate) {
			return false;
		}

		const accessExpiryDate = new Date(tokens.access.expires).getTime();
		if (Date.now() > accessExpiryDate) {
			try {
				await refreshAccessToken();
			} catch (err) {
				return false;
			}
		}
		return true;
	} else {
		return false;
	}
}