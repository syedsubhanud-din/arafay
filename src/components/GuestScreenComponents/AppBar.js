import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import SearchInput from './SearchInput';
import IconDrawer from 'react-native-vector-icons/EvilIcons';
import IconSearch from 'react-native-vector-icons/Ionicons';
import IconBell from 'react-native-vector-icons/MaterialCommunityIcons';
import IconBellRing from 'react-native-vector-icons/MaterialCommunityIcons';
import Drawer from './Drawer';
const AppBar = () => {
  const [alert, setAlert] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const navigation = useNavigation();
  return (
    <>
      {drawer && <Drawer drawer={drawer} setDrawer={setDrawer} />}
      {drawer && <TouchableOpacity style={styles.backDrop} onPress={() => setDrawer(!drawer)}></TouchableOpacity>}

      <View style={styles.bar}>
        <View>
          <TouchableOpacity
            onPress={() => setDrawer(!drawer)}
            style={styles.button}>
            <Text>
              <IconDrawer
                name="navicon"
                size={16}
                style={styles.icon}></IconDrawer>
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <IconSearch name="search" size={15} style={styles.searchIcon} />
            {/* <TextInput style={styles.searchInput} selectionColor="#7CA4D7" /> */}
            <SearchInput />
          </View>
        </View>
        <View>
          {!alert ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => setAlert(!alert)}>
              <IconBell name="bell" size={16} style={styles.icon}></IconBell>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => setAlert(!alert)}>
              <IconBellRing
                name="bell-ring"
                size={16}
                style={styles.iconAlert}></IconBellRing>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  backDrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 3,
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 10,
    position: 'relative',
    zIndex: 2,
  },
  button: {
    padding: 18,
    borderRadius: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 20,
  },
  icon: {
    color: '#7CA4D7',
  },
  // icon: {
  //   color: '#007AC7',
  // },
  iconAlert: {
    color: '#10C700',
  },
  searchSection: {
    flex: 1,
    marginHorizontal: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 20,
  },

  searchIcon: {
    marginRight: 10,
    color: '#7CA4D7',
  },
  searchInput: {
    flex: 1,
  },
});
