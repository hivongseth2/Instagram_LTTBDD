import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { BASE_API_URL } from '@env';

const Login = ({ navigation, route }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const { handleLogin } = route.params || {};

  const handleLoginPress = async () => {
    try {
      const response = await fetch(`${BASE_API_URL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, password }),
      });

      if (response.status === 200) {
        const userData = await response.json();
        await AsyncStorage.setItem('userData', JSON.stringify(userData));

        handleLogin();

        navigation.reset({
          index: 0,
          routes: [{ name: 'Router' }],
        });
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Phone"
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLoginPress} />
      <Text style={styles.registerText} onPress={() => navigation.navigate('Register')}>
        If not account, please register
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  registerText: {
    marginTop: 16,
    color: 'blue',
    fontSize: 16,
  },
});

export default Login;
