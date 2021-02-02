import React from "react";
import { Text, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

const FilterItem = (props) => {
  if (props.isSelected) {
    return (
      <TouchableWithoutFeedback onPress={props.selectItem}>
        <View style={{ ...styles.filter, ...styles.filterSelected }}>
          <Text style={styles.textSelected}>{props.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <TouchableWithoutFeedback onPress={props.selectItem}>
        <View style={styles.filter}>
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const styles = StyleSheet.create({
  filter: {
    minWidth: 70,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 2,
    marginRight: 10,
    borderColor: "#D2D2D2",
    borderRadius: 4
  },
  filterSelected: {
    backgroundColor: "#E47747",
    borderColor: "#E47747"
  },
  text: {
    textAlign: "center",
    fontWeight: "500",
    color: "#525252"
  },
  textSelected: {
    textAlign: "center",
    fontWeight: "500",
    color: "white"
  }
});

export default FilterItem;
