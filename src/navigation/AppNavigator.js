// src/navigation/AppNavigator.js
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import MasjidScreen from '../screens/homeScreen/masjidScreens/MasjidScreen';
import GuestScreen from '../screens/homeScreen/guestScreens/GuestScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SplashScreen">
        <Stack.Screen name="SpashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="guest" component={GuestScreen} />
        <Stack.Screen name="masjid" component={MasjidScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
