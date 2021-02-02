import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Text, FlatList } from "react-native";

import CustomSearchRounded from "../../components/UI/CustomSearchRounded";
import ItemSwitchSelector from "../../components/UI/ItemSwitchSelector";
import SearchPlaceHolderItem from "../../components/UI/SearchPlaceHolderItem";

const SearchScreen = (props) => {
  const [switchValue, setSwitchValue] = useState("Article");
  const [searchQuery, setSearchQuery] = useState("");

  const articlesCategories = [
    { id: "c1", title: "Tous" },
    { id: "c2", title: "Femme" },
    { id: "c3", title: "Homme" },
    { id: "c4", title: "Enfant" },
  ];

  const storeCategories = [
    { id: "c1", title: "Tous" },
    { id: "c2", title: "StreetWear" },
    { id: "c3", title: "Sport" },
    { id: "c4", title: "Ville" },
  ];

  const startSearch = (
    searchQueryParams,
    categoryIdParams,
    categoryTitleParams
  ) => {
    const params = {
      searchQuery: searchQueryParams,
      categoryId: categoryIdParams,
      categoryTitle: categoryTitleParams,
    };

    if (switchValue === "Article") {
      props.navigation.navigate("SearchArticleResult", params);
    } else if (switchValue === "Shop") {
      props.navigation.navigate("SearchShopResult", params);
    }
  };

  const CategoryItem = (itemData) => {
    return (
      <SearchPlaceHolderItem
        style={{ marginTop: 5 }}
        selectItem={itemData.selectItem}
      >
        <Text numberOfLines={1} style={styles.itemText}>
          {itemData.categoryTitle}
        </Text>
      </SearchPlaceHolderItem>
    );
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <CustomSearchRounded
          placeholder={"Recherchez un " + switchValue.toLocaleLowerCase()}
          onChangeText={(text) => setSearchQuery(text)}
          onStartSearch={() => {
            startSearch(searchQuery, null, null);
          }}
        />
        <ItemSwitchSelector
          style={{ marginTop: 20 }}
          leftTitle="Article"
          rightTitle="Shop"
          selectedItem={switchValue}
          selectItem={(value) => {
            setSwitchValue(value);
          }}
        />
        {searchQuery.length > 0 && (
          <SearchPlaceHolderItem
            style={{ marginTop: 5 }}
            selectItem={() => {
              startSearch(searchQuery, null, null);
            }}
          >
            <Text numberOfLines={1} style={styles.itemText}>
              Rechercher "{searchQuery}" dans{" "}
              <Text style={{ color: "#E47747" }}>{switchValue}</Text>
            </Text>
          </SearchPlaceHolderItem>
        )}
        {searchQuery.length === 0 && (
          <FlatList
            style={{ height: "100%" }}
            data={
              switchValue === "Article" ? articlesCategories : storeCategories
            }
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
              <CategoryItem
                categoryTitle={itemData.item.title}
                categoryId={itemData.item.id}
                selectItem={() => {
                  startSearch(null, itemData.item.id, itemData.item.title);
                }}
              />
            )}
          />
        )}
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
    marginHorizontal: 10,
  },
  container: {
    marginTop: 20,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#727272",
  },
});

export default SearchScreen;
