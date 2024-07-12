import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// function HomeScreen() {
//   return (
//     <View
//       style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
//       <Text style={{color: 'black'}}>Home Screen</Text>
//       <Text style={{color: 'black'}}>Home Screen</Text>
//       <Text style={{color: 'black'}}>Home Screen</Text>
//       <TextInput
//         placeholder="Enter Your Name"
//         style={{color: 'black', borderColor: 'red', borderWidth: 3}}
//       />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

function App1() {
  // const [name, setName] = useState('');

  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // const handleChangeState = (name, value) => {
  //   setState(prev => ({...prev, [name]: value}));
  // };

  const handleChangeState = (name, value) => {
    setState(prev => ({...prev, [name]: value}));
  };
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{title: 'Overview'}}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <View style={[styles.centerAlignedContainer, {color: 'black'}]}>
    //   <Text>Home Screen</Text>
    //   <Text style={{color: 'black'}}>Home Screen</Text>
    //   <Text style={{color: 'black'}}>{name}</Text>
    //   <View style={{width: '100%', marginTop: 20}}>
    //     <TextInput
    //       placeholder="Enter Your Name"
    //       style={styles.input}
    //       value={name}
    //       onChangeText={text => setName(text)}
    //       // onChange={e => setName(e.nativeEvent.text)}
    //     />
    //     <Button onPress={() => setName('')} title="Clear Input" />
    //   </View>
    // </View>

    <View style={[styles.centerAlignedContainer, {color: 'black'}]}>
      <Text>Home Screen</Text>
      <Text style={{color: 'black'}}>Home Screen</Text>
      <Text style={{color: 'black'}}>{state.name}</Text>
      <Text style={{color: 'black'}}>{state.email}</Text>
      <Text style={{color: 'black'}}>{state.phone}</Text>
      <View style={{width: '100%', marginTop: 20}}>
        <TextInput
          // name="name"
          placeholder="Enter Your Name"
          style={styles.input}
          value={state.name}
          placeholderTextColor={'black'}
          // onChangeText={}
          onChangeText={text => handleChangeState('name', text)}
        />
        <TextInput
          // name="email"
          placeholder="Enter Your Email"
          style={styles.input}
          value={state.email}
          placeholderTextColor={'black'}
          // onChangeText={}
          onChangeText={text => handleChangeState('email', text)}
        />
        <TextInput
          // name="phone"
          placeholder="Enter Your Phone Number"
          style={styles.input}
          value={state.phone}
          placeholderTextColor={'black'}
          // onChangeText={}
          onChangeText={text => handleChangeState('phone', text)}
        />
        {/* <Button
          onPress={() =>
            setState({
              name: '',
              email: '',
              phone: '',
            })
          }
          title="Clear Input"
        /> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            setState({
              name: '',
              email: '',
              phone: '',
            })
          }>
          <Text>Clear Input</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: 'green',
    color: 'white',
    marginTop: 30,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {color: 'black', borderColor: 'red', borderWidth: 2, marginBottom: 10},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  image: {
    width: 'fullscreen',
    height: 100,
    marginBottom: 20,
  },

  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  centerAlignedContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '100%',
    padding: 20,
  },
});

export default App1;
