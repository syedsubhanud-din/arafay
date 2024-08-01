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
import CheckIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {register} from '../../store/Slices/UserDataSlice';
const Signup = ({setState}) => {
  const [isSelected, setSelection] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone_number: '',
  });

  const handleChange = (name, value) => {
    setFormData({...formData, [name]: value});
    console.log(formData);
  };

  const handleSubmit = () => {
    dispatch(register({...formData, setState}));
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
              placeholder="Name"
              placeholderTextColor={'#7E7B7B'}
              name="name"
              required
              value={formData.name}
              onChangeText={text => handleChange('name', text)}
            />
          </View>
          <View style={styles.textFieldContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Phone"
              placeholderTextColor={'#7E7B7B'}
              name="phone_number"
              required
              value={formData.phone_number}
              onChangeText={text => handleChange('phone_number', text)}
            />
          </View>
          <View style={styles.textFieldContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
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
              name="password"
              secureTextEntry={true}
              required
              value={formData.password}
              onChangeText={text => handleChange('password', text)}
            />
          </View>
          <View style={styles.textFieldContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Re-Enter Password (required)"
              placeholderTextColor={'#7E7B7B'}
              name="confirmPassword"
              secureTextEntry={true}
              required
              value={formData.confirmPassword}
              onChangeText={text => handleChange('confirmPassword', text)}
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
          <View style={styles.agreementContainer}>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity onPress={() => setSelection(!isSelected)}>
                <View style={styles.checkbox}>
                  {isSelected && (
                    <CheckIcon
                      name="check"
                      size={15}
                      color="white"
                      style={{backgroundColor: '#00609D'}}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <Text style={[styles.textBlack, styles.agrementText]}>
                I hereby agree to all
                <Text
                  style={styles.link}
                  onPress={() => navigation.navigate('Home')}>
                  {' terms and conditions '}
                </Text>
                and the applied
                <Text
                  style={styles.link}
                  onPress={() => navigation.navigate('Home')}>
                  {' privacy policies'}
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.loginContainer}>
            <View style={styles.buttonFieldContainer}>
              <TouchableOpacity onPress={handleSubmit}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
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
    marginTop: 10,
  },
  textFieldContainer: {
    borderWidth: 1,
    borderColor: '#666666',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textInput: {
    color: '#594C3B',
    fontSize: 12,
  },
  forgetPasswordText: {
    color: '#3BB0E2',
    fontSize: 13,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  divider: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  subDivider: {
    flex: 1,
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
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  checkbox: {
    // alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 20,
    color: 'black',
    borderWidth: 1,
    borderColor: '#594C3B',
    borderRadius: 2,
    marginHorizontal: 10,
  },
  label: {
    margin: 8,
  },
  link: {
    color: '#00609D',
    textDecorationLine: 'underline',
  },
  agrementText: {
    fontSize: 10,
  },
  buttonFieldContainer: {
    backgroundColor: '#005E9D',
    fontSize: 12,
    width: '70%',
    borderRadius: 10,
    textAlign: 'center',
    elevation: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 10,
    textAlign: 'center',
  },
  textGray: {
    color: '#594C3B',
  },
  textBlack: {
    color: '#000',
  },
  textBlue: {
    color: '#00609D',
  },
});
