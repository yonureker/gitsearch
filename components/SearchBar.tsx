import React from 'react'
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchBar() {
  const dispatch = useDispatch();
  const query = useSelector(state => state.query.text)

  const onChangeSearch = (newQuery : string) => dispatch({type: "UPDATE_QUERY", payload: newQuery});

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={query}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  }
})
