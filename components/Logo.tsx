import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    aspectRatio: 5.5,
    resizeMode: 'contain',
    width: 276,
    height: 50
  }
})

