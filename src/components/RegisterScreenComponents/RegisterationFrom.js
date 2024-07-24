import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
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
          <View style={styles.googleImageContainer}>
            <Image
              source={require('../../assets/images/google_logo.png')}
              style={styles.googleImage}
            />
          </View>
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
  googleImageContainer: {
    width: 25,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  googleImage: {
    width: 18,
    height: 18,
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
    height: 1.5,
    backgroundColor: '#594C3B',
  },
  dividerText: {
    fontWeight: '600',
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
