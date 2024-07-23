import {
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import AppBar from '../../components/MasjidDetailScreenComponents/Appbar';

import MasjidDetailCard from '../../components/MasjidDetailScreenComponents/MasjidDetailCard';
const MasjidDetailScreen = () => {
  return (
    <ScrollView>
      <View style={styles.main}>
        <View style={styles.masjidBg}>
          <AppBar />
          <Image
            source={require('../../assets/images/RegisterBG.jpeg')}
            style={styles.masjidBg}
            resizeMode="cover"
          />
        </View>
        {/* <ImageBackground
        source={require('../../assets/images/RegisterBG.jpeg')}
        style={styles.masjidBg}
        resizeMode="cover">
        <View style={styles.masjidBg}>
          <AppBar />
        </View>
      </ImageBackground> */}
        <MasjidDetailCard />
      </View>
    </ScrollView>
  );
};

export default MasjidDetailScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  // container:{
  //   flexDirection: 'column',
  //   justifyContent: "space-between",
  //   alignItems: ''
  // },
  masjidBg: {
    // flex: 2,
    height: 600,
    width: '100%',
    resizeMode: 'center',
  },
});