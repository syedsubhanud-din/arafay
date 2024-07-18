import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const AppBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.bar}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Image
          source={require('../../assets/images/back_icon.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
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
  button: {
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 22,
  },
});
