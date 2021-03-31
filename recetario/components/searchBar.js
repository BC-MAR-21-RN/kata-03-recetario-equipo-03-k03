import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
  return (
    <View style={style.barContainer}>
      <Icon name="search" size={20} color="white" />
      <TextInput
        placeholder="What do you want to eat??"
        placeholderTextColor="white"
        style={style.bar}
      />
      <Icon name="microphone" size={20} color="white" />
    </View>
  );
};

const style = StyleSheet.create({
  bar: {
    color: 'white',
    borderWidth: 0,
  },
  barContainer: {
    backgroundColor: '#343435',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SearchBar;
