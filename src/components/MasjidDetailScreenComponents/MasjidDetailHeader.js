import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import LocationIcon from 'react-native-vector-icons/Ionicons';
// import Heart from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const MasjidDetailHeader = () => {
  const [favorite, setFavorite] = useState(false);
  const {specificMasjidDetails} = useSelector(state => state.masjidSlice);
  const navigation = useNavigation();
  return (
    <View style={styles.headerSection}>
      <View style={styles.sectionHeadingContainer}>
        <Text style={[styles.sectionHeading, styles.textBlack]}>
          {specificMasjidDetails.name}
        </Text>
        <Text style={[styles.location, styles.textgray]}>
          <Text>
            <LocationIcon name="location-outline" />
          </Text>
          <Text>Karachi, Pakistan</Text>
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('MasjidLeaderBoard')}>
        <View style={styles.bullet}>
          <View>
            {/* <Text style={[styles.textWhite, styles.distance]}>3.5 km</Text> */}
            <Text style={[styles.textWhite]}>Masjid {'\n'}Leader Board</Text>
          </View>
          <View style={{paddingHorizontal: 5}}>
            <Image source={require('../../assets/images/medals.png')} />
          </View>
          {/* <View style={{paddingLeft: 10}}>
            {favorite ? (
              <TouchableOpacity onPress={() => setFavorite(!favorite)}>
                <Heart name="heart" size={25} color="#FFF" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setFavorite(!favorite)}>
                <Heart name="heart-outline" size={25} color="#FFF" />
              </TouchableOpacity>
            )}
          </View> */}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MasjidDetailHeader;

const styles = StyleSheet.create({
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionHeadingContainer: {
    paddingLeft: 20,
  },
  sectionHeading: {
    fontSize: 20,
    width: 200,
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
  },
  location: {
    // textAlignVertical: 'center',
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
    fontWeight: '600',
    gap: 2,
    marginTop: 2,
  },
  bullet: {
    backgroundColor: '#00609D',
    padding: 10,
    paddingHorizontal: 30,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    right: 0,
  },
  textBlack: {
    color: 'black',
  },
  distance: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textWhite: {
    color: 'white',
    fontSize: 20,
    // textAlign: 'center',
    fontSize: 8,
  },
  textgray: {
    color: '#696464',
    fontSize: 12,
  },
});
