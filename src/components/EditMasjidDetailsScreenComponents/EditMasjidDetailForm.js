import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import TrashIcon from 'react-native-vector-icons/EvilIcons';
import PencilPlusIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import PrayerTimes from './PrayerTimes';
import OtherTimingsTable from './OtherTimingsTable';
import AddOtherTimingsTable from './AddOtherTimingsTable';
import EditMasjidTimings from './EditMasjidTimings';

const initialData = [
  {
    id: '1',
    title: 'Fajr',
    jamat: '07:09',
    startTime: '07:09',
    endTime: '07:09',
  },
  {
    id: '2',
    title: 'Zuhr',
    jamat: '07:09',
    startTime: '07:09',
    endTime: '07:09',
  },
  {
    id: '3',
    title: 'Asar',
    jamat: '07:09',
    startTime: '07:09',
    endTime: '07:09',
  },
  {
    id: '4',
    title: 'Maghrib',
    jamat: '07:09',
    startTime: '07:09',
    endTime: '07:09',
  },
  {
    id: '5',
    title: 'Isha',
    jamat: '07:09',
    startTime: '07:09',
    endTime: '07:09',
  },
];

const EditMasjidDetailForm = () => {
  const {specificMasjidDetails} = useSelector(state => state?.masjidSlice);

  const [data, setData] = useState(initialData);
  const [formData, setFormData] = useState({
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess',
    images: [
      {
        id: 1,
        source: require('../../assets/images/Slide1.jpeg'),
      },
      {
        id: 2,
        source: require('../../assets/images/Slide2.jpeg'),
      },
      {
        id: 3,
        source: require('../../assets/images/Slide1.jpeg'),
      },
      // {
      //   id: 4,
      //   source: require('../../assets/images/Slide2.jpeg'),
      // },
      // {
      //   id: 5,
      //   source: require('../../assets/images/Slide1.jpeg'),
      // },
    ],
    namazTimings: data,
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleFileUpload = field => {
    // Logic to handle file upload
  };

  const deleteImage = id => {
    const newImages = formData.images.filter(image => image.id !== id);
    setFormData({...formData, images: newImages});
  };

  const handleInputChange = (text, index, key) => {
    const newData = [...data];
    newData[index][key] = text;
    setData(newData);
    console.log(formData.namazTimings);
  };

  // const renderItem = ({item, index}) => (
  //   <View style={styles.row}>
  //     <Text style={styles.cell}>{item.title}</Text>
  //     <TextInput
  //       style={styles.cell}
  //       value={item.jamat}
  //       onChangeText={text => handleInputChange(text, index, 'jamat')}
  //     />
  //     <TextInput
  //       style={styles.cell}
  //       value={item.startTime}
  //       onChangeText={text => handleInputChange(text, index, 'startTime')}
  //     />
  //     <TextInput
  //       style={styles.cell}
  //       value={item.endTime}
  //       onChangeText={text => handleInputChange(text, index, 'endTime')}
  //     />
  //   </View>
  // );
  return (
    <View style={styles.container}>
      <Text style={[styles.pageDescription, styles.textGray]}>
        You are now the Claimed admin of the masjid. Click below to edit the
        details
      </Text>

      {/* <OtherTimingsTable /> */}

      <View>
        <View>
          <Text style={[styles.textGray, styles.textLabels]}>Description</Text>
          <View style={styles.textFieldContainer}>
            <TextInput
              placeholder="CNIC (required)"
              placeholderTextColor={'#B8B1B1'}
              style={styles.textInput}
              required
              multiline
              numberOfLines={10}
              name="description"
              value={formData.description}
              onChangeText={text => handleChange('description', text)}
            />
          </View>
        </View>
        <EditMasjidTimings />
        <AddOtherTimingsTable />
        <View>
          <Text style={[styles.textGray, styles.textLabels]}>Pictures</Text>
          <View style={styles.imagesContainer}>
            {formData.images.map((item, index) => {
              return (
                <View style={styles.imageContainer} key={item.id}>
                  <Image source={item.source} style={styles.image} />
                  <TouchableOpacity
                    style={styles.deleteIconContainer}
                    onPress={() => deleteImage(item.id)}>
                    <TrashIcon
                      name="trash"
                      color="#00609D"
                      fontSize={20}
                      style={styles.deleteIcon}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          <TouchableOpacity style={styles.addImageBtn}>
            <Text style={styles.addImageText}>Add More</Text>
          </TouchableOpacity>
        </View>
        {/* <View>
          <View style={styles.tableHeadingContainer}>
            <Text style={[styles.textGray, styles.textLabels]}>
              Namaz Timings
            </Text>
            <TouchableOpacity>
              <PencilPlusIcon
                name="pencil-plus"
                color="#00609D"
                fontSize={20}
                style={styles.deleteIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.tableContainer}>
            <View style={styles.header}>
              <Text style={[styles.cell, styles.headerCell]}>Title</Text>
              <Text style={[styles.cell, styles.headerCell]}>Jamat</Text>
              <Text style={[styles.cell, styles.headerCell]}>Start Time</Text>
              <Text style={[styles.cell, styles.headerCell]}>End Time</Text>
            </View>
            {data.map((item, index) => (
              <View key={item.id} style={styles.row}>
                <TextInput
                  style={styles.cell}
                  value={item.title}
                  onChangeText={text => handleInputChange(text, index, 'title')}
                />
                <TextInput
                  style={styles.cell}
                  value={item.jamat}
                  onChangeText={text => handleInputChange(text, index, 'jamat')}
                />
                <TextInput
                  style={styles.cell}
                  value={item.startTime}
                  onChangeText={text =>
                    handleInputChange(text, index, 'startTime')
                  }
                />
                <TextInput
                  style={styles.cell}
                  value={item.endTime}
                  onChangeText={text =>
                    handleInputChange(text, index, 'endTime')
                  }
                />
              </View>
            ))}
          </View>
        </View> */}

        <View style={styles.changeButtonContainer}>
          <View style={styles.buttonFieldContainer}>
            <TouchableOpacity onPress={handleFileUpload}>
              <Text style={[styles.buttonText, styles.textBlack]}>
                Save Changes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditMasjidDetailForm;

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
    fontSize: 8,
    paddingHorizontal: 10,
    flex: 1,
    textAlignVertical: 'top',
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  imageContainer: {
    position: 'relative',
    width: 104,
    height: 155,
    backgroundColor: '#F9F9F9',
    elevation: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  deleteIconContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
    padding: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },

  deleteIcon: {
    fontSize: 20,
  },
  addImageBtn: {
    marginVertical: 10,
  },
  addImageText: {
    color: '#00609D',
    fontSize: 8,
  },
  tableHeadingContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
  },
  headerCell: {
    paddingVertical: 15,
    backgroundColor: 'rgba(217, 217, 217, 0.62)',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    color: 'black',
    padding: 5,
    textAlign: 'center',
    fontSize: 10,
  },
  changeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
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
