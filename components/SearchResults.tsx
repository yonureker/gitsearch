import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import { useSelector } from "react-redux";
import { ActivityIndicator } from "react-native-paper";
import * as Linking from "expo-linking";
import { MaterialIcons } from "@expo/vector-icons";
import { gql, useLazyQuery } from "@apollo/client";

const GET_USERS = gql`
  query SearchUsers($userQuery: String!) {
    search(query: $userQuery, type: USER, first: 20) {
      edges {
        node {
          ... on User {
            avatarUrl
            id
            login
            url
          }
        }
      }
    }
  }
`;

const GET_REPOSITORIES = gql`
  query SearchRepositories($userQuery: String!) {
    search(query: $userQuery, type: REPOSITORY, first: 20) {
      edges {
        node {
          ... on Repository {
            id
            url
            description
            stargazerCount
            nameWithOwner
            owner {
              avatarUrl
            }
          }
        }
      }
    }
  }
`;

export default function SearchResults() {
  const query = useSelector((state) => state.query.text);
  const option = useSelector((state) => state.searchOption.value);
  const darkMode = useSelector((state) => state.darkMode.theme);

  const textStyle = darkMode ? styles.darkModeText : null;
  const backgroundStyle = darkMode ? styles.darkModeBackground : null;

  const [getUsers, { loading: loadingUsers, data: userData }] = useLazyQuery(
    GET_USERS,
    {
      variables: { userQuery: query }
    }
  );

  const [
    getRepositories,
    { loading: loadingRepositories, data: repositoryData }
  ] = useLazyQuery(GET_REPOSITORIES, {
    variables: { userQuery: query }
  });

  const options = userData || repositoryData;

  //repositoryData.search.edges

  useEffect(() => {
    if (query.length >= 3) {
      const timeoutId = setTimeout(() => handleNewSearch(), 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [query]);

  const handleNewSearch = () => {
    if (option === "users") {
      getUsers();
    } else {
      getRepositories();
    }
  };

  if (query === "") {
    return null;
  }

  return (
    <View style={styles.screenContainer}>
      {(loadingUsers || loadingRepositories) && (
        <ActivityIndicator style={{padding: 10}} size="large" animating={true} />
      )}

      {options && (
        <FlatList
          style={{
            maxHeight: 280
            // borderTopLeftRadius: 10,
            // borderBottomLeftRadius: 10,
            // borderRadius: 10,
          }}
          keyExtractor={(item) => item.node.id}
          data={options.search.edges}
          indicatorStyle="black"
          initialNumToRender={10}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => Linking.openURL(`${item.node.url}`)}
            >
              {option === "users" && (
                <View style={styles.itemContainer}>
                  <View>
                    <Image
                      source={{ uri: `${item.node.avatarUrl}` }}
                      style={styles.image}
                    />
                  </View>
                  <View>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={textStyle}
                    >
                      {item.node.login}
                    </Text>
                  </View>
                </View>
              )}

              {option === "repositories" && (
                <View style={styles.itemContainer}>
                  <View>
                    <Image
                      source={{ uri: `${item.node.owner.avatarUrl}` }}
                      style={styles.image}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                      }}
                    >
                      <View style={{ flex: 10 }}>
                        <Text
                          style={[textStyle, styles.boldText]}
                          numberOfLines={1}
                          ellipsizeMode="tail"
                        >
                          {item.node.nameWithOwner}
                        </Text>
                      </View>
                      <View style={styles.starSnippetContainer}>
                        <View style={[styles.starIconBox, backgroundStyle]}>
                          <View>
                            <MaterialIcons
                              name="star-border"
                              size={16}
                              color="gray"
                            />
                          </View>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={[{ alignSelf: "center" }, textStyle]}>
                            {item.node.stargazerCount}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={{ marginTop: 2 }}>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={textStyle}
                      >
                        {item.node.description}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    maxHeight: 300,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderRadius: 10,
    overflow: "hidden"
  },
  itemContainer: {
    flexDirection: "row",
    padding: 5,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: "#F2F2F2",
    alignItems: "center"
  },
  starSnippetContainer: {
    borderWidth: 1,
    borderColor: "#D9DBDB",
    borderRadius: 10,
    height: 25,
    width: 110,
    minWidth: 90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  starIconBox: {
    height: "100%",
    flexDirection: "row",
    borderRightWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderRightColor: "#D9DBDB",
    backgroundColor: "#FAFBFC",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5
    // padding: 10,
  },
  image: { height: 40, width: 40, marginRight: 10 },
  darkModeText: {
    color: "white"
  },
  boldText: {
    fontWeight: "bold"
  },
  darkModeBackground: {
    backgroundColor: "black"
  }
});
