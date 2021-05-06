import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";  
import { useDispatch, useSelector } from 'react-redux';

export default function Footer() {
  const darkMode = useSelector(state => state.darkMode.theme)
  const textStyle = darkMode ? styles.darkModeText : null;
  const containerStyle = darkMode ? styles.darkModeContainer : null

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.item}>
        <Text style={textStyle}>Built with React Native Web <Ionicons name="heart" size={14} color="red"/></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    zIndex: 99,
    elevation: 99,
    backgroundColor: '#F2F2F2',
    width: '100%'
  },
  item: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  darkModeText : {
    color: 'white'
  },
  darkModeContainer : {
    backgroundColor: '#2B2828',
  },
})
