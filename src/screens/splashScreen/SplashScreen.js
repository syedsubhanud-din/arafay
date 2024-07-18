import {StyleSheet, ImageBackground, AppState} from 'react-native';
import React, {useEffect, useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
const SplashScreen = ({navigation}) => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const checkSplashScreen = async () => {
  //     try {
  //       const hasShownSplashScreen = await AsyncStorage.getItem(
  //         'hasShownSplashScreen',
  //       );
  //       if (hasShownSplashScreen) {
  //         navigation.navigate('Home');
  //       } else {
  //         AsyncStorage.setItem('hasShownSplashScreen', 'true');
  //         setTimeout(() => {
  //           navigation.navigate('Home');
  //         }, 3000);
  //       }
  //     } catch (error) {
  //       console.error('Error checking splash screen status:', error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   checkSplashScreen();

  //   const handleAppStateChange = async nextAppState => {
  //     if (nextAppState === 'background' || nextAppState === 'inactive') {
  //       await AsyncStorage.removeItem('hasShownSplashScreen');
  //     }
  //   };

  //   const subscription = AppState.addEventListener(
  //     'change',
  //     handleAppStateChange,
  //   );

  //   return () => {
  //     subscription.remove();
  //   };
  // }, [navigation]);

  // if(isLoading){
  //   return null
  // }


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
    return () => clearTimeout(timeoutId);
  },[navigation])

  return (
    <ImageBackground
      source={require('../../assets/images/splash.png')}
      style={styles.background}
    />
  );
};

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
