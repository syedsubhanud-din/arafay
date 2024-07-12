import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const MainHeading = () => {
  return <Text style={styles.mainHeading}>MASJID</Text>;
};

export default MainHeading;

const styles = StyleSheet.create({
  mainHeading: {
    fontFamily: 'InknutAntiqua-Regular',
    fontSize: 40,
    color: '#7fa8e9',
    marginBottom: 10,
  },
});
