import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NearByMasjidCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* <Image source={require(`${item.ImageSource}`)} style={styles.image} /> */}
        {/* <Image source={{ uri: item.ImageSource }} style={styles.image} /> */}
        <Image source={require('../../assets/images/Masjid.png')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.textBlack} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
          <Text style={styles.textBlack} numberOfLines={1} ellipsizeMode="tail">{item.address}</Text>
        </View>
        <View>
          <Text style={styles.textTheme}>Show on Map</Text>
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
    alignItems: 'center',
  },
  imageContainer: {},
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    // borderWidth: 1,
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
  },
  
});
