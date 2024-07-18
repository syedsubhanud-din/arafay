import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const MainHeading = () => {
  return <Text style={styles.mainHeading}>MASJID</Text>;
};

export default MainHeading;

const styles = StyleSheet.create({
  mainHeading: {
    fontFamily: 'InknutAntiqua-Regular',
    fontSize: 35,
    color: '#7fa8e9',
  },
});
