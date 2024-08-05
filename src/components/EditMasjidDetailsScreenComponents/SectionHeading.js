import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SectionHeading = ({Heading, SubHeading}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{Heading}</Text>
      <Text style={styles.subHeading}>{SubHeading}</Text>
    </View>
  );
};

export default SectionHeading;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  heading: {
    color: '#000',
    fontSize: 12,
    fontWeight: '600',
  },
  subHeading: {
    color: '#5F91D1',
    fontSize: 10,
  },
});
