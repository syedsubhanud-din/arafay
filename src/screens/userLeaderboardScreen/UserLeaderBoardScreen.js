import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const UserLeaderBoardScreen = () => {
  return (
    <ImageBackground source={require('../../assets/images/leaderBoardBg.png')}>
      <View style={styles.main}>
        <Text>UserLeaderBoardScreen</Text>
      </View>
    </ImageBackground>
  );
};

export default UserLeaderBoardScreen;

const styles = StyleSheet.create({
  main: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
