import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FeedScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Feed Scren</Text>
    </View>
  );
};

export const screenOptions = {
  headerTitle: "Accueil",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FeedScreen;
