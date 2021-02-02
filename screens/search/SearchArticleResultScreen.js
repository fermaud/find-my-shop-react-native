import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Text } from "react-native";

import CustomSearchRounded from "../../components/UI/CustomSearchRounded";
import { Ionicons } from "@expo/vector-icons";
// import { forHorizontalIOS } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators";

// import SearchPlaceHolderItem from "../../components/UI/SearchPlaceHolderItem";

const SearchArticleResultScreen = (props) => {
  const [switchValue, setSwitchValue] = useState("Article");
  const [searchQuery, setSearchQuery] = useState(props.route.params.searchQuery);

  const categoryId = props.route.params.categoryId;
  const categoryTitle = props.route.params.categoryTitle;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={{ width: 30, marginRight: 10 }}>
          <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={30} color="grey" />
          </TouchableWithoutFeedback>
        </View>
        <View style={{ flex: 1 }}>
          <CustomSearchRounded
            placeholder={categoryId ? 'Recherchez dans "' + categoryTitle + '"' : "Recherchez un " + switchValue.toLocaleLowerCase()}
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
        <Text>Filters</Text>
      </View>
    </SafeAreaView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 20
  },
  itemText: {
    fontSize: 16,
    color: "#727272"
  }
});

export default SearchArticleResultScreen;
