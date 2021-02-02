import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

import ArticleGrid from "../../components/articles/ArticleGrid";
import ShopGrid from "../../components/shops/ShopGrid";
import SectionTitle from "../../components/UI/SectionTitle";

const FeedScreen = (props) => {
  const articles = [
    {
      id: "1",
      title: "jean SUper avec un title mega longf",
      imageUrl:
        "https://find-my-shop.s3.eu-west-3.amazonaws.com/storage/articles/5fd38a5464b9b7f1513a6e68/1607699069048_img.png",
      price: 19.99,
      shopName: "Adidas Store",
    },
    {
      id: "2",
      title: "tee shirt blanc",
      imageUrl:
        "https://find-my-shop.s3.eu-west-3.amazonaws.com/storage/articles/5fd38a5464b9b7f1513a6e68/1607699069048_img.png",
      price: 29.99,
      shopName: "Nike Store",
    },
    {
      id: "3",
      title: "Pantalon rouge",
      imageUrl:
        "https://find-my-shop.s3.eu-west-3.amazonaws.com/storage/articles/5fd38a5464b9b7f1513a6e68/1607699069048_img.png",
      price: 49.99,
      shopName: "Converse",
    },
  ];

  const shops = [
    {
      id: "1",
      title: "Adidas Store",
      imageUrl:
        "https://find-my-shop-public-assets.s3.eu-west-3.amazonaws.com/default-banner.jpg",
      city: "Fontaines sur saone",
    },
    {
      id: "2",
      title: "Converse Shop",
      imageUrl:
        "https://find-my-shop.s3.eu-west-3.amazonaws.com/storage/stores/5fb66b9c297f8f19eec5c998/assets/1612187397614_cover.png",
      city: "Lyon Bellecour",
    },
    {
      id: "3",
      title: "Nike Store",
      imageUrl:
        "https://find-my-shop.s3.eu-west-3.amazonaws.com/storage/stores/5fb66b9c297f8f19eec5c998/assets/1612187397614_cover.png",
      city: "St Germain au mont d'or",
    },
  ];

  const selectArticleHandler = (id, title, imageUrl) => {
    props.navigation.navigate("ArticleDetails", {
      articleId: id,
      articleTitle: title,
      articleImageUrl: imageUrl,
    });
  };

  const selectShopHandler = (id, title, imageUrl) => {
    props.navigation.navigate("ShopDetails", {
      shopId: id,
      shopTitle: title,
      shopImageUrl: imageUrl,
    });
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <SectionTitle style={{ marginBottom: 15, marginTop: 15 }}>
          Articles suggérés pour vous
        </SectionTitle>
        <ArticleGrid
          horizontal={true}
          articles={articles}
          selectItem={(id, title, imageUrl) => {
            selectArticleHandler(id, title, imageUrl);
          }}
        />
        <SectionTitle style={{ marginBottom: 15, marginTop: 15 }}>
          Shop tendances
        </SectionTitle>
        <ShopGrid
          horizontal={true}
          shops={shops}
          selectItem={(id, title, imageUrl) => {
            selectShopHandler(id, title, imageUrl);
          }}
        />
        <SectionTitle style={{ marginBottom: 15, marginTop: 15 }}>
          Articles tendances
        </SectionTitle>
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
  headerTitle: "Fil d'actu",
};

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 10,
  },
});

export default FeedScreen;
