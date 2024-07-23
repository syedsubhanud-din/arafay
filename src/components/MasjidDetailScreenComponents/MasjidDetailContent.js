import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import GetRegisteredButton from './Buttons/GetRegisteredButton';
import ApprovedButton from './Buttons/ApprovedButton';
import RequestPendingButton from './Buttons/RequestPendingButton';
import EditDetailsButton from './Buttons/EditDetailsButton';
import PrayerTimes from './PrayerTimes';

const MasjidDetailContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.status}>
        <GetRegisteredButton />
        {/* <RequestPendingButton /> */}
        {/* <ApprovedButton /> */}
        {/* <EditDetailsButton /> */}
      </View>
      <View style={styles.content}>
        <Text style={styles.textgray}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit ess
        </Text>
      </View>
      <PrayerTimes />
    </View>
  );
};

export default MasjidDetailContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F6F6F6',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  content: {
    marginTop: 10,
  },
  textBlack: {
    color: 'black',
  },
  textgray: {
    color: '#696464',
    fontSize: 10,
    lineHeight: 15,
    marginTop: 5,
    marginBottom: 10,
    textAlign: 'center',
    paddingHorizontal: 5,
  },
});
