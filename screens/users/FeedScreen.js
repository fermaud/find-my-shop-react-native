import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import ArticleGrid from "../../components/articles/ArticleGrid";
import ShopGrid from "../../components/shops/ShopGrid";
import SectionTitle from "../../components/UI/SectionTitle";

const FeedScreen = (props) => {
  const articles = useSelector((state) => state.articles.articles);
  const shops = useSelector((state) => state.shops.shops);

  const selectArticleHandler = (id, title, imageUrl) => {
    props.navigation.navigate("ArticleDetails", {
      articleId: id,
      articleTitle: title,
      articleImageUrl: imageUrl
    });
  };

  const selectShopHandler = (id, title, imageUrl) => {
    props.navigation.navigate("ShopDetails", {
      shopId: id,
      shopTitle: title,
      shopImageUrl: imageUrl
    });
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <SectionTitle style={{ marginBottom: 15, marginTop: 15 }}>Articles suggérés pour vous</SectionTitle>
        <ArticleGrid
          horizontal={true}
          articles={articles}
          selectItem={(id, title, imageUrl) => {
            selectArticleHandler(id, title, imageUrl);
          }}
        />
        <SectionTitle style={{ marginBottom: 15, marginTop: 15 }}>Shop tendances</SectionTitle>
        <ShopGrid
          horizontal={true}
          shops={shops}
          selectItem={(id, title, imageUrl) => {
            selectShopHandler(id, title, imageUrl);
          }}
        />
        <SectionTitle style={{ marginBottom: 15, marginTop: 15 }}>Articles tendances</SectionTitle>
        <ArticleGrid
          horizontal={true}
          articles={articles}
          selectItem={(id, title, imageUrl) => {
            selectArticleHandler(id, title, imageUrl);
          }}
        />
      </View>
    </ScrollView>
  );
};

export const screenOptions = {
  headerTitle: "Fil d'actu"
};

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 10
  }
});

export default FeedScreen;
