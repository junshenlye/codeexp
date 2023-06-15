import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import loginStyle from '../Login/LoginStyles';
import { handleLogin } from '../Login/Login';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={loginStyle.container}>
        <Text style={loginStyle.title}>Login</Text>
      <TextInput
        style={loginStyle.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={loginStyle.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={loginStyle.button} onPress={() => handleLogin(email,password)}>
        <Text style={loginStyle.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
