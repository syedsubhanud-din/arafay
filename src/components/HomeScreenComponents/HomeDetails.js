import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.homeDetails}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        veli
      </Text>
    </View>
  );
};

export default HomeDetails;

const styles = StyleSheet.create({
  container: {
    width: 240,
    margin: 'auto',
  },
  homeDetails: {
    fontFamily: 'IslandMoments-Regular',
    fontSize: 23,
    textAlign: 'center',
    color: '#7fa8e9',
    marginBottom: 25,
  },
});
