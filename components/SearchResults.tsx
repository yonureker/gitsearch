import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator } from "react-native-paper";
import * as Linking from "expo-linking";
import { MaterialIcons } from "@expo/vector-icons";

export default function SearchResults() {
  const query = useSelector((state) => state.query.text);
  const option = useSelector((state) => state.searchOption.value);

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (query.length >= 3) {
      handleSearch(query);
    }
  }, [query]);

  

  const handleSearch = (query) => {
    setIsLoading(true);

    fetch(
      `https://api.github.com/search/${option}?q=${query}&page=1&per_page=20`
      // ,
      // {
      //   headers: {
      //     // Github authentication is needed for less limited requests
      //     authorization: "token " + process.env.REACT_NATIVE_TOKEN,
      //   }
      // }
    )
      .then((resp) => resp.json())
      .then(({ items }) => {
        let options;
        switch (option) {
          case "users":
            options = items.map((i) => ({
              avatar_url: i.avatar_url,
              id: i.id,
              login: i.login,
              url: i.html_url,
            }));
            break;
          case "repositories":
            options = items.map((i) => ({
              avatar_url: i.owner.avatar_url,
              id: i.id,
              full_name: i.full_name,
              url: i.html_url,
              stars: i.stargazers_count,
              description: i.description,
            }));
            break;
          default:
        }
        setOptions(options);
        setIsLoading(false);
      });
  };

  if (query === "") {
    return null;
  }

  return (
    <View style={styles.screenContainer}>
      {isLoading && <ActivityIndicator size="large" animating={true} />}

      <FlatList
        style={{ maxHeight: 280, borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10, borderRadius: 10}}
        keyExtractor={(item) => item.url}
        data={options}
        initialNumToRender={10}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => Linking.openURL(`${item.url}`)}>
            {option === "users" && (
              <View style={styles.itemContainer}>
                <View>
                  <Image
                    source={{ uri: `${item.avatar_url}` }}
                    style={styles.image}
                  />
                </View>
                <View>
                  <Text numberOfLines={1} ellipsizeMode="tail">
                    {item.login}
                  </Text>
                </View>
              </View>
            )}

            {option === "repositories" && (
              <View style={styles.itemContainer}>
                <View>
                  <Image
                    source={{ uri: `${item.avatar_url}` }}
                    style={styles.image}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flex: 10 }}>
                      <Text
                        style={{ fontWeight: "bold" }}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {item.full_name}
                      </Text>
                    </View>
                    <View style={styles.starSnippetContainer}>
                      <View style={styles.starIconBox}>
                        <View>
                          <MaterialIcons
                            name="star-border"
                            size={16}
                            color="gray"
                          />
                        </View>
                      </View>
                      <View style={{ flex: 1}}>
                        <Text style={{ alignSelf: "center" }}>
                          {item.stars}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={{ marginTop: 2 }}>
                    <Text numberOfLines={1} ellipsizeMode="tail">
                      {item.description}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    maxHeight: 300,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderRadius: 10,
    overflow: 'hidden'
  },
  itemContainer: {
    flexDirection: "row",
    padding: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#fcfcf7",
    alignItems: "center",
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
    flex: 1,
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
});
