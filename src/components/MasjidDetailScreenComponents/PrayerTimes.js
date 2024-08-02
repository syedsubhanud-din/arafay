import {Image, StyleSheet, Text, View} from 'react-native';
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

const PrayerTimes = ({specificMasjidDetails}) => {
  return (
    <View style={styles.namazTimingsContainer}>
      {specificMasjidDetails.result.map((item, index) => (
        <View key={item.id}>
          <View style={styles.namazTimeIcon}>
            <Image
              source={PrayerTimesData[index].image}
              style={styles.namazTimeIconImage}
            />
          </View>
          <Text style={styles.textBlack}>
            <Text style={styles.namazTimeLabel}>
              {item.prayer} {'\n'}
              {item.jamat}
            </Text>
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
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#fff',
    marginBottom: 5,
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
    fontSize: 10,
    marginBottom: 10,
    fontFamily: 'InknutAntiqua-Medium',
    lineHeight: 20,
    textAlign: 'center',
  },
});
