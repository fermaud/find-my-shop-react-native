import React from "react";
import { TouchableWithoutFeedback, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchPlaceHolderItem = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.selectItem}>
      <View style={{ ...styles.buttonSearchPlaceHolderItem, ...props.style }}>
        <View>{props.children}</View>
        <View>
          <Ionicons name="chevron-forward-outline" size={25} color="grey" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  buttonSearchPlaceHolderItem: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 20,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default SearchPlaceHolderItem;
