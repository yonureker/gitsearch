import React from 'react'
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchBar() {
  const dispatch = useDispatch();
  const query = useSelector<string>(state => state.query.text)
  const darkMode = useSelector(state => state.darkMode.theme)

  const containerStyle = darkMode ? styles.darkModeContainer : null
  const textStyle = darkMode ? styles.darkModeText : null;

  const onChangeSearch = (newQuery : string) => dispatch({type: "UPDATE_QUERY", payload: newQuery});

  return (
    <Searchbar
      placeholder="Search"
      placeholderTextColor={textStyle}
      onChangeText={onChangeSearch}
      value={query}
      style={[styles.container, containerStyle]}
      inputStyle={textStyle}
      iconColor={darkMode ? "white" : 'black'}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#DFE1E5'
  },
  darkModeContainer : {
    backgroundColor: 'black',
  },
  darkModeText : {
    color: 'white'
  }
})
