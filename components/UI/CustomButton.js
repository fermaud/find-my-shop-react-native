import React from "react";
import { TouchableWithoutFeedback, StyleSheet, Text, View } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.style }} onPress={props.onPress} underlayColor="#fff">
        <Text style={{ ...styles.loginText, ...props.textStyle }}>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black"
  },
  loginText: {
    color: "#ffffff",
    textAlign: "center"
  }
});

export default CustomButton;
