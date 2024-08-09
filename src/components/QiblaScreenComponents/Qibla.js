import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppBar from './AppBar';

const Qibla = () => {
  return (
    <View style={styles.main}>
      {/* <View style>
        <AppBar />
      </View> */}
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
