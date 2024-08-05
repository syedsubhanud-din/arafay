import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import SunriseIcon from 'react-native-vector-icons/Feather';
import SunIcon from 'react-native-vector-icons/Feather';
import SunsetIcon from 'react-native-vector-icons/Feather';
import MoonIcon from 'react-native-vector-icons/Ionicons';
import PencilPlusIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const PrayerTimesData = [
  {
    id: 1,
    prayer: 'Fajr',
    ending: '04:53',
    jamat: '04:53',
    starting: '04:53',
    icon: <SunriseIcon name="sunrise" size={30} color={'black'} />,
    editable: false,
  },
  {
    id: 2,
    prayer: 'Zuhur',
    ending: '04:53',
    jamat: '04:53',
    starting: '04:53',
    icon: <SunIcon name="sun" size={30} color={'black'} />,
    editable: false,
  },
  {
    id: 3,
    prayer: 'Asr',
    ending: '04:53',
    jamat: '04:53',
    starting: '04:53',
    icon: <SunsetIcon name="sunset" size={30} color={'black'} />,
    editable: false,
  },
  {
    id: 4,
    prayer: 'Magrib',
    ending: '04:53',
    jamat: '04:53',
    starting: '04:53',
    icon: <SunsetIcon name="sunset" size={30} color={'black'} />,
    editable: false,
  },
  {
    id: 5,
    prayer: 'Isha',
    ending: '04:53',
    jamat: '04:53',
    starting: '04:53',
    icon: <MoonIcon name="moon-outline" size={30} color={'black'} />,
    editable: false,
  },
];

const EditMasjidTimings = () => {
  const {specificMasjidDetails} = useSelector(state => state?.masjidSlice);
  const [prayerTimesData, setPrayerTimesData] = useState(PrayerTimesData);
  const [data, setData] = useState(specificMasjidDetails.result);
  //   const [selection, setSelection] = useState({start: 0, end: 0});
  const inputRefs = useRef([]);

  const handleInputChange = (text, index, field) => {
    const newData = [...data];
    newData[index] = {
      ...newData[index],
      [field]: text,
    };
    setData(newData);
    console.log(data);
  };

  const toggleEditable = index => {
    const newData = [...prayerTimesData];
    console.log(newData[index].editable);
    newData[index].editable = !newData[index].editable;
    setPrayerTimesData(newData);
    // if (newData[index].editable) {
    //   inputRefs.current[index].focus();
    // }
    setTimeout(() => {
      if (inputRefs.current[index] && newData[index].editable) {
        inputRefs.current[index].focus();
      }
    }, 100);
  };

  //   const handleSelectionChange = (event, index) => {
  //     const {start, end} = event.nativeEvent.selection;
  //     setSelection({start, end});
  //   };

  //   const handleBlur = text => {
  //     const minLength = 5;
  //     if (text.length < minLength) {
  //       Alert.alert(`Text must be at least ${minLength} characters long.`);
  //     } else {
  //       Alert.alert('Text is valid.');
  //     }
  //   };

  const renderItem = ({item, index}) => (
    <View style={styles.item}>
      <View style={styles.namazTimeIcon}>
        <Text style={styles.icon}>{prayerTimesData[index]?.icon}</Text>
      </View>
      <View style={[styles.textBlack, styles.centeredAllignText]}>
        <View style={styles.namazTimeLabelContainer}>
          <Text style={styles.namazTimeLabel}>{item.prayer}</Text>
          <TouchableOpacity onPress={() => toggleEditable(index)}>
            <PencilPlusIcon name="pencil-plus" size={15} color={'#0479C7'} />
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.namazTimeInput}
          value={item.jamat}
          onChangeText={text => handleInputChange(text, index, 'jamat')}
          //   onBlur={text => handleBlur(text)}
          placeholder={`Enter ${item.prayer} Timings`}
          name={item.prayer}
          editable={prayerTimesData[index]?.editable}
          textAlign="center"
          ref={el => (inputRefs.current[index] = el)}
          //   selection={selection}
          //   onSelectionChange={event => handleSelectionChange(event, index)}
          maxLength={5}
        />
      </View>
    </View>
  );

  return (
    <View>
        
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        scrollEnabled={false}
        numColumns={5}
      />
    </View>
  );
};

export default EditMasjidTimings;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  namazTimeIcon: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 5,
  },
  icon: {
    fontSize: 40,
  },
  centeredAllignText: {
    textAlign: 'center',
    fontSize: 8,
  },
  namazTimeLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  namazTimeLabel: {
    flex: 1,
    fontSize: 10,
    textAlign: 'center',
    color: 'black',
  },
  namazTimeInput: {
    fontSize: 10,
    color: 'black',
    // backgroundColor: 'white',
    paddingVertical: 0,
    textAlign: 'center',
  },
  //   tableHeadingContainer: {
  //     flex: 1,
  //     flexDirection: 'row',
  //     gap: 10,
  //     marginBottom: 10,
  //   },
  //   header: {
  //     flexDirection: 'row',
  //   },
  //   headerCell: {
  //     paddingVertical: 15,
  //     backgroundColor: 'rgba(217, 217, 217, 0.62)',
  //   },
  //   row: {
  //     flexDirection: 'row',
  //   },
  //   cell: {
  //     flex: 1,
  //     borderWidth: 1,
  //     borderColor: '#000',
  //     color: 'black',
  //     padding: 5,
  //     textAlign: 'center',
  //     fontSize: 10,
  //   },
  textBlack: {
    color: '#000',
  },
});
