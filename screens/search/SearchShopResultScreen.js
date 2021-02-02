import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  FlatList,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ShopGrid from "../../components/shops/ShopGrid";
import CustomSearchRounded from "../../components/UI/CustomSearchRounded";
import FilterItem from "../../components/UI/FilterItem";

const SearchShopResultScreen = (props) => {
  const [searchQuery, setSearchQuery] = useState(
    props.route.params.searchQuery
  );
  const categoryId = props.route.params.categoryId;
  const categoryTitle = props.route.params.categoryTitle;

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

  const filterList = [
    { id: "f1", title: "Filter", isSelected: false },
    { id: "f2", title: "Taille", isSelected: true },
    { id: "f3", title: "Dispos", isSelected: false },
    { id: "f4", title: "Marque", isSelected: false },
    { id: "f5", title: "Shop", isSelected: false },
  ];

  const selectShopHandler = (id, title, imageUrl) => {
    props.navigation.navigate("ShopDetails", {
      shopId: id,
      shopTitle: title,
      shopImageUrl: imageUrl,
    });
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.searchContainer}>
        <View style={{ width: 30, marginRight: 10 }}>
          <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={30} color="grey" />
          </TouchableWithoutFeedback>
        </View>
        <View style={{ flex: 1 }}>
          <CustomSearchRounded
            placeholder={
              categoryId
                ? 'Recherchez dans "' + categoryTitle + '"'
                : "Recherchez un shop"
            }
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
        <View style={{ width: 30, marginLeft: 10 }}>
          <TouchableWithoutFeedback onPress={() => console.log("save search")}>
            <Ionicons name="bookmark-outline" size={30} color="grey" />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View>
        <FlatList
          style={{ marginTop: 15 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={filterList}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <FilterItem
              isSelected={itemData.item.isSelected}
              title={itemData.item.title}
              selectItem={() => {
                console.log("select Filter");
              }}
            />
          )}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.resultsNbr}>244 résultats</Text>
        <ShopGrid
          shopStyle={styles.shopThumbStyle}
          shops={shops}
          selectItem={(id, title, imageUrl) => {
            selectShopHandler(id, title, imageUrl);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: 10,
  },
  searchContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  itemText: {
    fontSize: 16,
    color: "#727272",
  },
  shopThumbStyle: {
    marginHorizontal: 0,
    flex: 1,
    width: "100%",
    height: 250,
    marginBottom: 3,
  },
  resultsNbr: {
    marginTop: 20,
    marginBottom: 7,
    color: "#727272",
    fontSize: 15,
    fontWeight: "500",
  },
});

export default SearchShopResultScreen;
