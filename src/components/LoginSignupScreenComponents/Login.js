import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import PencilIcon from 'react-native-vector-icons/SimpleLineIcons';
const Login = () => {
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
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <UserIcon name="user" size={50} color="white" />
          <TouchableOpacity style={styles.editIcon}>
            <PencilIcon name="pencil" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.textFieldContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Email / Phone"
              placeholderTextColor={'#7E7B7B'}
              name="email"
              value={formData.email}
              onChangeText={text => handleChange('email', text)}
            />
          </View>
          <View style={styles.textFieldContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Password (required)"
              placeholderTextColor={'#7E7B7B'}
              name="email"
              value={formData.email}
              onChangeText={text => handleChange('email', text)}
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
                <Text style={[styles.buttonText, styles.textBlack]}>
                  Log In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#015F9E',
    color: 'white',
    position: 'relative',
  },
  editIcon: {
    position: 'absolute',
    top: 0,
    right: -10,
    padding: 10,
    fontWeight: 'bold',
    borderRadius: 10,
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    width: '80%',
    padding: 10,
    gap: 10,
    marginTop: 40,
  },
  textFieldContainer: {
    borderWidth: 1,
    borderColor: '#666666',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  divider: {
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