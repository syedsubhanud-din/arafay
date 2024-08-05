import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import SectionHeading from './SectionHeading';

const EditMasjidDescription = () => {
  const [description, setDescription] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess',
  );
  return (
    <View>
      <SectionHeading
        Heading={'Description'}
        SubHeading={'tap to edit the description below'}
      />
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
