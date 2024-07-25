import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppBar from '../../components/LoginSignupScreenComponents/AppBar';
import Login from '../../components/LoginSignupScreenComponents/Login';
import Signup from '../../components/LoginSignupScreenComponents/Signup';

const LoginSignupScreen = ({drawer, setDrawer}) => {
  const [state, setState] = useState('login');
  return (
    <View style={styles.main}>
      <AppBar
        state={state}
        setState={setState}
        drawer={drawer}
        setDrawer={setDrawer}
      />
      {state === 'login' ? <Login /> : <Signup />}
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
