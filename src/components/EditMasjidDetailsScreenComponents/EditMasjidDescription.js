import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SectionHeading from './SectionHeading';
import {useDispatch, useSelector} from 'react-redux';
import {editSpecificMasjidDescription} from '../../store/Slices/EditMasjidDataSlice';

const EditMasjidDescription = () => {
  const {description} = useSelector(state => state.editMasjidSlice);
  const {id} = useSelector(state => state.masjidSlice.specificMasjidDetails);
  const {token} = useSelector(state => state.UserInfo);
  const [Description, setDescription] = useState(description);
  const dispatch = useDispatch();
  console.log(id, Description);

  const handleEdit = () => {
    dispatch(editSpecificMasjidDescription({token, Description, id}));
  };
  return (
    <View>
      <View style={styles.headingSection}>
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
          value={Description}
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editText: {
    color: '#000',
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
