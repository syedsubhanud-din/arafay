import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import PrayerTimes from './PrayerTimes';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import moment from 'moment';
import momentHijri from 'moment-hijri';
import Geocoder from 'react-native-geocoding';
import {GOOGLE_MAPS_API_KEY} from '../../config/constants';

// Initialize the Geocoder for reverse geocoding
// Geocoder.init(GOOGLE_MAPS_API_KEY);

// const locationObj = Geocoder.from({
//   latitude: 24.9172,
//   longitude: 67.0924,
// });
// // console.log(locationObj._j.results[1].address_components[4].long_name);
// console.log(locationObj);

// Define the English locale for Hijri dates
momentHijri.updateLocale('en', {
  iMonths: [
    'Muharram',
    'Safar',
    'Rabiʻ al-awwal',
    'Rabiʻ al-thani',
    'Jumada al-awwal',
    'Jumada al-thani',
    'Rajab',
    'Shaʻban',
    'Ramadan',
    'Shawwal',
    'Dhuʻl-Qiʻdah',
    'Dhuʻl-Hijjah',
  ],
  iMonthsShort: [
    'Muh',
    'Saf',
    'Rab1',
    'Rab2',
    'Jum1',
    'Jum2',
    'Raj',
    'Sha',
    'Ram',
    'Shaw',
    'DhuQ',
    'DhuH',
  ],
});

const Popup = ({showPopUp, setShowPopUp}) => {
  const [currentTime, setCurrentTime] = useState(moment().format('LT'));
  const [currentHijriDate, setCurrentHijriDate] = useState(
    momentHijri().format('iYYYY/iM/iD'),
  );
  const navigation = useNavigation();
  const {specificMasjidDetails} = useSelector(state => state.masjidSlice);
  console.log(specificMasjidDetails);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format('LT'));
      setCurrentHijriDate(momentHijri().format('iMMMM iD, iYYYY [AH]'));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <View style={styles.main}>
      <View style={styles.overlay}></View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={require('../../assets/images/MasjidPopup.png')}
            style={styles.background}>
            <View style={styles.dateTimeContainer}>
              <View style={{width: '100%'}}>
                <View style={styles.closePopupIcon}>
                  <TouchableOpacity
                    style={styles.close}
                    onPress={() => setShowPopUp(!showPopUp)}>
                    <Icon name="close" size={24} color="white" />
                  </TouchableOpacity>
                </View>
                <View style={styles.dateTime}>
                  <Text style={styles.islamicDate}>{currentHijriDate}</Text>
                  <Text style={styles.location}>Karachi, Pakistan</Text>
                  <View style={styles.divider}></View>
                  <Text style={styles.time}>{currentTime}</Text>
                  <Text style={styles.remainingTime}>
                    Fajr 3 hours 9 min left
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <PrayerTimes specificMasjidTimings={specificMasjidDetails.result} />
        <View style={styles.viewDetailsContainer}>
          <TouchableOpacity
            onPress={() => {
              setShowPopUp(!showPopUp);
              navigation.navigate('MasjidDetails');
            }}>
            <Text style={styles.viewDetails}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Popup;

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    zIndex: 100,
  },
  container: {
    width: 300,
    overflow: 'hidden',
    borderRadius: 50,
    elevation: 10,
  },
  overlay: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.5,
  },
  imageContainer: {
    width: 300,
    height: 300,
  },
  background: {
    overflow: 'hidden',
    height: '100%',
    width: '100%',
  },
  dateTimeContainer: {
    flexDirection: 'row',
    width: 300,
  },
  closePopupIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  close: {
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
    marginTop: 10,
  },
  dateTime: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  islamicDate: {
    fontFamily: 'InknutAntiqua-Regular',
    fontSize: 15,
  },
  location: {
    fontFamily: 'InknutAntiqua-Regular',
    fontSize: 10,
  },
  divider: {
    backgroundColor: '#fff',
    height: 2,
    width: '20%',
    marginTop: 5,
    marginBottom: 15,
  },
  time: {
    fontFamily: 'Poppins-Medium',
    fontSize: 33,
  },
  remainingTime: {
    fontFamily: 'InknutAntiqua-Regular',
    fontSize: 14,
  },
  viewDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingBottom: 15,
  },
  viewDetails: {
    textAlign: 'center',
    fontFamily: 'Poppins-Semibold',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2473D8',
    backgroundColor: '#fff',

    textDecorationLine: 'underline',
  },

  textBlack: {
    color: 'black',
    fontSize: 12,
    marginBottom: 10,
    fontFamily: 'InknutAntiqua-Medium',
    lineHeight: 22,
  },
});
