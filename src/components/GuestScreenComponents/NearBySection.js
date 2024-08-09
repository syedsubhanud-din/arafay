import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import NearByMasjidCard from './NearByMasjidCard';
import {useSelector} from 'react-redux';
import Popup from './Popup';
import { useNavigation } from '@react-navigation/native';

const NearBySection = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const {MasjidsDetails} = useSelector(state => state.masjidSlice);
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.nextPrayerBox}>
          <View>
            <Text style={[styles.textNextPrayer, styles.textWhite]}>
              Next Prayer
            </Text>
            <Text style={[styles.textTime, styles.textWhite]}>12:52 pm</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('QiblaScreen')}>
              <Image source={require('../../assets/images/viewQibla.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.masjidNearByBox}>
          <Text style={[styles.masjidNearByText, styles.textTheme]}>
            Masjid's Near by
          </Text>
          <FlatList
            data={MasjidsDetails.slice(0, 5)}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <NearByMasjidCard
                item={item}
                showPopUp={showPopUp}
                setShowPopUp={setShowPopUp}
              />
            )}
          />
        </View>
      </View>
      {showPopUp && <Popup showPopUp={showPopUp} setShowPopUp={setShowPopUp} />}
    </>
  );
};

export default NearBySection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 400,
  },
  nextPrayerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb( 118 ,158 ,209)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  textNextPrayer: {
    fontFamily: 'InknutAntiqua-SemiBold',
    fontSize: 15,
  },
  textTime: {
    fontFamily: 'InknutAntiqua-Medium',
    fontSize: 30,
    lineHeight: 50,
  },
  masjidNearByBox: {
    flex: 1,
    flexDirection: 'column',
  },
  masjidNearByText: {
    fontFamily: 'InknutAntiqua-SemiBold',
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 10,
  },
  textWhite: {
    color: '#FFFFFF',
  },
  textBlack: {
    color: '#000000',
  },
  textTheme: {
    color: 'rgba( 118 ,158 ,209 , 0.85)',
  },
});
