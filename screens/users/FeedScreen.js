import React, { useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ArticleGrid from "../../components/articles/ArticleGrid";
import ShopGrid from "../../components/shops/ShopGrid";
import SectionTitle from "../../components/UI/SectionTitle";
import * as articlesActions from "../../store/actions/articles";

const FeedScreen = (props) => {
  const suggestedArticles = useSelector((state) => state.articles.suggestedArticles);
  const shops = useSelector((state) => state.shops.shops);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(articlesActions.fetchSuggestedArticles());
  }, [dispatch]);

  const selectArticleHandler = (id) => {
    props.navigation.navigate("ArticleDetails", {
      articleId: id
    });
  };

  const selectShopHandler = (id) => {
    props.navigation.navigate("ShopDetails", {
      shopId: id
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.screen}>
        <SectionTitle style={{ marginBottom: 15, marginTop: 15 }}>Articles suggérés pour vous</SectionTitle>
        <ArticleGrid
          horizontal={true}
          articles={suggestedArticles}
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
          articles={suggestedArticles}
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
