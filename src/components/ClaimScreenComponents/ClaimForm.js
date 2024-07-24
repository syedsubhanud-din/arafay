import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import UploadIcon from 'react-native-vector-icons/Feather';

const ClaimForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    cnic: '',
    masjidDocument: '',
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileUpload = field => {
    // Logic to handle file upload
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.pageDescription, styles.textGray]}>
        Fill in the below credentials and upload documents to proceed with your
        request
      </Text>
      <View>
        <View style={styles.textFieldContainer}>
          <Text style={[styles.textGray, styles.textLabels]}>Full Name</Text>
          <TextInput
            placeholder="name (required)"
            placeholderTextColor={'#B8B1B1'}
            style={styles.textInput}
            required
            name="name"
            value={formData.name}
            onChangeText={text => handleChange('name', text)}
          />
        </View>
        <View style={styles.textFieldContainer}>
          <Text style={[styles.textGray, styles.textLabels]}>CNIC</Text>
          <View style = {{flexDirection: 'row'}}>
            <TextInput
              placeholder="CNIC (required)"
              placeholderTextColor={'#B8B1B1'}
              style={styles.textInput}
              required
              name="cnic"
              value={formData.cnic}
              onChangeText={text => handleChange('cnic', text)}
            />
            <TouchableOpacity onPress={() => handleFileUpload('cnic')}>
              <UploadIcon name="upload" size={20} style={{color: 'black'}} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.loginContainer}>
          <View style={styles.buttonFieldContainer}>
            <TouchableOpacity onPress={handleFileUpload}>
              <Text style={[styles.buttonText, styles.textBlack]}>
                Proceed Claim
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ClaimForm;

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
    flex: 1
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
