import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ShopThumb from "./ShopThumb";

const ShopHorizontalGrid = (props) => {
  return (
    <FlatList
      numColumns={props.numColumns}
      horizontal={props.horizontal}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={props.shops}
      renderItem={(itemData) => (
        <ShopThumb
          shopStyle={props.shopStyle}
          title={itemData.item.title}
          coverUrl={itemData.item.coverUrl}
          logoUrl={itemData.item.logoUrl}
          locality={itemData.item.locality}
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

export default ShopHorizontalGrid;
