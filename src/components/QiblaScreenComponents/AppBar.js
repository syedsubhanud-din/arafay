import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import BackIcon from 'react-native-vector-icons/Ionicons';

const AppBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.bar}>
      <TouchableOpacity
        onPress={() => navigation.navigate('guest')}
        style={styles.button}>
        <BackIcon name="arrow-back" size={18} style={styles.icon}></BackIcon>
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
    width: '100%',
    zIndex: 20
  },
  button: {
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
  },
});
