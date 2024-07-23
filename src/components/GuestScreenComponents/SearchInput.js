import {StyleSheet, Text, View} from 'react-native';
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
        styles={{
          textInput: {
            // color: '#000000',
            backgroundColor: 'black',
            height: 50,
            borderRadius: 0,
            paddingVertical: 0,
            paddingHorizontal: 0,
            fontSize: 15,
            flex: 1,
          },
          poweredContainer: {
            justifyContent: 'flex-end',
            alignItems: 'center',
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderColor: '#c8c7cc',
            borderTopWidth: 0,
          },
        }}
      />
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
