import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default function Logo() {
  return (
    <View>
      <Image source={require('../assets/logo.png')} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 8,
    resizeMode: 'contain',
    width: 500,
    height: 60
  }
})

