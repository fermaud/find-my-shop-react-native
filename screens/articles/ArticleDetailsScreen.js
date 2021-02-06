import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, ImageBackground, ScrollView, Image, ActivityIndicator, Button, RefreshControl } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import SearchPlaceHolderItem from "../../components/UI/SearchPlaceHolderItem";
import CustomLoader from "../../components/UI/CustomLoader";
import CustomButton from "../../components/UI/CustomButton";
import Colors from "../../constants/Colors";
import * as articlesActions from "../../store/actions/articles";

const ArticleDetailsScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const articleId = props.route.params.articleId;
  const article = useSelector((state) => state.articles.selectedArticle);
  const dispatch = useDispatch();

  const loadArticle = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(articlesActions.fetchArticleById(articleId));
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadArticle().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadArticle]);

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>Une erreur est survenue</Text>
        <Button title="Recharger" onPress={loadArticle} color="grey" />
      </View>
    );
  }
  if (isLoading) {
    return <CustomLoader />;
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView} refreshControl={<RefreshControl onRefresh={loadArticle} refreshing={isRefreshing} />}>
      <View style={styles.screen}>
        <View style={styles.imageContainer}>
          <ImageBackground
            resizeMethod={"auto"}
            source={{ uri: article.imageUrl }}
            style={styles.image}
            imageStyle={{
              resizeMode: "cover",
              alignSelf: "flex-end"
            }}
          >
            <View style={styles.headerButtonContainer}>
              <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
                <Ionicons style={styles.backButton} name="ios-arrow-back-outline" size={40} color="#727272" />
              </TouchableWithoutFeedback>
              <Ionicons style={styles.backButton} name="ios-heart-outline" size={40} color="#727272" />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.details}>
          <SearchPlaceHolderItem
            style={{ paddingVertical: 15 }}
            selectItem={() => {
              props.navigation.navigate("ShopDetails", {
                shopId: article.shopId
              });
            }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ width: 80 }}>
                <Image
                  resizeMethod={"auto"}
                  source={{ uri: article.shopInfos.coverUrl }}
                  style={styles.imageShop}
                  imageStyle={{
                    resizeMode: "cover"
                  }}
                />
              </View>
              <View style={styles.storeInfosContainer}>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>{article.shopInfos.title}</Text>
                <Text style={{ fontSize: 18, color: "#727272", fontWeight: "500" }}>Lyon 6</Text>
              </View>
            </View>
          </SearchPlaceHolderItem>
          <Text style={{ fontWeight: "500", fontSize: 18, paddingTop: 10 }}>{article.title}</Text>
          <Text style={{ fontWeight: "500", fontSize: 18, paddingTop: 10, color: "#07C807" }}>Dispo en magasin</Text>
          <Text style={styles.description} numberOfLines={4}>
            {article.description}
          </Text>
          <CustomButton onPress={() => console.log("Login")} style={styles.seeStockButtonStyle} textStyle={{ color: "#E47747", fontSize: 17 }} title="Voir les stocks !" />
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
    height: 400,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8"
  },
  details: {
    paddingHorizontal: 10
  },
  title: {
    fontSize: 20
  },
  headerButtonContainer: {
    marginTop: 50,
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center"
  },
  imageShop: {
    borderRadius: 10,
    height: 47,
    width: 75
  },
  storeInfosContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    paddingLeft: 10
  },
  seeStockButtonStyle: {
    marginTop: 15,
    paddingVertical: 17,
    marginBottom: 10,
    backgroundColor: "white",
    borderColor: Colors.primary,
    borderWidth: 3
  },
  description: {
    fontSize: 16,
    paddingTop: 15
  }
});

export default ArticleDetailsScreen;
