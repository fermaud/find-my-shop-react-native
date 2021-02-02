import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import Colors from "../../constants/Colors";

const ItemSwitchSelector = (props) => {
  const Item = (props) => {
    if (props.isSelected) {
      return (
        <View style={{ ...styles.item, ...styles.selectedItem }}>
          <Text style={styles.textSelected}>{props.title}</Text>
        </View>
      );
    } else {
      return (
        <TouchableWithoutFeedback onPress={props.selectItem}>
          <View style={styles.item}>
            <Text style={styles.textUnselected}>{props.title}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    }
  };

  return (
    <View>
      <View style={{ ...styles.switchContainer, ...props.style }}>
        <Item
          title={props.leftTitle}
          isSelected={props.selectedItem === props.leftTitle}
          selectItem={() => {
            props.selectItem(props.leftTitle);
          }}
        />
        <Item
          title={props.rightTitle}
          isSelected={props.selectedItem === props.rightTitle}
          selectItem={() => {
            props.selectItem(props.rightTitle);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    padding: 1,
    borderColor: "#ebebeb",
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 30,
    backgroundColor: "#f6f6f6",
    color: "#333"
  },
  item: {
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: 45
  },
  selectedItem: {
    backgroundColor: "white"
  },
  textSelected: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: "500"
  },
  textUnselected: {
    color: "#bdbdbd",
    fontSize: 18,
    fontWeight: "500"
  }
});

export default ItemSwitchSelector;
