import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import EditIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
const Profile = () => {
  const navigation = useNavigation();
  const {name, email, phone_number , role} = useSelector(
    state => state?.UserInfo?.user,
  );
  const [formData, setFormData] = useState({
    name,
    email,
    phone_number,
  });

  const handleChange = (name, value) => {
    setFormData({...formData, [name]: value});
    console.log(formData);
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImage}>
            <Image
              source={require('../../assets/images/profile.png')}
              style={styles.profile}
            />
          </View>
          <TouchableOpacity style={styles.editIconContainer}>
            <EditIcon name="edit" size={20} color="#00609D" />
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.textFieldContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              placeholderTextColor={'#7E7B7B'}
              name="name"
              value={formData.name}
              onChangeText={text => handleChange('name', text)}
            />
          </View>
          <View style={styles.textFieldContainer}>
            <Text style={styles.label}>Email</Text>
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
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Phone Number"
              placeholderTextColor={'#7E7B7B'}
              name="phone_number"
              value={formData.phone_number}
              onChangeText={text => handleChange('phone_number', text)}
            />
          </View>
          {role === 'owner' && <View style={styles.claimedTextContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Claim')}>
              <Text style={styles.claimedText}>View Your Claimed Masjid</Text>
            </TouchableOpacity>
          </View>}
        </View>
      </View>
    </View>
  );
};

export default Profile;

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
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#015F9E',
    color: 'white',
    position: 'relative',
  },
  profile: {
    width: '100%',
    height: '100%',
    borderRadius: 200,
    backgroundColor: 'transparent',
  },
  editIconContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  editProfileText: {
    color: '#00609D',
  },
  formContainer: {
    flex: 1,
    width: '80%',
    padding: 10,
    gap: 10,
    marginTop: 40,
  },
  label: {
    color: '#7E7B7B',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#666666',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#594C3B',
    fontSize: 12,
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
  claimedTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  claimedText: {
    color: '#00609D',
    fontSize: 13,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
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
