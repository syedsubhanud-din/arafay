import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppBar from '../../components/LoginSignupScreenComponents/AppBar';
import Login from '../../components/LoginSignupScreenComponents/Login';
import Signup from '../../components/LoginSignupScreenComponents/Signup';

const LoginSignupScreen = () => {
  const [state, setState] = useState('signup');
  return (
    <View style={styles.main}>
      <AppBar
        state={state}
        setState={setState}
      />
      {state === 'signup' ? <Signup /> : <Login />}
    </View>
  );
};

export default LoginSignupScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});
