import React, {useState} from 'react';
import {
  Alert,
  Linking,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onLoginClick = () => {
    console.log('login pressed');
    if (name.trim() === '') {
      Alert.alert('Alert', 'Please enter your username');
      return;
    }
    if (password.trim() === '') {
      Alert.alert('Alert', 'Please enter your password');
      return;
    }

    Linking.openURL('https://www.google.com/');
  };

  const onChangeName = (text: string) => {
    console.log('UsernameChanged:: ', text);
    setName(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.view}
        placeholder="Username"
        onChangeText={onChangeName}
        testID="user-name"
        value={name}
        maxLength={10}
      />
      <TextInput
        style={styles.view}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        testID="password"
      />
      <TouchableOpacity
        testID={'login'}
        onPress={onLoginClick}
        style={styles.loginBtn}>
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
