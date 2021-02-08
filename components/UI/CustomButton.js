import React from "react";
import { TouchableWithoutFeedback, StyleSheet, Text, View, Image } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.style }} onPress={props.onPress} underlayColor="#fff">
        {props.children}
        <Text style={{ ...styles.loginText, ...props.textStyle }}>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },
  loginText: {
    color: "#ffffff",
    textAlign: "center"
  }
});

export default CustomButton;
