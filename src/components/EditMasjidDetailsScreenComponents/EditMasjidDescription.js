import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SectionHeading from './SectionHeading';
import { useSelector } from 'react-redux';

const EditMasjidDescription = () => {
  const [description, setDescription] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess',
  );
  const selector = useSelector((state) => state)

  const handleEdit = () => {
    console.log("Handle Edit Pressed")
  };
  return (
    <View>
      <View style = {styles.headingSection}>
        <SectionHeading
          Heading={'Description'}
          SubHeading={'tap to edit the description below'}
        />
        <TouchableOpacity onPress={() => handleEdit()}>
          <Text style={styles.editText}>Save</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textFieldContainer}>
        <TextInput
          placeholder="Enter Masjid Description"
          placeholderTextColor={'#B8B1B1'}
          style={styles.textInput}
          required
          multiline
          numberOfLines={10}
          name="description"
          value={description}
          onChangeText={text => setDescription(text)}
        />
      </View>
    </View>
  );
};

export default EditMasjidDescription;

const styles = StyleSheet.create({
  headingSection: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  editText: {
    color: "#000"
  },
  textFieldContainer: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 10,
  },
  textInput: {
    color: '#594C3B',
    fontSize: 8,
    paddingHorizontal: 10,
    flex: 1,
    textAlignVertical: 'top',
  },
});
