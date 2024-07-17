import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const AppBar = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.bar}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('../../assets/images/back_icon.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../../assets/images/notification.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  image: {
    width: 20,
    height: 22,
  },
});
