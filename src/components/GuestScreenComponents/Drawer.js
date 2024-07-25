import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Drawer = ({drawer , setDrawer}) => {
  return (
    <View style={styles.main}>
      <Text>Drawer</Text>
      <TouchableOpacity onPress={() => setDrawer(!drawer)}>
        <Text style={{color: 'white'}} onPress={() => setDrawer(false)}>
          Close
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1000,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});
