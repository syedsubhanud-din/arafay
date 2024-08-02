import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

const NamazTimingsTable = ({specificMasjidDetails}) => {
  const renderItem = ({item}) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.prayer}</Text>
      <Text style={styles.cell}>{item.jamat}</Text>
      <Text style={styles.cell}>{item.starting}</Text>
      <Text style={[styles.cell, styles.endCell]}>{item.ending}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>prayer</Text>
        <Text style={styles.headerCell}>Jamat</Text>
        <Text style={styles.headerCell}>Start Time</Text>
        <Text style={[styles.headerCell, styles.endCell]}>End Time</Text>
      </View>
      <FlatList
        data={specificMasjidDetails.result}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    // borderColor: '#c0c0c0',
  },
  headerCell: {
    flex: 1,
    paddingVertical: 15,
    // fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    borderLeftWidth: 1,
    fontSize: 10,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#c0c0c0',
  },
  cell: {
    flex: 1,
    padding: 8,
    textAlign: 'center',
    color: '#000',
    // borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#c0c0c0',
    fontSize: 10,
  },
  endCell: {
    borderRightWidth: 1,
    // borderColor: '#c0c0c0'
  },
});

export default NamazTimingsTable;
