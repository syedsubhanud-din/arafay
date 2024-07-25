import React, { useState } from 'react';
import { View, FlatList, TextInput, StyleSheet, Text } from 'react-native';

const initialData = [
  { id: '1', title: 'Fajr', jamat: '07:09', startTime: '07:09', endTime: '07:09' },
  { id: '2', title: 'Zuhr', jamat: '07:09', startTime: '07:09', endTime: '07:09' },
  { id: '3', title: 'Asar', jamat: '07:09', startTime: '07:09', endTime: '07:09' },
  { id: '4', title: 'Maghrib', jamat: '07:09', startTime: '07:09', endTime: '07:09' },
  { id: '5', title: 'Isha', jamat: '07:09', startTime: '07:09', endTime: '07:09' },
];

const EditableTable = () => {
  const [data, setData] = useState(initialData);

  const handleInputChange = (text, index, key) => {
    const newData = [...data];
    newData[index][key] = text;
    setData(newData);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.title}</Text>
      <TextInput
        style={styles.cell}
        value={item.jamat}
        onChangeText={(text) => handleInputChange(text, index, 'jamat')}
      />
      <TextInput
        style={styles.cell}
        value={item.startTime}
        onChangeText={(text) => handleInputChange(text, index, 'startTime')}
      />
      <TextInput
        style={styles.cell}
        value={item.endTime}
        onChangeText={(text) => handleInputChange(text, index, 'endTime')}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.cell}>Title</Text>
        <Text style={styles.cell}>Jamat</Text>
        <Text style={styles.cell}>Start Time</Text>
        <Text style={styles.cell}>End Time</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    textAlign: 'center',
  },
});

export default EditableTable;
