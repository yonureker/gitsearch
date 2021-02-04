import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

export default function RadioButtonContainer() {
  const dispatch = useDispatch();
  const option = useSelector((state) => state.searchOption.value);
  const darkMode = useSelector(state => state.darkMode.theme)
  
  const textStyle = darkMode ? styles.darkModeText : null;


  return (
    <RadioButton.Group
      onValueChange={(newValue) =>{
        dispatch({ type: "TOGGLE_OPTION", payload: newValue })
        dispatch({type: "RESET_QUERY"})
      }
      }
      value={option}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <View style={styles.container}>
          <RadioButton value="users" uncheckedColor="gray" status={option === 'users' ? 'checked' : "unchecked"}/>
          <Text style={textStyle}>Search Users</Text>
        </View>
        <View style={styles.container}>
          <RadioButton value="repositories" uncheckedColor="gray" status={option === 'repositories' ? 'checked' : "unchecked"}/>
          <Text style={textStyle}>Search Repositories</Text>
        </View>
        {/* <View style={styles.container}>
          <RadioButton value="topics" />
          <Text>Search Topics</Text>
        </View> */}
      </View>
    </RadioButton.Group>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  darkModeText : {
    color: 'white'
  }
});
