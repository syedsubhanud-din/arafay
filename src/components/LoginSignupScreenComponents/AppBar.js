import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BackIcon from 'react-native-vector-icons/MaterialIcons';

const AppBar = ({drawer, setDrawer, state, setState}) => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setDrawer(!drawer)}>
          <BackIcon name="keyboard-backspace" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.tabButtonsContainer}>
          <TouchableOpacity
            onPress={() => setState('login')}
            style={styles.tabButton}>
            <Text
              style={
                state === 'login'
                  ? [styles.tabButtonText, styles.tabButtonActive]
                  : styles.tabButtonText
              }>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setState('signup')}
            style={styles.tabButton}>
            <Text
              style={
                state === 'signup'
                  ? [styles.tabButtonText, styles.tabButtonActive]
                  : styles.tabButtonText
              }>
              Signup
            </Text>
          </TouchableOpacity>
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
