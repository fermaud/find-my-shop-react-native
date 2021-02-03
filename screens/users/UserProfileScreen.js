import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const UserProfileScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <View style={styles.titleLogo}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 3 }}>
            <Text style={styles.title}>Mon profil</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              onPress={() => props.navigation.navigate("UserParameters")}
            >
              <Ionicons
                style={styles.settingsButton}
                name="settings-outline"
                size={33}
                color="white"
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "column" }}>
        <Image
          style={styles.profilePicture}
          source={require("../../assets/images/profile.jpg")}
        />
        <View style={{ backgroundColor: Colors.primary, height: 100 }}></View>
        <View style={{ height: 100 }}></View>
      </View>
      <Text style={styles.userName}>Robin Fermaud</Text>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: 50,
    backgroundColor: Colors.primary,
    height: 120,
  },
  titleLogo: {
    flex: 1,
    flexDirection: "row",
  },
  title: {
    color: "white",
    fontWeight: "600",
    fontSize: 30,
    textAlign: "center",
  },
  settingsButton: {
    alignSelf: "center",
  },
  profilePicture: {
    height: 175,
    width: 175,
    backgroundColor: "grey",
    borderColor: "white",
    borderWidth: 4,
    alignSelf: "center",
    position: "absolute",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowColor: "grey",
    zIndex: 2,
    marginTop: 12.5,
    borderRadius: 100,
  },
  userName: {
    textAlign: "center",
    fontSize: 34,
    fontWeight: "500",
  },
});

export default UserProfileScreen;
