import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NearBySection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nextPrayerBox}>
        <Text style={[styles.textNextPrayer , styles.textWhite]}>Next Prayer</Text>
        <Text style={[styles.textTime , styles.textWhite]}>12:52 pm</Text>
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
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginBottom: 20,
  },
  nextPrayerBox: {
    backgroundColor: 'rgba( 118 ,158 ,209 , 0.85)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    elevation: 10
  },
  textNextPrayer: {
    fontFamily: 'InknutAntiqua-SemiBold',
    fontSize: 15,
  },
  textTime: {
    fontFamily: 'InknutAntiqua-Medium',
    fontSize: 30
  },
  textWhite: {
    color: '#FFFFFF',
  },
});
