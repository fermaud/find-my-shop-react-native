import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import ArticleGrid from "../../components/articles/ArticleGrid";
import CustomSearchRounded from "../../components/UI/CustomSearchRounded";
import FiltersList from "../../components/UI/FiltersList";
import ErrorOccured from "../../components/UI/ErrorOccured";
import CustomLoader from "../../components/UI/CustomLoader";
import * as articlesActions from "../../store/actions/articles";

const SearchArticleResultScreen = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const [searchQuery, setSearchQuery] = useState(props.route.params.searchQuery);

  const categoryId = props.route.params.categoryId;
  const categoryTitle = props.route.params.categoryTitle;
  const filterList = [
    { id: "f1", title: "Filter", isSelected: false },
    { id: "f2", title: "Taille", isSelected: true },
    { id: "f3", title: "Dispos", isSelected: false },
    { id: "f4", title: "Marque", isSelected: false },
    { id: "f5", title: "Shop", isSelected: false }
  ];

  //////////////////////
  //  STATE MANAGING  //
  //////////////////////
  const articles = useSelector((state) => state.articles.foundedArticles);
  const dispatch = useDispatch();

  const searchArticles = useCallback(
    async (filter) => {
      setError(null);
      setIsRefreshing(true);
      try {
        await dispatch(articlesActions.fetchArticlesByQuery("&filter=" + filter));
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
      setIsRefreshing(false);
    },
    [dispatch, setIsLoading, setError]
  );

  useEffect(() => {
    setIsLoading(true);
    searchArticles(searchQuery).then(() => {
      setIsLoading(false);
    });
  }, [dispatch, searchArticles]);
  //////////////////////
  //  STATE MANAGING  //
  //////////////////////

  const selectArticleHandler = (id) => {
    props.navigation.navigate("ArticleDetails", {
      articleId: id
    });
  };
  if (error) {
    console.log(error);
    return <ErrorOccured onPress={searchArticles(searchQuery)} />;
  }
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
            placeholder={categoryId ? 'Recherchez dans "' + categoryTitle + '"' : "Recherchez un article"}
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            onStartSearch={() => searchArticles(searchQuery)}
          />
        </View>
        <View style={{ width: 30, marginLeft: 10 }}>
          <TouchableWithoutFeedback onPress={() => console.log("save search")}>
            <Ionicons name="bookmark-outline" size={30} color="grey" />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View>
        <FiltersList
          selectedFilterId="f1"
          data={filterList}
          onSelect={(filterId) => {
            console.log("Filter selected: " + filterId);
          }}
        />
      </View>
      {isLoading || isRefreshing ? (
        <CustomLoader />
      ) : (
        <View style={{ flex: 1 }}>
          <Text style={styles.resultsNbr}>{articles.length} résultats</Text>
          <ArticleGrid
            numColumns={2}
            articleStyle={styles.articleThumbStyle}
            articles={articles}
            selectItem={(id) => {
              selectArticleHandler(id);
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: 10
  },
  searchContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20
  },
  itemText: {
    fontSize: 16,
    color: "#727272"
  },
  articleThumbStyle: {
    flex: 1 / 2,
    height: 350,
    marginBottom: 10
  },
  resultsNbr: {
    marginTop: 20,
    marginBottom: 7,
    color: "#727272",
    fontSize: 15,
    fontWeight: "500"
  }
});

export default SearchArticleResultScreen;
