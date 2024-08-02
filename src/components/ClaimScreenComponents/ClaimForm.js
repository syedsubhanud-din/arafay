import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import UploadIcon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import DocumentPicker from 'react-native-document-picker';
import { claim } from '../../store/Slices/ClaimUserSlice';

const ClaimForm = () => {
  const {token} = useSelector(state => state?.UserInfo);
  const masjidId = useSelector(state => state?.masjidSlice.specificMasjidDetails.id);
  const dispatch = useDispatch();
  // console.log(token)
  // console.log(specificMasjidDetails.id)
  // const [formData, setFormData] = useState({cnic: '', file: null});
  const [cnic, setCnic] = useState(null);
  const [fileData, setFileData] = useState(null);

  // const handleChange = (name, value) => {
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  //   console.log(formData);
  // };

  // const handleFilePick = async () => {
  //   try {
  //     const res = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.allFiles], // You can specify types here
  //     });
  //     setFormData(prevState => ({
  //       ...prevState,
  //       file: res[0], // Use the first file picked
  //     }));
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err)) {
  //       Alert.alert('Cancelled', 'File selection was cancelled.');
  //     } else {
  //       console.error(err);
  //       Alert.alert('Error', 'An error occurred while selecting the file.');
  //     }
  //   }
  // };

  // ? File Pick Code
  const handleFilePick = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFileData(res[0]);
      console.log(fileData);
      // uploadFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        throw err;
      }
    }
  };

  const uploadFormData = async file => {
    const formData = new FormData();
    // console.log(formData._parts[0]);
    formData.append({
      // name: fileData?.name,
      // type: fileData?.type,
      cnic: cnic,
      // document: fileData?.uri,
    });
    // formData[0].append(cnic);
    const formDataObj = formData._parts[0][0];

    let formDataa = {
      cnic: cnic,
      // document: file.uri,
    }
    // console.log(formDataObj);
    dispatch(claim({formDataa , masjidId , token}))

    // try {
    //   const response = await axios.post(
    //     'http://192.168.80.19:3000/api/5cb2208c-57dc-49e1-bb67-a1976d2e7b99/claim',
    //     formDataObj,
    //     {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //         Authorization: `Bearer ${token}`,
    //       },
    //     },
    //   );
    //   console.log(response);
    // } catch (error) {
    //   console.error('File upload failed', error);
    // }
  };

  // const handleFileUpload = async () => {
  //   const {cnic, file} = formData;
  //   if (cnic && file) {
  //     const uploadData = new FormData();
  //     uploadData.append('file', {
  //       uri: file.uri,
  //       type: file.type,
  //       name: file.name,
  //     });
  //     uploadData.append('cnic', cnic);

  //     try {
  //       const response = await axios.post(
  //         'http://192.168.80.19:3000/api/5cb2208c-57dc-49e1-bb67-a1976d2e7b99/claim',
  //         uploadData,
  //         {
  //           headers: {
  //             ContentType: 'multipart/form-data',
  //             Authorization: `Bearer ${token}`,
  //           },
  //         },
  //       );

  //       if (response.status === 200) {
  //         Alert.alert('Upload Success', response.data.message);
  //       } else {
  //         Alert.alert('Upload Failed', response.data.message);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //       Alert.alert(
  //         'Upload Failed',
  //         'An error occurred while uploading the file.',
  //       );
  //     }
  //   } else {
  //     Alert.alert(
  //       'Missing Information',
  //       'Please provide your CNIC and select a file.',
  //     );
  //   }
  // };

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
              placeholderTextColor="#B8B1B1"
              style={styles.textInput}
              value={cnic}
              onChangeText={text => {
                setCnic(text);
                // console.log(cnic);
              }}
            />
          </View>
        </View>
        <View>
          <Text style={[styles.textGray, styles.textLabels]}>
            Masjid Document
          </Text>
          <View style={styles.textFieldContainer}>
            <Text style={styles.uploadButtonText}>
              {/* {formData[0]?.name
                ? formData[0]?.name
                : 'Masjid Document (required)'} */}
              Masjid Document (required)
            </Text>
            <TouchableOpacity
              onPress={handleFilePick}
              style={styles.uploadIcon}>
              <UploadIcon name="upload" size={20} color="#08568B" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.claimContainer}>
          <View style={styles.buttonFieldContainer}>
            <TouchableOpacity onPress={uploadFormData}>
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
  uploadButtonText: {
    color: '#B8B1B1',
    fontSize: 12,
    paddingLeft: 10,
    paddingVertical: 15,
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
