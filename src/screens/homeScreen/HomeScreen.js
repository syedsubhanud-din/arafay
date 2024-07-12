// src/screens/HomeScreen.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Buttons} from '../../components/HomeScreenComponents/Buttons';
import MainHeading from '../../components/HomeScreenComponents/MainHeading';
import ArabicText from '../../components/HomeScreenComponents/ArabicText';
import HomeDetails from '../../components/HomeScreenComponents/HomeDetails';

function HomeScreen({navigation}) {
  return (
    <View style={styles.MainHomeContainer}>
      <View style={{alignItems: 'center'}}>
        <MainHeading />
        <ArabicText />
        <HomeDetails />
        <Buttons />
        {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainHomeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export default HomeScreen;
