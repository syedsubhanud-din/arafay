import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconBell from 'react-native-vector-icons/Fontisto';
const AppBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.bar}>
      <TouchableOpacity
        onPress={() => navigation.navigate('guest')}
        style={styles.button}>
        <Icon name="arrow-back" size={18} style={styles.icon}></Icon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <IconBell name="bell-alt" size={18} style={styles.icon}></IconBell>
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
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
    color: '#007AC7',
  },
  //   image: {
  //     width: 20,
  //     height: 22,
  //   },
});
