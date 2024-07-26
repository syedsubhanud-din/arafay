import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const UserProfileScreen = () => {
  return (
    <View style = {styles.container}>
      <Text style={{color: '#000'}}>UserProfileScreen</Text>
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
