import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import TrashIcon from 'react-native-vector-icons/EvilIcons';
import {useSelector} from 'react-redux';
import SectionHeading from './SectionHeading';
import DocumentPicker from 'react-native-document-picker';

const AddAndDeleteMasjidImages = () => {
  const {specificMasjidDetails} = useSelector(state => state?.masjidSlice);
  const [images, setImages] = useState([
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
  ]);

  const deleteImage = id => {
    const newImages = images.filter(image => image.id !== id);
    setImages(newImages);
  };

  const handleAddImage = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      if (res && res.length > 0) {
        const newImage = {
          id: images.length + 1,
          source: {uri: res[0].uri},
        };
        setImages([...images, newImage]);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled image picker');
      } else {
        console.log('DocumentPicker Error: ', err);
      }
    }
  };
  return (
    <View>
      <SectionHeading
        Heading={'Pictures'}
        SubHeading={'tap to add and delete pictures'}
      />
      <View style={styles.imagesContainer}>
        {images.map((item, index) => {
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
      <TouchableOpacity
        style={styles.addImageBtn}
        onPress={() => handleAddImage()}>
        <Text style={styles.addImageText}>Add More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddAndDeleteMasjidImages;

const styles = StyleSheet.create({
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
});
