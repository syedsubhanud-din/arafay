import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import BackIcon from 'react-native-vector-icons/Ionicons';
import ForwardIcon from 'react-native-vector-icons/Ionicons';
import ChartIcon from 'react-native-vector-icons/Ionicons';
import ArrowForwardIcon from 'react-native-vector-icons/FontAwesome6';
import UserIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../store/Slices/UserDataSlice';
const Drawer = ({drawer, setDrawer}) => {
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector(state => state.UserInfo);
  const navigation = useNavigation();
  const name = useSelector(state => state?.UserInfo?.user?.name);
  return (
    <View style={styles.main}>
      <View style={styles.backDrop}></View>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.topBarButton}
            onPress={() => setDrawer(!drawer)}>
            <BackIcon name="chevron-back" size={20} color="#FFF" />
            <Text style={styles.textWhite}>Masjid</Text>
          </TouchableOpacity>
        </View>
        {isLoggedIn && (
          <View style={styles.usernameContainer}>
            <View style={styles.profileImageContainer}>
              <Image
                source={require('../../assets/images/profile.png')}
                style={styles.image}
              />
            </View>
            <View>
              <Text style={styles.usernameText}>{name}</Text>
              <View style={styles.scorePointsContainer}>
                <Text style={styles.scorePointsText}>Score points</Text>
                <Image source={require('../../assets/images/coin.png')} />
              </View>
            </View>
          </View>
        )}
        <View style={styles.navLinksContainer}>
          {!isLoggedIn && (
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
          )}
          {isLoggedIn && (
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
          )}
          {isLoggedIn && (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('UserLeaderBoard');
                setDrawer(!drawer);
              }}>
              <View style={styles.navLink}>
                <View style={styles.navLinkTitle}>
                  <ChartIcon name="bar-chart" size={20} color="#000" />
                  <Text style={styles.textBlack}>User Leader Board</Text>
                </View>
                <View>
                  <ForwardIcon name="chevron-forward" size={20} color="#000" />
                </View>
              </View>
            </TouchableOpacity>
          )}
        </View>
        {isLoggedIn && (
          <View style={styles.logoutBtnContainer}>
            <TouchableOpacity
              style={styles.logoutBtn}
              onPress={() => dispatch(logout())}>
              <Text style={styles.logoutBtnText}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
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
  container: {
    flex: 1,
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
    fontWeight: 'bold',
    color: 'black',
  },
  scorePointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scorePointsText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#00609D',
  },
  navLinksContainer: {
    paddingHorizontal: 20,
    flex: 1,
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
  logoutBtnContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  logoutBtn: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00609D',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginBottom: 10,
    shadowRadius: 3,
    elevation: 3,
  },
  logoutBtnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
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
