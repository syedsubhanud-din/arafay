import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const AppBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.bar}>
      <TouchableOpacity
        onPress={() => navigation.navigate('guest')}
        style={styles.button}>
        <Icon name="arrow-back" size={18} style={styles.icon}></Icon>
      </TouchableOpacity>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  button: {
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    color: '#000',
  },
  image: {
    width: 20,
    height: 22,
  },
});
