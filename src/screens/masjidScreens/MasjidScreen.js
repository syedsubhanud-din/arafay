import {ImageBackground, StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import AppBar from '../../components/MasjidScreenComponents/AppBar';
import Details from '../../components/MasjidScreenComponents/Details';

const MasjidScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/masjidDetailsBg.png')}
      style={styles.background}>
      <View style={styles.main}>
        <AppBar />
        <ScrollView>
          <View style={styles.details}>
            <Details />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
  },
  main: {
    flex: 1,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default MasjidScreen;
