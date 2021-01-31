import React from "react";
import { StyleSheet, Text, View, Linking, Pressable, Platform } from "react-native";
import Constants from 'expo-constants';
import { Ionicons } from "@expo/vector-icons";

const STATUSBAR_HEIGHT = Constants.statusBarHeight

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>Onur Eker</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
      <View style={styles.item}>
      <Pressable onPress={() => Linking.openURL(`https://www.linkedin.com/in/onureker/`)}>
        <Text>
          <Ionicons name="logo-linkedin" size={14} /> LinkedIn
        </Text>
        </Pressable>
      </View>
      <View style={styles.item}>
      <Pressable onPress={() => Linking.openURL(`https://github.com/yonureker/`)} >
        <Text><Ionicons name="logo-github" size={14} /> Github</Text>
        </Pressable>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: "center",
    justifyContent: 'space-between',
    position: "absolute",
    top: Platform.OS === 'android' ? STATUSBAR_HEIGHT : 0 ,
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: '#F2F2F2'
  },
  item: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
