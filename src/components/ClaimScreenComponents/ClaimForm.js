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
        <View>
          <Text style={[styles.textGray, styles.textLabels]}>CNIC</Text>
          <View style={styles.textFieldContainer}>
            <TextInput
              placeholder="CNIC (required)"
              placeholderTextColor={'#B8B1B1'}
              style={styles.textInput}
              required
              name="cnic"
              value={formData.cnic}
              onChangeText={text => handleChange('cnic', text)}
            />
            <TouchableOpacity
              onPress={() => handleFileUpload('cnic')}
              style={styles.uploadIcon}>
              <UploadIcon name="upload" size={20} style={{color: '#08568B'}} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={[styles.textGray, styles.textLabels]}>Masjid Document</Text>
          <View style={styles.textFieldContainer}>
            <TextInput
              placeholder="Masjid Document (required)"
              placeholderTextColor={'#B8B1B1'}
              style={styles.textInput}
              required
              name="masjidDocument"
              value={formData.cnic}
              onChangeText={text => handleChange('masjidDocument', text)}
            />
            <TouchableOpacity
              onPress={() => handleFileUpload('cnic')}
              style={styles.uploadIcon}>
              <UploadIcon name="upload" size={20} style={{color: '#08568B'}} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.claimContainer}>
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
  pageDescription: {
    fontSize: 13,
    marginBottom: 20,
    color: '#594C3B',
  },
  textFieldContainer: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  uploadIcon: {
    paddingHorizontal: 10,
  },
  textLabels: {
    marginBottom: 5,
    fontSize: 12,
  },
  textInput: {
    color: '#594C3B',
    fontSize: 12,
    paddingLeft: 10,
    flex: 1,
  },
  claimContainer: {
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
