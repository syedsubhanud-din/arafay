import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const NearByMasjidCard = ({item, showPopUp, setShowPopUp}) => {
  const navigatation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* <Image source={require(`${item.ImageSource}`)} style={styles.image} /> */}
        {/* <Image source={{ uri: item.ImageSource }} style={styles.image} /> */}
        <Image
          source={require('../../assets/images/Masjid.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.textBlack} numberOfLines={1} ellipsizeMode="tail">
            {item.name}
          </Text>
          <Text style={styles.textBlack} numberOfLines={1} ellipsizeMode="tail">
            {item.address}
          </Text>
        </View>
        <View style={styles.getRegistered}>
          <TouchableOpacity onPress={() => setShowPopUp(!showPopUp)}>
            <Text style={styles.textTheme}>Show on Map</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigatation.navigate('Register')}>
            <Text style={styles.textTheme}>Get Registered</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NearByMasjidCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#F6F6F6',
    borderRadius: 30,
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {},
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  getRegistered: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    // height: '100%',
    // width: '100%',
  },
  textBlack: {
    color: '#000',
    fontFamily: 'InknutAntiqua-SemiBold',
    fontSize: 10,
    lineHeight: 20,
  },
  textTheme: {
    color: 'rgba( 118 ,158 ,209 , 0.85)',
    fontFamily: 'InknutAntiqua-SemiBold',
    fontSize: 10,
    textDecorationLine: 'underline',
    marginBottom: 5,
    lineHeight: 20,
  },
});
