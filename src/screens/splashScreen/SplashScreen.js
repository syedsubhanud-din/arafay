import {StyleSheet, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
    return () => clearTimeout();
  }, [navigation]);
  return (
    // <View style={styles.splash}>
    //   <Image
    //     source={require('../../assets/splash.png')}
    //     style={{width: '100%', height: '100%'}}
    //   />
    // </View>
    <ImageBackground
      source={require('../../assets/images/splash.png')}
      style={styles.background}
    />
  );
};

const styles = StyleSheet.create({
  // splash: {
  //   height: '100%',
  //   width: '100%',
  //   backgroundColor: 'red',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  background: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
