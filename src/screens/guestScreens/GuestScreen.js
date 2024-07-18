import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const GuestScreen = () => {
  return (
    <View>
      <Text style={styles.textColor}>Guest Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textColor: {backgroundColor: 'red', color: '#000000'},
});

export default GuestScreen;
