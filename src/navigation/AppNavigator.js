// src/navigation/AppNavigator.js
import * as React from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import MasjidScreen from '../screens/masjidScreens/MasjidScreen';
import GuestScreen from '../screens/guestScreens/GuestScreen';
import RegisterScreen from '../screens/registerScreen/RegisterScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  // const hasShownSplashScreen = AsyncStorage.getItem('hasShownSplashScreen');
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SplashScreen">
        {/* {hasShownSplashScreen && <Stack.Screen name="SpashScreen" component={SplashScreen} />} */}
        <Stack.Screen name="SpashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="guest" component={GuestScreen} />
        <Stack.Screen name="masjid" component={MasjidScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
