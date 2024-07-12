import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Buttons = () => {
  const navigation = useNavigation();
  const buttons = ['guest', 'masjid'];
  return (
    <View style={styles.container}>
      {buttons.map((item, index) => (
        <TouchableOpacity
          style={styles.button}
          key={index}
          onPress={() => navigation.navigate(`${item}`)}>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      ))}

      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(`guest`)}>
        <Text style={styles.text}>guest</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(`masjid`)}>
        <Text style={styles.text}>masjid</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    rowGap: 10,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    backgroundColor: '#6A89C3',
    color: 'white',
    borderBottomEndRadius: 15,
    borderTopStartRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  text: {
    fontFamily: 'InknutAntiqua-Medium',
  },
});
