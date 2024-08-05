import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SectionHeading from './SectionHeading';

const othertimings = [
  {
    id: 1,
    name: 'abc',
    starting: '21:15',
    jamat: '21:30',
    ending: '21:45',
  },
  {
    id: 2,
    name: 'bca',
    starting: '21:15',
    jamat: '21:30',
    ending: '21:45',
  },
  {
    id: 3,
    name: 'xyz',
    starting: '21:15',
    jamat: '21:30',
    ending: '21:45',
  },
];

const renderItems = ({item, index}) => (
  <View style={styles.tableContainer}>
    <Text style={styles.tableCell}>{item.name}</Text>
    <Text style={styles.tableCell}>{item.starting}</Text>
    <Text style={styles.tableCell}>{item.jamat}</Text>
    <Text style={[styles.tableCell , styles.tableEndCell]}>{item.ending}</Text>
  </View>
);

const EditAndAddOtherTimingsTable = () => {
  const [otherTimings, setOtherTimings] = useState(othertimings);
  return (
    <View>
      <SectionHeading Heading={"Other Timings"} SubHeading={"tap to edit add namaz timings below"}/>
      <View style={styles.tableBox}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderCell}>Title</Text>
          <Text style={styles.tableHeaderCell}>Jamat Time</Text>
          <Text style={styles.tableHeaderCell}>Start Time</Text>
          <Text style={[styles.tableHeaderCell, styles.tableEndCell]}>
            End Time
          </Text>
        </View>
        <FlatList
          scrollEnabled={false}
          data={otherTimings}
          renderItem={renderItems}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default EditAndAddOtherTimingsTable;

const styles = StyleSheet.create({
  tableBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    // backgroundColor: '#f1f1f1',
  },
  tableHeaderCell: {
    flex: 1,
    paddingVertical: 10,
    // backgroundColor: '#ffffff',
    color: '#000000',
    fontSize: 10,
    textAlign: 'center',
    borderRightWidth: 1,
  },
  tableEndCell: {
    borderRightWidth: 0,
  },
  tableContainer: {
    flexDirection: 'row',
  },
  tableCell: {
    flex: 1,
    color: '#000000',
    fontSize: 10,
    textAlign: 'center',
    borderTopWidth: 1,
    borderRightWidth: 1,
    paddingVertical: 10,
  },
  textBlack: {
    color: '#000000',
    fontSize: 12,
  },
});
