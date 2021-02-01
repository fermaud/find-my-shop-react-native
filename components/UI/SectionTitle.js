import React from "react";
import { Text, StyleSheet } from "react-native";

const SectionTitle = (props) => {
  return <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "500",
    fontSize: 25
  }
});

export default SectionTitle;
