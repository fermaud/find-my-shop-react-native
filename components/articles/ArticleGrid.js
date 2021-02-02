import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ArticleThumb from "./ArticleThumb";

const ArticleGrid = (props) => {
  return (
    <FlatList
      // numColumns={2}
      pagingEnabled={true}
      horizontal={props.horizontal}
      showsHorizontalScrollIndicator={false}
      data={props.articles}
      renderItem={(itemData) => (
        <ArticleThumb
          thumbStyle={props.thumbStyle}
          title={itemData.item.title}
          imageUrl={itemData.item.imageUrl}
          price={itemData.item.price}
          shopName={itemData.item.shopName}
          onSelect={() => {
            props.selectItem(itemData.item.id, itemData.item.title, itemData.item.imageUrl);
          }}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({});

export default ArticleGrid;
