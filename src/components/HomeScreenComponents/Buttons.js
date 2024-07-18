import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 30
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 2,
    backgroundColor: '#6A89C3',
    color: 'white',
    borderBottomEndRadius: 15,
    borderTopStartRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    elevation: 20,
  },
  text: {
    fontFamily: 'InknutAntiqua-Medium',
    fontSize: 12,
  },
});
