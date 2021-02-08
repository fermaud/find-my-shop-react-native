import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ArticleThumb from "./ArticleThumb";

const ArticleGrid = (props) => {
  return (
    <FlatList
      numColumns={props.numColumns}
      horizontal={props.horizontal}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={props.articles}
      renderItem={(itemData) => (
        <ArticleThumb
          articleStyle={props.articleStyle}
          title={itemData.item.title}
          imageUrl={itemData.item.imageUrl}
          price={itemData.item.price}
          shopName={itemData.item.shopName}
          onSelect={() => {
            props.selectItem(itemData.item.id);
          }}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({});

export default ArticleGrid;
