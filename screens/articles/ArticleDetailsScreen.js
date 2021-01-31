import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ArticleDetailsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Article Details Screen</Text>
    </View>
  );
};

export const screenOptions = {
  headerTitle: "Article details",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ArticleDetailsScreen;
