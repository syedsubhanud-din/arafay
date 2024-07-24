import {StyleSheet} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from '../../config/constants';
const SearchInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Enter Location"
      onPress={(data, details = null) => {
        console.log(data, details);
      }}
      query={{
        key: GOOGLE_MAPS_API_KEY,
        language: 'en',
      }}
      styles={styles}
    />
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  textInput: {
    color: '#000000',
    // backgroundColor: 'black',
    height: 50,
    borderRadius: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    fontSize: 15,
    flex: 1,
    position: 'relative',
    zIndex: 100,
  },
  listView: {
    position: 'absolute',
    width: '130%',
    top: '110%',
    left: -40,
    right: 0,
    backgroundColor: 'white',
    zIndex: 10000,
    overflow: 'scroll',
    maxHeight: 200
  },
  poweredContainer: {
    display: 'none',
  },
  row: {
    color: '#000000',
    marginEnd: 10,
  },
  separator: {
    backgroundColor: '#000000', // Change separator color
  },
  description: {
    color: '#000000', // Change description text color
    fontSize: 10,
    padding: 10,
  },
});
