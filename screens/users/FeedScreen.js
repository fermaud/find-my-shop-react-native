import React, { useState, useEffect, useCallback } from "react";
import { View, ScrollView, StyleSheet, RefreshControl, Button, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ArticleGrid from "../../components/articles/ArticleGrid";
import ShopGrid from "../../components/shops/ShopGrid";
import CustomLoader from "../../components/UI/CustomLoader";
import SectionTitle from "../../components/UI/SectionTitle";
import * as articlesActions from "../../store/actions/articles";
import * as shopsActions from "../../store/actions/shops";
import Colors from "../../constants/Colors";

const FeedScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const suggestedArticles = useSelector((state) => state.articles.suggestedArticles);
  const suggestedShops = useSelector((state) => state.shops.suggestedShops);

  const dispatch = useDispatch();

  // Fonction pour récuperer les éléments
  const loadArticlesAndShops = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(shopsActions.fetchSuggestedShops());
      await dispatch(articlesActions.fetchSuggestedArticles());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  // Actualise si le state change
  useEffect(() => {
    setIsLoading(true);
    loadArticlesAndShops().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadArticlesAndShops]);

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

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>Une erreur est survenue</Text>
        <Button title="Recharger" onPress={loadArticlesAndShops} color="grey" />
      </View>
    );
  }
  if (isLoading) {
    return <CustomLoader />;
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl onRefresh={loadArticlesAndShops} refreshing={isRefreshing} />}>
      <View style={styles.screen}>
        <SectionTitle style={{ marginBottom: 15, marginTop: 15 }}>Articles suggérés pour vous</SectionTitle>
        <ArticleGrid
          horizontal={true}
          articles={suggestedArticles}
          selectItem={(id) => {
            selectArticleHandler(id);
          }}
        />
        <SectionTitle style={{ marginBottom: 15, marginTop: 15 }}>Shop tendances</SectionTitle>
        <ShopGrid
          horizontal={true}
          shops={suggestedShops}
          selectItem={(id, coverUrl, logoUrl) => {
            selectShopHandler(id, coverUrl, logoUrl);
          }}
        />
        <SectionTitle style={{ marginBottom: 15, marginTop: 15 }}>Articles tendances</SectionTitle>
        <ArticleGrid
          horizontal={true}
          articles={suggestedArticles}
          selectItem={(id) => {
            selectArticleHandler(id);
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
