import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const ArticleDetailsScreen = (props) => {
  const article = props.route.params;
  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: article.articleImageUrl }} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{article.articleTitle}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 300,
    borderRadius: 7,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  details: {
    padding: 10
  },
  title: {
    fontSize: 20
  }
});

export default ArticleDetailsScreen;
