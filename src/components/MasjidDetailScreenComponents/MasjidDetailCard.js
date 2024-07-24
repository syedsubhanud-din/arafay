import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MasjidDetailHeader from './MasjidDetailHeader';
import MasjidDetailContent from './MasjidDetailContent';

const MasjidDetailCard = () => {
  return (
    <View style={styles.masjidDetailsContainer}>
      <View style={styles.masjidDetailsSection}>
        <MasjidDetailHeader />
        <MasjidDetailContent />
        <View style={styles.mapViewButtonContainer}>
          <TouchableOpacity style={styles.mapViewButton}>
            <Text style = {styles.mapViewButtonText}>View Location on Map</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mapViewButton}>
            <Text style = {styles.mapViewButtonText}>Claim Masjid</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MasjidDetailCard;

const styles = StyleSheet.create({
  masjidDetailsContainer: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  masjidDetailsSection: {
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: 'white',
    position: 'relative',
    top: -40,
    paddingTop: 25,
  },
  mapViewButtonContainer: {
    paddingHorizontal: 20,
  },
  mapViewButton: {
    elevation: 10,
    borderRadius: 5,
    backgroundColor: '#00609D',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 10,
    display: 'flex',
  },
  mapViewButtonText: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Poppins-Semibold',
    color: '#ffffff',
  },
});
