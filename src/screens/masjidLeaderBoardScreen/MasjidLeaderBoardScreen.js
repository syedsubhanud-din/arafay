import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MasjidLeaderBoardScreen = () => {
  return (
    <ImageBackground source={require('../../assets/images/leaderBoardBg.png')}>
      <View style={styles.main}>
        <Text>MasjidLeaderBoardScreen</Text>
      </View>
    </ImageBackground>
  );
};

export default MasjidLeaderBoardScreen;

const styles = StyleSheet.create({
  main: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
