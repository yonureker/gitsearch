import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from './SearchBar'
import RadioButtonContainer from './RadioButtonContainer'
import SearchResults from './SearchResults';

export default function SearchContainer() {


  return (
    <View style={styles.container}>
    <RadioButtonContainer />
    <SearchBar />
    <SearchResults />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    maxWidth: 600,
    padding: 10,
    marginBottom: 150
  }
})
