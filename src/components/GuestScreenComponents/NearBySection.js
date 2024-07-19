import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import NearByMasjidCard from './NearByMasjidCard';
import {useSelector} from 'react-redux';

const DATA = [
  {
    id: '1',
    name: 'Quba Masjid',
    location: 'Karachi',
    showMapLink: '',
    imageSource: require('../../assets/images/Masjid.png'),
  },
  {
    id: '2',
    name: 'Minara Masjid',
    location: 'Hyderabad',
    showMapLink: '',
    imageSource: require('../../assets/images/Masjid.png'),
  },
  {
    id: '3',
    name: 'Roshan Masjid',
    location: 'Hyderabad',
    showMapLink: '',
    imageSource: require('../../assets/images/Masjid.png'),
  },
  {
    id: '4',
    name: 'Faisal Masjid',
    location: 'Faislabad',
    showMapLink: '',
    imageSource: require('../../assets/images/Masjid.png'),
  },
];

const NearBySection = () => {
  const MasjidData = useSelector(state => state.masjidInfo);
  return (
    <View style={styles.container}>
      <View style={styles.nextPrayerBox}>
        <Text style={[styles.textNextPrayer, styles.textWhite]}>
          Next Prayer
        </Text>
        <Text style={[styles.textTime, styles.textWhite]}>12:52 pm</Text>
      </View>
      <View style={styles.masjidNearByBox}>
        <Text style={[styles.masjidNearByText, styles.textTheme]}>
          Masjid's Near by
        </Text>
        <FlatList
          data={MasjidData.slice(0, 5)}
          keyExtractor={item => item._id}
          renderItem={({item}) => <NearByMasjidCard item={item} />}
        />
        {/* <NearByMasjidCard /> */}
      </View>
    </View>
  );
};

export default NearBySection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 430,
  },
  nextPrayerBox: {
    backgroundColor: 'rgb( 118 ,158 ,209)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  textNextPrayer: {
    fontFamily: 'InknutAntiqua-SemiBold',
    fontSize: 15,
  },
  textTime: {
    fontFamily: 'InknutAntiqua-Medium',
    fontSize: 30,
    lineHeight: 50,
  },
  masjidNearByBox: {
    flex: 1,
    flexDirection: 'column',
  },
  masjidNearByText: {
    fontFamily: 'InknutAntiqua-SemiBold',
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 10,
  },
  textWhite: {
    color: '#FFFFFF',
  },
  textBlack: {
    color: '#000000',
  },
  textTheme: {
    color: 'rgba( 118 ,158 ,209 , 0.85)',
  },
});
