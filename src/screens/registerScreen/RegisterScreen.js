import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AppBar from '../../components/RegisterScreenComponents/AppBar';

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/RegisterBG.jpeg')}
        style={{width: '100%', height: '100%'}}>
        {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Login
            </Text>
          </TouchableOpacity>
        </View> */}
        <AppBar />
        <Text style={{color: 'black'}}>RegisterScreen</Text>
      </ImageBackground>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 22,
  },
});
