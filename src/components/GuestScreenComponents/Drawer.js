import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import LoginSignupScreen from '../../screens/login_signupScreen/LoginSignupScreen';
import BackIcon from 'react-native-vector-icons/Ionicons';
const Drawer = ({drawer, setDrawer}) => {
  return (
    <View style={styles.main}>
      {/* <LoginSignupScreen drawer = {drawer} setDrawer = {setDrawer}/> */}
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.topBarButton}>
            <BackIcon
              name="chevron-back"
              size={30}
              color="#FFF"
              // onPress={() => drawer.current.closeDrawer()}
            />
            <Text style={styles.textWhite}>More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.usernameContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require('../../assets/images/profile.png')}
              style={styles.image}
            />
          </View>
          <Text style={styles.usernameText}>Username</Text>
        </View>
        <View style={styles.navLinksContainer}>
          <View style={styles.navLink}>
            <View></View>
            <View></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1000,
    width: '70%',
    height: '100%',
    borderTopRightRadiusRadius: 20,
    overflow: 'hidden',
  },
  topBar: {
    backgroundColor: '#00609D',
  },
  topBarButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  usernameContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  profileImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 200,
    backgroundColor: '#F0F0F0',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  usernameText: {
    fontSize: 20,
    color: 'black',
  },
  navLinksContainer: {},
  navLink: {},
  textBlack: {
    // color: '#000',
  },
  textWhite: {
    color: '#FFF',
  },
});
