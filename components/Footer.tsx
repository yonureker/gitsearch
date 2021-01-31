import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";  

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>Built with React Native Web <Ionicons name="heart" size={14} color="red"/></Text>
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
  }
})
