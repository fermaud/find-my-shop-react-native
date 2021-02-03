import React from "react";
import { StyleSheet, FlatList } from "react-native";

import FilterItem from "./FilterItem";

const FiltersList = (props) => {
  return (
    <FlatList
      style={{ marginTop: 15 }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={props.data}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <FilterItem
          isSelected={itemData.item.id === props.selectedFilterId}
          title={itemData.item.title}
          selectItem={() => {
            props.onSelect(itemData.item.id);
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "500",
    fontSize: 25
  }
});

export default FiltersList;
