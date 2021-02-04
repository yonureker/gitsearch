
import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider, useSelector } from "react-redux";
import { createStore } from "redux";



import rootReducer from "./reducers/rootReducer";
import Main from "./components/Main"

export default function App() {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
          <Main />
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
}


