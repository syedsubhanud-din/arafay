import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import AppBar from '../../components/EditMasjidDetailsScreenComponents/AppBar';
import EditMasjidDetailForm from '../../components/EditMasjidDetailsScreenComponents/EditMasjidDetailForm';

const EditMasjidScreen = () => {
  return (
    <View style={styles.main}>
      <ImageBackground
        source={require('../../assets/images/RegisterBG.jpeg')}
        style={styles.imageBg}>
        <View style={styles.overlay}></View>
        <AppBar />
        <ScrollView>
          <EditMasjidDetailForm />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default EditMasjidScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  imageBg: {
    flex: 1,
  },
  overlay: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.7,
  },
});
