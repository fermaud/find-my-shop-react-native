import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

import ItemSwitchSelector from "../../components/UI/ItemSwitchSelector";

const FavoritesScreen = (props) => {
  const [switchValue, setSwitchValue] = useState("Article");

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <ItemSwitchSelector
          leftTitle="Article"
          rightTitle="Shop"
          selectedItem={switchValue}
          selectItem={(value) => {
            setSwitchValue(value);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Mes favoris"
  };
};

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 10
  },
  container: {
    marginTop: 15
  }
});

export default FavoritesScreen;
