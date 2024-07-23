import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import CheckIcon from 'react-native-vector-icons/Ionicons';
const ApprovedButton = () => {
  return (
    <TouchableOpacity style={styles.statusButton}>
      <Text style={styles.statusButtonText}>
        <Text>Approved</Text>
        <Text style={{paddingLeft: 10}}>
          <CheckIcon name="checkmark" />
        </Text>
      </Text>
    </TouchableOpacity>
  );
};

export default ApprovedButton;

const styles = StyleSheet.create({
  statusButton: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    textAlignVertical: 'center',
    backgroundColor: '#10C700'
  },
  statusButtonText: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold',
  },
});
