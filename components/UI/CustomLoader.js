import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

const CustomLoader = (props) => {
  return (
    <View style={styles.centered}>
      <ActivityIndicator size="large" color="grey" />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: "center", alignItems: "center" }
});

export default CustomLoader;
