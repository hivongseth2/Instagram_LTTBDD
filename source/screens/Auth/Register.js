import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

import { BASE_API_URL } from '@env';

const Register = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${BASE_API_URL}/user/register`, {
        phone,
        name,
        fullName,
        password,
      });

      if (response.status === 200) {
        Alert.alert('Đăng ký thành công');
        navigation.navigate('Login'); // Điều hướng sang màn hình Login sau khi đăng ký thành công
      } else {
        Alert.alert('Đăng ký không thành công');
      }
    } catch (error) {
      console.error('Đã xảy ra lỗi:', error);
      Alert.alert('Đăng ký không thành công');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Số điện thoại"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Tên người dùng"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Họ và tên"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Đăng ký</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.backText}>Quay lại đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  registerButton: {
    backgroundColor: 'blue',
    width: '80%',
    alignItems: 'center',
    padding: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  backText: {
    marginTop: 20,
    color: 'blue',
    fontSize: 16,
  },
});

export default Register;
