import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Pressable,
  Platform,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-switch";

const STATUSBAR_HEIGHT = Constants.statusBarHeight;

export default function Header() {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.darkMode.theme)

  const handleChange = () => {
    dispatch({
      type: "TOGGLE_THEME"
    })
  };

  // const toggleDarkMode = () => ()

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>Onur Eker</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.item}>
          <Switch
            onChange={handleChange}
            checked={darkMode}
            height={26}
            offColor="#3D3F47"
            onColor="#134484"
            uncheckedIcon={
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <View>
                  <Ionicons color="yellow" name="md-sunny" size={18} />
                </View>{" "}
              </View>
            }
            checkedIcon={
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <View>
                  <Ionicons color="yellow" name="md-moon" size={18} />
                </View>{" "}
              </View>
            }
          />
        </View>
        <View style={styles.item}>
          <Pressable
            onPress={() =>
              Linking.openURL(`https://www.linkedin.com/in/onureker/`)
            }
          >
            <Text>
              <Ionicons name="logo-linkedin" size={14} /> LinkedIn
            </Text>
          </Pressable>
        </View>
        <View style={styles.item}>
          <Pressable
            onPress={() => Linking.openURL(`https://github.com/yonureker/`)}
          >
            <Text>
              <Ionicons name="logo-github" size={14} /> Github
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: Platform.OS === "android" ? STATUSBAR_HEIGHT : 0,
    flexDirection: "row",
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: "#F2F2F2",
  },
  item: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
