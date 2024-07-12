import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MasjidScreen = () => {
  return (
    <View>
      <Text style={styles.textColor}>Masjid Screen</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    textColor: {backgroundColor: 'red', color: '#000000'},
});

export default MasjidScreen;