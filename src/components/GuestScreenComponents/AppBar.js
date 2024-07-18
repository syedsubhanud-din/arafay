import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const AppBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.bar}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Text>
            <Icon name="arrow-back" size={22} style={styles.icon}></Icon>
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchSection}>
        <View style={styles.searchBar}>
          <Icon name="search" size={15} style={styles.searchIcon} />
          <TextInput style={styles.searchInput} selectionColor="#7CA4D7" />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text>
            <Icon name="notifications" size={22} style={styles.icon}></Icon>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    height: 50,
    width: 50,
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
