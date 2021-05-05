import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider, useSelector } from "react-redux";
import { createStore } from "redux";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import rootReducer from "./reducers/rootReducer";
import Main from "./components/Main";



export default function App() {
  const store = createStore(rootReducer);

  const httpLink = new HttpLink({
    uri: 'https://api.github.com/graphql',
  });

  const githubToken = process.env.TOKEN

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = 'Bearer ' + githubToken
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? token : null,
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
          <ApolloProvider client={client}>
            <Main />
          </ApolloProvider>
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
}
