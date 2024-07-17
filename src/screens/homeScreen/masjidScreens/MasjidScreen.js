import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppBar from '../../../components/MasjidScreenComponents/AppBar';
import Details from '../../../components/MasjidScreenComponents/Details';

const MasjidScreen = () => {
  return (
    <ImageBackground
      source={require('../../../assets/images/masjidDetailsBg.png')}
      style={styles.background}>
      <View style={styles.main}>
        <AppBar />
        <View style={styles.details}>
          <Details />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  textColor: {backgroundColor: 'red', color: '#000000'},
  background: {
    height: '100%',
    width: '100%',
  },
});

export default MasjidScreen;
