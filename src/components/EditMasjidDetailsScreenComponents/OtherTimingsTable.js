import React, {useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import PlusIcon from 'react-native-vector-icons/AntDesign';

const OtherTimingsTable = () => {
  const [data, setData] = useState([
    {title: 'adgashdg', jamatTime: 'jashduhaduad', startTime: 'askhdjashda', endTime: 'asjdhadah'},
  ]);

  const addRow = () => {
    setData([...data, {title: '', jamatTime: '', startTime: '', endTime: ''}]);
  };

  const updateRow = (index, field, value) => {
    const updatedData = data.map((item, i) =>
      i === index ? {...item, [field]: value} : item,
    );
    setData(updatedData);
  };

  const renderItem = ({item, index}) => (
    <View style={styles.row}>
      <TextInput
        style={styles.cell}
        placeholder="Title"
        value={item.title}
        onChangeText={text => updateRow(index, 'title', text)}
      />
      <TextInput
        style={styles.cell}
        placeholder="Jamat Time"
        value={item.jamatTime}
        onChangeText={text => updateRow(index, 'jamatTime', text)}
      />
      <TextInput
        style={styles.cell}
        placeholder="Start Time"
        value={item.startTime}
        onChangeText={text => updateRow(index, 'startTime', text)}
      />
      <TextInput
        style={styles.cell}
        placeholder="End Time"
        value={item.endTime}
        onChangeText={text => updateRow(index, 'endTime', text)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Title</Text>
        <Text style={styles.headerCell}>Jamat Time</Text>
        <Text style={styles.headerCell}>Start Time</Text>
        <Text style={styles.headerCell}>End Time</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
      />
      <TouchableOpacity style={styles.addButton} onPress={addRow}>
        <PlusIcon name="plus" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  headerCell: {
    flex: 1,
    textAlign: 'center',
    color: '#000',
    fontSize: 10
  },
  row: {
    flexDirection: 'row',
    // marginBottom: 10,
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    textAlign: 'center',
    color: '#000',
    fontSize: 10,
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OtherTimingsTable;
