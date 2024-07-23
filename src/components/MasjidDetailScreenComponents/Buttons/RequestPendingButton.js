import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import PendingIcon from 'react-native-vector-icons/Feather';
const RequestPendingButton = () => {
  return (
    <TouchableOpacity style={styles.statusButton}>
      <Text style={styles.statusButtonText}>
        <Text>Request Pending</Text>
        <Text style={{paddingLeft: 10}}>
          <PendingIcon name="clock" />
        </Text>
      </Text>
    </TouchableOpacity>
  );
};

export default RequestPendingButton;

const styles = StyleSheet.create({
  statusButton: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: '#696464',
    textAlignVertical: 'center',
  },
  statusButtonText: {
    color: '#696464',
    fontSize: 8,
    fontWeight: 'bold',
  },
});
