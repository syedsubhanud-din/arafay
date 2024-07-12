import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ArabicText = () => {
  return (
    <Text style={styles.ArabicText}>
      أَعُوْذُ بِاللّٰهِ مِنَ الشَّيْطٰانِ الرَّجِيْمِ
    </Text>
  );
};

export default ArabicText;

const styles = StyleSheet.create({
  ArabicText: {
    fontFamily: 'IslandMoments-Regular',
    fontSize: 12,
    color: '#7fa8e9',
    marginBottom: 10,
  },
});
