import React from 'react'
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import Logo from "../components/Logo";
import SearchContainer from "../components/SearchContainer";
import Footer from "../components/Footer";

export default function Main() {
  const darkMode = useSelector(state => state.darkMode.theme)
  const containerStyle = darkMode ? styles.darkModeContainer : null

  return (
    <View style={[styles.container, containerStyle]}>
            <Header />
            <Logo />
            <SearchContainer />
            {Platform.OS === "web" && <Footer />}
            <StatusBar backgroundColor="#F2F2F2" />
          </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  darkModeContainer : {
    backgroundColor: 'black'
  }
});
