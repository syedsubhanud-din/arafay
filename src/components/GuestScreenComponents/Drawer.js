import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import BackIcon from 'react-native-vector-icons/Ionicons';
import ForwardIcon from 'react-native-vector-icons/Ionicons';
import ArrowForwardIcon from 'react-native-vector-icons/FontAwesome6';
import UserIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const Drawer = ({drawer, setDrawer}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={styles.backDrop}></View>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.topBarButton}>
            <BackIcon
              name="chevron-back"
              size={20}
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login_SignUp');
              setDrawer(!drawer);
            }}>
            <View style={styles.navLink}>
              <View style={styles.navLinkTitle}>
                <ArrowForwardIcon
                  name="arrow-right-to-bracket"
                  size={20}
                  color="#000"
                  // onPress={() => drawer.current.closeDrawer()}
                />
                <Text style={styles.textBlack}>Login / Sign up</Text>
              </View>
              <View>
                <ForwardIcon name="chevron-forward" size={20} color="#000" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
              setDrawer(!drawer);
            }}>
            <View style={styles.navLink}>
              <View style={styles.navLinkTitle}>
                <UserIcon name="user" size={20} color="#000" />
                <Text style={styles.textBlack}>User Profile</Text>
              </View>
              <View>
                <ForwardIcon name="chevron-forward" size={20} color="#000" />
              </View>
            </View>
          </TouchableOpacity>
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
    width: '80%',
    height: '100%',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },

  topBar: {
    backgroundColor: '#00609D',
    paddingVertical: 15,
  },
  topBarButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 10,
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
    fontSize: 15,
    color: 'black',
  },
  navLinksContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  navLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  navLinkTitle: {
    flexDirection: 'row',
    paddingVertical: 20,
    gap: 20,
  },
  textBlack: {
    color: '#000',
    fontWeight: 'bold',
  },
  textWhite: {
    color: '#FFF',
    fontSize: 20,
  },
});
