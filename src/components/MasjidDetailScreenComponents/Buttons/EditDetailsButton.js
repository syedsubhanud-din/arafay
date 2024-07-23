import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import EditIcon from 'react-native-vector-icons/Feather';
const EditDetailsButton = () => {
  return (
    <TouchableOpacity style={styles.statusButton}>
      <Text style={styles.statusButtonText}>
        <Text>Edit Details</Text>
        <Text style={{paddingLeft: 10}}>
          <EditIcon name="edit" />
        </Text>
      </Text>
    </TouchableOpacity>
  );
};

export default EditDetailsButton;

const styles = StyleSheet.create({
  statusButton: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    textAlignVertical: 'center',
    // backgroundColor: '#10C700',
  },
  statusButtonText: {
    color: '#00609D',
    textDecorationLine: 'underline',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
