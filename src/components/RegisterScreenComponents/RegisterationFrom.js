import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import GoogleIcon from 'react-native-vector-icons/AntDesign';
import SvgUri from 'react-native-svg';
const RegisterationFrom = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (name, value) => {
    setFormData({...formData, [name]: value});
    console.log(formData);
  };

  const handleSubmit = () => {
    console.log('Form submitted with data:', formData);
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.pageHeading, styles.textGray]}>Registration</Text>
      <Text style={[styles.pageDescription, styles.textGray]}>
        Login to your account to continue claming your masjid
      </Text>
      <View>
        <View style={styles.textFieldContainer}>
          <Text style={[styles.textGray, styles.textLabels]}>Email/Phone</Text>
          <TextInput
            placeholder="email or phone"
            placeholderTextColor={'#B8B1B1'}
            style={styles.textInput}
            name="email"
            value={formData.email}
            onChangeText={text => handleChange('email', text)}
          />
        </View>
        <View style={styles.textFieldContainer}>
          <Text style={[styles.textGray, styles.textLabels]}>Password</Text>
          <TextInput
            placeholder="password (required)"
            required
            placeholderTextColor={'#B8B1B1'}
            style={styles.textInput}
            secureTextEntry={true} 
            name="password"
            value={formData.password}
            onChangeText={text => handleChange('password', text)}
          />
        </View>
        <View style={styles.divider}>
          <View style={styles.subDivider}></View>
          <Text style={[styles.textGray, styles.dividerText]}>OR</Text>
          <View style={styles.subDivider}></View>
        </View>
        <View style={styles.textGoogleFieldContainer}>
          <GoogleIcon name="google" fontSize={20} color="black" />
          {/* <Image
                  source={'../../assets/images/google_logo.svg'}
                  width={20}
                  height={20}
                /> */}
          {/* <View style={styles.googleLogo}>
            <SvgUri
              width={20}
              height={20}
              source={require('../../assets/images/google_logo.svg')}
            />
          </View> */}
          <Text style={[styles.textGray, styles.textLabelsGoogle]}>
            Continue With Google
          </Text>
        </View>
        <View style={styles.loginContainer}>
          <View style={styles.buttonFieldContainer}>
            <TouchableOpacity onPress={handleSubmit}>
              <Text style={[styles.buttonText, styles.textBlack]}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RegisterationFrom;

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
  divider: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  subDivider: {
    width: '30%',
    height: 2,
    backgroundColor: '#594C3B',
  },
  dividerText: {
    fontWeight: '600',
  },
  googleLogo: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textLabels: {
    marginBottom: 5,
    fontSize: 12,
  },
  textInput: {
    backgroundColor: 'white',
    color: '#594C3B',
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
    color: 'black',
  },
  textGray: {
    color: '#594C3B',
  },
  textBlack: {
    color: '#000',
  },
});
