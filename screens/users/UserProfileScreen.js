import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserProfileScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>User Profile Screen</Text>
    </View>
  );
};

export const screenOptions = {
  headerTitle: "Profil",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserProfileScreen;
