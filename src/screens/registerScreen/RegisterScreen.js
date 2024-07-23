import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AppBar from '../../components/RegisterScreenComponents/AppBar';
import GoogleIcon from 'react-native-vector-icons/AntDesign';

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <ImageBackground
        source={require('../../assets/images/RegisterBG.jpeg')}
        style={styles.imageBg}>
        {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Login
            </Text>
          </TouchableOpacity>
        </View> */}

        <View style={styles.overlay}></View>
        <AppBar />
        <ScrollView>
          <View style={styles.container}>
            <Text style={[styles.pageHeading, styles.textGray]}>
              Registration
            </Text>
            <Text style={[styles.pageDescription, styles.textGray]}>
              Login to your account to continue claming your masjid
            </Text>
            <View>
              <View style={styles.textFieldContainer}>
                <Text style={[styles.textGray, styles.textLabels]}>
                  Email/Phone
                </Text>
                <TextInput
                  placeholder="email or phone"
                  placeholderTextColor={'#B8B1B1'}
                  style={styles.textInput}
                />
              </View>
              <View style={styles.textFieldContainer}>
                <Text style={[styles.textGray, styles.textLabels]}>
                  Email/Phone
                </Text>
                <TextInput
                  placeholder="password (required)"
                  required
                  placeholderTextColor={'#B8B1B1'}
                  style={styles.textInput}
                />
              </View>
              <View style={styles.textGoogleFieldContainer}>
                <GoogleIcon name="google" fontSize={20} color="black" />
                <Text style={[styles.textGray, styles.textLabelsGoogle]}>
                  Continue With Google
                </Text>
              </View>
              <View style={styles.loginContainer}>
                <View style={styles.buttonFieldContainer}>
                  <TouchableOpacity>
                    <Text style={[styles.buttonText , styles.textBlack]}>Log In</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  imageBg: {
    flex: 1,
  },
  overlay: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.7,
  },
  pageHeading: {
    fontSize: 30,
    // fontWeight: 'bold',
    marginBottom: 20,
    color: '#594C3B',
    textAlign: 'center',
  },
  pageDescription: {
    fontSize: 13,
    marginBottom: 20,
    color: '#594C3B',
    textAlign: 'center',
  },
  textFieldContainer: {
    marginBottom: 20,
  },
  textGoogleFieldContainer: {
    borderWidth: 1,
    borderColor: '#594C3B',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 3,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  textLabels: {
    marginBottom: 5,
    fontSize: 12,
  },
  textInput: {
    backgroundColor: 'white',
    fontSize: 12,
    paddingLeft: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 10,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonFieldContainer: {
    backgroundColor: 'white',
    fontSize: 12,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    textAlign: 'center',
    elevation: 10,
    color: 'black'
  },
  textGray: {
    color: '#594C3B',
  },
  textBlack: {
    color: '#000',
  },
});
