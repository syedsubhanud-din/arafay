import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SectionHeading from './SectionHeading';
import PlusIcon from 'react-native-vector-icons/AntDesign';

const Othertimings = [
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

const EditAndAddOtherTimingsTable = () => {
  const [otherTimings, setOtherTimings] = useState(Othertimings);

  // Step 1: Find the highest id
  const highestId = otherTimings.reduce(
    (max, item) => (item.id > max ? item.id : max),
    0,
  );
  // Add a new column to the table when the '+' icon is pressed
  const AddColumn = () => {
    const newColumn = {
      id: highestId + 1,
      name: '',
      starting: '',
      jamat: '',
      ending: '',
    };
    setOtherTimings([...otherTimings, newColumn]);
  };

  // const handleInputChange = (text , index , name) => {
  //   // const { name, value } = event.nativeEvent.text;
  //   // const index = event.nativeEvent.target.name;
  //   // setOtherTimings(
  //   //   otherTimings.map(item =>
  //   //     item.id === parseInt(index)? {...item, [name]: value } : item,
  //   //   ),
  //   // );
  //   // console.log(otherTimings);

  // };

  const handleInputChange = (text, index, name) => {
    const updatedData = [...otherTimings];
    updatedData[index][name] = text;
    setOtherTimings(updatedData);
    console.log(otherTimings);
  };

  const renderItems = ({item, index}) => (
    <View style={styles.tableContainer}>
      <View style={styles.tableCell}>
        <TextInput
          style={styles.otherNamazTimeInput}
          value={item.name}
          onChangeText={text => handleInputChange(text, index, 'name')}
          //   onBlur={text => handleBlur(text)}
          placeholder={`Enter Name`}
          placeholderTextColor={'grey'}
          // name={item.prayer}
          textAlign="center"
          maxLength={15}
        />
      </View>

      <View style={styles.tableCell}>
        <TextInput
          style={styles.otherNamazTimeInput}
          value={item.starting}
          onChangeText={text => handleInputChange(text, index, 'starting')}
          //   onBlur={text => handleBlur(text)}
          placeholder={`Enter Starting Time`}
          placeholderTextColor={'grey'}
          // name={item.prayer}
          textAlign="center"
          maxLength={5}
        />
      </View>

      <View style={styles.tableCell}>
        <TextInput
          style={styles.otherNamazTimeInput}
          value={item.jamat}
          onChangeText={text => handleInputChange(text, index, 'jamat')}
          //   onBlur={text => handleBlur(text)}
          placeholder={`Enter Starting Time`}
          placeholderTextColor={'grey'}
          // name={item.prayer}
          textAlign="center"
          maxLength={5}
        />
      </View>
      <View style={[styles.tableCell, styles.tableEndCell]}>
        <TextInput
          style={styles.otherNamazTimeInput}
          value={item.ending}
          onChangeText={text => handleInputChange(text, index, 'ending')}
          //   onBlur={text => handleBlur(text)}
          placeholder={`Enter Starting Time`}
          placeholderTextColor={'grey'}
          // name={item.prayer}
          textAlign="center"
          maxLength={5}
        />
      </View>
    </View>
  );

  return (
    <View>
      <SectionHeading
        Heading={'Other Timings'}
        SubHeading={'tap to edit add namaz timings below'}
      />
      <View style={styles.tableBox}>
        <View style={styles.tableHeader}>
          <TouchableOpacity style={styles.plusIcon} onPress={() => AddColumn()}>
            <PlusIcon name="plus" color="#fff" fontSize={20} />
          </TouchableOpacity>
          <Text style={styles.tableHeaderCell}>Title</Text>
          <Text style={styles.tableHeaderCell}>Start Time</Text>
          <Text style={styles.tableHeaderCell}>Jamat Time</Text>
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
    // padding: 10,
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    position: 'relative',
    // backgroundColor: '#f1f1f1',
  },
  plusIcon: {
    backgroundColor: '#00609D',
    color: 'white',
    width: 30,
    height: 30,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -12,
    top: 18,
    zIndex: 20,
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
    // paddingVertical: 10,
  },
  otherNamazTimeInput: {
    // backgroundColor: 'red',
    fontSize: 8,
    paddingVertical: 5,
    color: '#000000',
  },
  textBlack: {
    color: '#000000',
    fontSize: 12,
  },
});
