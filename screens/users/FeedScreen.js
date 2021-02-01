import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

import ArticleHorizontalGrid from "../../components/articles/ArticleHorizontalGrid";
import SectionTitle from "../../components/UI/SectionTitle";

const FeedScreen = (props) => {
  const articles = [
    {
      id: "1",
      title: "jean SUper avec un title mega longf",
      imageUrl: "https://find-my-shop.s3.eu-west-3.amazonaws.com/storage/articles/5fd38a5464b9b7f1513a6e68/1607699069048_img.png",
      price: 19.99,
      shopName: "Adidas Store"
    },
    {
      id: "2",
      title: "tee shirt blanc",
      imageUrl: "https://find-my-shop.s3.eu-west-3.amazonaws.com/storage/articles/5fd38a5464b9b7f1513a6e68/1607699069048_img.png",
      price: 29.99,
      shopName: "Nike Store"
    },
    {
      id: "3",
      title: "Pantalon rouge",
      imageUrl: "https://find-my-shop.s3.eu-west-3.amazonaws.com/storage/articles/5fd38a5464b9b7f1513a6e68/1607699069048_img.png",
      price: 49.99,
      shopName: "Converse"
    }
  ];

  const renderItem = ({ item }) => <Text>{item.title}</Text>;

  const selectArticleHandler = (id, title, imageUrl) => {
    props.navigation.navigate("ArticleDetails", {
      articleId: id,
      articleTitle: title,
      articleImageUrl: imageUrl
    });
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <SectionTitle style={{ marginBottom: 15 }}>Articles suggérés pour vous</SectionTitle>
        <ArticleHorizontalGrid
          articles={articles}
          onSelect={(id, title, imageUrl) => {
            selectArticleHandler(id, title, imageUrl);
          }}
        />
        <SectionTitle style={{ marginBottom: 15 }}>Shop tendances</SectionTitle>
      </View>
    </ScrollView>
  );
};

export const screenOptions = {
  headerTitle: "Fil d'actu"
};

const styles = StyleSheet.create({
  screen: {
    padding: 10
  }
});

export default FeedScreen;
