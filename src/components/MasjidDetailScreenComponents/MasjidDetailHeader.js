import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LocationIcon from 'react-native-vector-icons/Ionicons';
const MasjidDetailHeader = () => {
  return (
    <View style={styles.headerSection}>
      <View style={styles.sectionHeadingContainer}>
        <Text style={[styles.sectionHeading, styles.textBlack]}>
          Al-Aqsa Masjid
        </Text>
        <Text style={[styles.location, styles.textgray]}>
          <Text>
            <LocationIcon name="location-outline" />
          </Text>
          <Text style={{borderWidth: 2}}>Karachi , Pakistan</Text>
        </Text>
      </View>
      <View style={styles.bullet}>
        <Text style={[styles.textWhite, styles.distance]}>3.5 km</Text>
        <Text style={[styles.textWhite]}>
          from your current {'\n'} location
        </Text>
      </View>
    </View>
  );
};

export default MasjidDetailHeader;

const styles = StyleSheet.create({
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingBottom: 10,
    // borderBottomWidth: 1,
    // borderColor: '#E0E0E0',
  },
  sectionHeadingContainer: {
    paddingLeft: 20,
  },
  sectionHeading: {
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
  },
  location: {
    // borderWidth: 1,
    // justifyContent: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  bullet: {
    backgroundColor: '#00609D',
    padding: 10,
    paddingHorizontal: 30,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    right: 0,
    // marginBottom: 10,
  },
  textBlack: {
    color: 'black',
  },
  distance: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textWhite: {
    color: 'white',
    textAlign: 'center',
    fontSize: 7,
  },
  textgray: {
    color: '#696464',
    fontSize: 12,
  },
});
