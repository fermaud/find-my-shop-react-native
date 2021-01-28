import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Home Scren</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
  },
  title: {
    fontFamily: "roboto",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});

export default HomeScreen;
