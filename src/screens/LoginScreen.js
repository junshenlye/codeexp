import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import loginStyle from '../Login/LoginStyles';
import { handleLogin } from '../Login/Login';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={loginStyle.container}>
        <Text style={loginStyle.title}>Your Industry, Your Skills</Text>
      <TextInput
        style={loginStyle.input}
        placeholder="Industry"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={loginStyle.input}
        placeholder="Job Title"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={loginStyle.button} onPress={() => handleLogin({navigation})}>
        <Text style={loginStyle.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
