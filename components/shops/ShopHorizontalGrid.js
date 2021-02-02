import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ShopThumb from "./ShopThumb";

const ShopHorizontalGrid = (props) => {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={props.shops}
      renderItem={(itemData) => (
        <ShopThumb
          title={itemData.item.title}
          imageUrl={itemData.item.imageUrl}
          city={itemData.item.city}
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

export default ShopHorizontalGrid;
