import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const PrayerTimesData = [
  {
    id: 1,
    prayer: 'Fajr',
    time: '04:20',
    image: require('../../assets/images/Fajr.png'),
  },
  {
    id: 2,
    prayer: 'Zuhur',
    time: '12:50',
    image: require('../../assets/images/Zuhr.png'),
  },
  {
    id: 3,
    prayer: 'Asr',
    time: '05:20',
    image: require('../../assets/images/Asr.png'),
  },
  {
    id: 4,
    prayer: 'Magrib',
    time: '07:20',
    image: require('../../assets/images/Magrib.png'),
  },
  {
    id: 5,
    prayer: 'Isha',
    time: '08:50',
    image: require('../../assets/images/Isha.png'),
  },
];

const PrayerTimes = ({specificMasjidTimings}) => {
  return (
    <View style={styles.namazTimingsContainer}>
      {specificMasjidTimings?.map((masjid, index) => (
        <View key={masjid.id}>
          <View style={styles.namazTimeIcon}>
            <Image
              source={PrayerTimesData[index].image}
              style={styles.namazTimeIconImage}
            />
          </View>
          <Text style={styles.textBlack}>
            <Text style={styles.namazTimeLabel}>{masjid.prayer}</Text>
            {'\n'}
            <Text style={styles.namazTime}>{masjid.jamat}</Text>
          </Text>
        </View>
      ))}
    </View>
  );
};

export default PrayerTimes;

const styles = StyleSheet.create({
  namazTimingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  namazTimeIconContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  namazTimeIcon: {
    marginBottom: 15,
  },
  namazTimeIconImage: {
    margin: 'auto',
  },
  textBlack: {
    color: 'black',
    fontSize: 12,
    marginBottom: 10,
    fontFamily: 'InknutAntiqua-Medium',
    lineHeight: 22,
    textAlign: 'center',
  },
});
