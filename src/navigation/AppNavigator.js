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
import MasjidDetailScreen from '../screens/masjidDetailScreen/MasjidDetailScreen';
import ClaimScreen from '../screens/claimScreen/ClaimScreen';
import LoginSignupScreen from '../screens/login_signupScreen/LoginSignupScreen';
import UserProfileScreen from '../screens/userProfileScreen/UserProfileScreen';
import EditMasjidScreen from '../screens/editMasjidScreen/EditMasjidScreen';
import UserLeaderBoardScreen from '../screens/userLeaderboardScreen/UserLeaderBoardScreen';

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
        <Stack.Screen name="Claim" component={ClaimScreen} />
        <Stack.Screen name="guest" component={GuestScreen} />
        <Stack.Screen name="masjid" component={MasjidScreen} />
        <Stack.Screen name="MasjidDetails" component={MasjidDetailScreen} />
        <Stack.Screen name="Login_SignUp" component={LoginSignupScreen} />
        <Stack.Screen name="Profile" component={UserProfileScreen} />
        <Stack.Screen name="Edit_Masjid_Details" component={EditMasjidScreen} />
        <Stack.Screen name="UserLeaderBoard" component={UserLeaderBoardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
