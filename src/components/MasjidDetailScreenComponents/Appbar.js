import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMenu from 'react-native-vector-icons/MaterialCommunityIcons';
const AppBar = () => {
  const [menu, setMenu] = useState(false);
  console.log(menu);
  const navigation = useNavigation();
  return (
    <View style={styles.bar}>
      <TouchableOpacity
        onPress={() => navigation.navigate('guest')}
        style={styles.button}>
        <Icon name="arrow-back" size={18} style={styles.icon}></Icon>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.menuBtn]}
        onPress={() => setMenu(!menu)}>
        <IconMenu name="dots-vertical" size={18} style={styles.icon} />
        {menu && (
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Report</Text>
            </TouchableOpacity>
            <View style={styles.divider}>
              <View style={styles.subDivider}></View>
            </View>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Reclaim</Text>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
  },
  button: {
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  menuBtn: {
    position: 'relative',
  },
  menu: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 50,
    right: 0,
    borderRadius: 20,
    width: 150,
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  menuItem: {
    backgroundColor: 'white',
    elevation: 10,
    paddingVertical: 15,
  },
  menuItemText: {
    textAlign: 'center',
    color: '#00609D',
  },
  divider: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  subDivider: {
    flex: 1,
    height: 1.5,
    backgroundColor: '#00609D',
  },
  icon: {
    color: '#007AC7',
  },
  iconAlert: {
    color: '#10C700',
  },
});
