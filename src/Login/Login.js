export const handleLogin = (username, password) => {
    // Perform the validation logic here
    if (username === 'admin' && password === 'password') {
      console.log('Login successful');
      // Do something else, such as navigate to another screen
    } else {
      console.log('Invalid username or password');
      // Display an error message or take appropriate action
    }
  };
  