import React from "react";
import { TextInput, StyleSheet } from "react-native";

const CustomSearchRounded = (props) => {
  return (
    <TextInput
      returnKeyType="search"
      style={{ ...styles.input, ...props.style }}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
      clearButtonMode="always"
      onSubmitEditing={props.onStartSearch}
      keyboardAppearance="light"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 14,
    fontSize: 17,
    backgroundColor: "#f6f6f6",
    color: "#333"
  }
});

export default CustomSearchRounded;
