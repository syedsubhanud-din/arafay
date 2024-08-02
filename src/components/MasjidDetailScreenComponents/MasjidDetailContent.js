import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
// import GetRegisteredButton from './Buttons/GetRegisteredButton';
// import ApprovedButton from './Buttons/ApprovedButton';
// import RequestPendingButton from './Buttons/RequestPendingButton';
// import EditDetailsButton from './Buttons/EditDetailsButton';
import PrayerTimes from './PrayerTimes';
import ImagesSlider from './ImagesSlider';
import NamazTimingsTable from './NamazTimingsTable';
import {useSelector} from 'react-redux';

const MasjidDetailContent = () => {
  const [viewTable, setViewTable] = useState(false);
  const {specificMasjidDetails} = useSelector(state => state.masjidSlice);
  return (
    <View style={styles.container}>
      {/* <View style={styles.status}>
        <GetRegisteredButton />
        <RequestPendingButton />
        <ApprovedButton />
        <EditDetailsButton />
      </View> */}
      <View style={styles.content}>
        <Text style={styles.textgray}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit ess
        </Text>
      </View>
      <PrayerTimes specificMasjidDetails={specificMasjidDetails} />
      <TouchableOpacity
        style={styles.viewMoreBtn}
        onPress={() => setViewTable(!viewTable)}>
        <Text style={styles.viewMore}>
          {viewTable ? 'View Less' : 'View More'}
        </Text>
      </TouchableOpacity>
      {viewTable && (
        <NamazTimingsTable specificMasjidDetails={specificMasjidDetails} />
      )}
      <View>
        <Text style={[styles.textgray, styles.pictureText]}>Pictures</Text>
        <ImagesSlider />
      </View>
    </View>
  );
};

export default MasjidDetailContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F6F6F6',
    paddingHorizontal: 20,
    // paddingVertical: 15,
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  content: {
    marginTop: 10,
  },
  viewMoreBtn: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewMore: {
    color: '#00609D',
    borderBottomColor: '#00609D',
    borderBottomWidth: 1,
  },
  pictureText: {
    textAlign: 'start',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 18,
    marginBottom: 15,
  },
  textBlack: {
    color: 'black',
  },
  textgray: {
    fontFamily: 'Poppins-SemiBold',
    color: '#8B8686',
    fontSize: 11,
    lineHeight: 15,
    marginTop: 5,
    textAlign: 'center',
    paddingHorizontal: 2,
  },
});
