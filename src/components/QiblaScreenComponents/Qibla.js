import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppBar from './AppBar';
// import QiblaCompass from 'react-native-qibla-compass';

const Qibla = () => {
  return (
    <View style={styles.main}>
      {/* <QiblaCompass
        color={'#123'} // optional
        backgroundColor={'#fff'} // optional
        textStyles={{textAlign: 'center', fontSize: 24}} // optional
        kaabaImage={require('../../assets/images/kaaba.png')} // optional
        compassImage={require('../../assets/images/compass.png')} // optional
      /> */}
      <Text style={styles.textBlack}>Qibla</Text>
    </View>
  );
};

export default Qibla;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  textBlack: {
    fontSize: 50,
  },
});
