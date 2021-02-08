import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ErrorOccured = (props) => {
  return (
    <View style={styles.centered}>
      <Text>Une erreur est survenue</Text>
      <Button title="Recharger" onPress={props.onPress} color="grey" />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ErrorOccured;
