import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Details = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dateTime}>
        <Text style={styles.islamicDate}>Muharram 5, 1446 AH</Text>
        <Text style={styles.location}>Karachi, Pakistan</Text>
        <View style={styles.divider}></View>
        <Text style={styles.time}>04:41 am</Text>
        <Text style={styles.remainingTime}>Fajr 3 hours 9 min left</Text>
      </View>
      <View style={styles.searchSection}>
        <Text style={styles.searchLabel}>search masjid timings near you</Text>
        <TextInput style={styles.searchBar} />
      </View>
      <View style={styles.namazTimes}>
        <View style={styles.namazTimeCard}>
          <View style={styles.namazTimeCardIcon}>
            <Image
              source={require('../../assets/images/Fajr.png')}
              style={styles.image}
            />
          </View>
          <Text style={styles.namazTimeCardText}>Fajr, 04:20 am</Text>
        </View>
        <View style={styles.namazTimeCard}>
          <View style={styles.namazTimeCardIcon}>
            <Image
              source={require('../../assets/images/Zuhr.png')}
              style={styles.image}
            />
          </View>
          <Text style={styles.namazTimeCardText}>Zhur, 12:50 pm</Text>
        </View>
        <View style={styles.namazTimeCard}>
          <View style={styles.namazTimeCardIcon}>
            <Image
              source={require('../../assets/images/Asr.png')}
              style={styles.image}
            />
          </View>
          <Text style={styles.namazTimeCardText}>Asr, 05:20 pm</Text>
        </View>
        <View style={styles.namazTimeCard}>
          <View style={styles.namazTimeCardIcon}>
            <Image
              source={require('../../assets/images/Magrib.png')}
              style={styles.image}
            />
          </View>
          <Text style={styles.namazTimeCardText}>Magrib, 7:25 pm</Text>
        </View>
        <View style={styles.namazTimeCard}>
          <View style={styles.namazTimeCardIcon}>
            <Image
              source={require('../../assets/images/Isha.png')}
              style={styles.image}
            />
          </View>
          <Text style={styles.namazTimeCardText}>Isha, 08:52 pm</Text>
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    flex: 1,
    width: '100%',
  },
  dateTime: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    marginTop: 60,
  },
  islamicDate: {
    fontFamily: 'InknutAntiqua-Regular',
    fontSize: 20,
  },
  location: {
    fontFamily: 'InknutAntiqua-Regular',
    fontSize: 14,
  },
  divider: {
    backgroundColor: '#fff',
    height: 2,
    width: '30%',
    marginTop: 5,
    marginBottom: 15,
  },
  time: {
    fontFamily: 'Poppins-Medium',
    fontSize: 40,
  },
  remainingTime: {
    fontFamily: 'InknutAntiqua-Regular',
    fontSize: 18,
  },
  searchSection: {
    flexDirection: 'column',
    width: '100%',
    marginTop: 30,
    marginBottom: 20,
  },
  searchLabel: {
    fontFamily: 'InknutAntiqua-Medium',
    fontSize: 12,
  },
  searchBar: {
    backgroundColor: '#CACACB',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 20,
  },
  namazTimes: {
    flex: 2,
  },
  namazTimeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  namazTimeCardIcon: {
    backgroundColor: '#B5C3D6',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    height: 25,
    width: 25,
    // resizeMode: "contain",
    // alignSelf: "center",
    // tintColor: "#ffffff"
  },
  namazTimeCardText: {
    fontFamily: 'InknutAntiqua-Medium',
    fontSize: 14,
    marginLeft: 20,
    flex: 1,
    paddingBottom: 5,
  },
});
