import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const AppBar = ({state, setState}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('guest')}
          style={styles.backIcon}>
          <BackIcon name="keyboard-backspace" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.headingContainer}>
          <Text
            style={
              state === 'login'
                ? [styles.tabButtonText, styles.tabButtonActive]
                : styles.tabButtonText
            }>
            User Profile
          </Text>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  main: {},
  container: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 22,
    position: 'relative',
    marginTop: 20
  },
  backIcon: {
    position: 'absolute',
    left: 20,
    zIndex: 100
  },
  headingContainer: {
    flex: 1,
    // borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tabButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  tabButton: {
    padding: 10,
  },
  tabButtonActive: {
    borderBottomWidth: 4,
    borderBottomColor: '#005E9D',
  },
  tabButtonText: {
    color: 'black',
    fontSize: 20,
  },
});
