import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import AppBar from '../../components/UserProfileScreenComponents/AppBar';
import Profile from '../../components/UserProfileScreenComponents/Profile';

const LoginSignupScreen = () => {
  return (
    <View style={styles.main}>
      <AppBar />
      <ScrollView>
        <Profile />
      </ScrollView>
    </View>
  );
};

export default LoginSignupScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    gap: 20
  },
});
