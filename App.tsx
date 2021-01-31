import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import Header from "./components/Header";
import Logo from "./components/Logo";
import SearchContainer from "./components/SearchContainer";
import Footer from './components/Footer'

import rootReducer from "./reducers/rootReducer";

export default function App() {
  const store = createStore(rootReducer, applyMiddleware(logger));

  

  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: '#F2F2F2'}}>
        <View style={styles.container}>
          <Header />
          <Logo />
          <SearchContainer />
          {Platform.OS === 'web' && <Footer />}
          <StatusBar backgroundColor="#F2F2F2" />
        </View>
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
