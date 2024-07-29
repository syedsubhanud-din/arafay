import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MasjidDetailHeader from './MasjidDetailHeader';
import MasjidDetailContent from './MasjidDetailContent';
import {useNavigation} from '@react-navigation/native';
import PencilIcon from 'react-native-vector-icons/SimpleLineIcons';
import { useSelector } from 'react-redux';

const MasjidDetailCard = () => {
  const navigation = useNavigation();
  const {isLoggedIn} = useSelector((state) => state.UserInfo)
  return (
    <View style={styles.masjidDetailsContainer}>
      {<TouchableOpacity
        onPress={() => navigation.navigate('Edit_Masjid_Details')}
        style={styles.button}>
        <PencilIcon name="pencil" size={20} style={styles.icon} />
      </TouchableOpacity>}
      <View style={styles.masjidDetailsSection}>
        <MasjidDetailHeader />
        <MasjidDetailContent />
        <View style={styles.mapViewButtonContainer}>
          <TouchableOpacity
            style={styles.mapViewButton}
            onPress={() => navigation.navigate('guest')}>
            <Text style={styles.mapViewButtonText}>View Location on Map</Text>
          </TouchableOpacity>
          {isLoggedIn && <TouchableOpacity
            style={styles.mapViewButton}
            onPress={() => navigation.navigate('Claim')}>
            <Text style={styles.mapViewButtonText}>Claim Masjid</Text>
          </TouchableOpacity>}
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
    position: 'relative',
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'absolute',
    top: -110,
    right: 20,
  },
  icon: {
    color: '#007AC7',
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
