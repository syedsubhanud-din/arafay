import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const GetRegisteredButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const navigation = useNavigation()
//   console.log('isPressed:', isPressed);
  return (
    <TouchableOpacity
      style={[styles.statusButton, isPressed && styles.statusButtonPressed]}
      onPressIn={() => {
        // console.log('Button Pressed In');
        setIsPressed(true);
      }}
      onPressOut={() => {
        // console.log('Button Pressed Out');
        setIsPressed(false);
        navigation.navigate('Register')
      }}>
      <Text
        style={[
          styles.statusButtonText,
          isPressed && styles.statusButtonTextPressed,
        ]}>
        Get Registered
      </Text>
    </TouchableOpacity>
  );
};

export default GetRegisteredButton;

const styles = StyleSheet.create({
  statusButton: {
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderWidth: 2,
    // borderRadius: 2,
    borderColor: '#7FBCE2',
  },
  statusButtonPressed: {
    backgroundColor: '#00609D', // Background color on press
  },
  statusButtonText: {
    color: '#7FBCE2',
    fontSize: 8,
    fontWeight: 'bold',
  },
  statusButtonTextPressed: {
    color: 'white', // Text color on press
  },
});
