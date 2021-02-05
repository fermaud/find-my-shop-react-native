import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, ImageBackground, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import SearchPlaceHolderItem from "../../components/UI/SearchPlaceHolderItem";
import CustomButton from "../../components/UI/CustomButton";
import Colors from "../../constants/Colors";

const ArticleDetailsScreen = (props) => {
  const articleId = props.route.params.articleId;
  const article = useSelector((state) => state.articles.articles.find((item) => item.id === articleId));

  return (
    <ScrollView>
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
                  source={{ uri: article.imageUrl }}
                  style={styles.imageShop}
                  imageStyle={{
                    resizeMode: "cover"
                  }}
                />
              </View>
              <View style={styles.storeInfosContainer}>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>Addidas Store</Text>
                <Text style={{ fontSize: 18, color: "#727272", fontWeight: "500" }}>Lyon 6</Text>
              </View>
            </View>
          </SearchPlaceHolderItem>
          <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 }}>
            <View>
              <Text style={{ fontWeight: "500", fontSize: 18 }}>{article.title}</Text>
              <Text style={{ fontWeight: "500", fontSize: 18, paddingTop: 10, color: "#07C807" }}>Dispo en magasin</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "500", fontSize: 18 }}>Addidas</Text>
            </View>
          </View>
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
    fontSize: 16
  }
});

export default ArticleDetailsScreen;
