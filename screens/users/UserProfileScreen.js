import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ErrorOccured from "../../components/UI/ErrorOccured";
import CustomLoader from "../../components/UI/CustomLoader";
import Colors from "../../constants/Colors";
import * as usersActions from "../../store/actions/users";

const UserProfileScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();

  //////////////////////
  //  STATE MANAGING  //
  //////////////////////
  const connectedUser = useSelector((state) => state.users.connectedUser);
  const dispatch = useDispatch();

  // Fonction pour récuperer les infos de l'user
  const loadConnectedUser = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(usersActions.fetchConnectedUser());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  // Actualise si le state change
  useEffect(() => {
    setIsLoading(true);
    loadConnectedUser().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadConnectedUser]);
  //////////////////////
  //  STATE MANAGING  //
  //////////////////////

  if (error) {
    console.log(error);
    return <ErrorOccured onPress={loadConnectedUser} />;
  }
  if (isLoading) {
    return <CustomLoader />;
  }
  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <View style={styles.titleLogo}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 3 }}>
            <Text style={styles.title}>Mon profil</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => props.navigation.navigate("UserParameters")}>
              <Ionicons style={styles.settingsButton} name="settings-outline" size={33} color="white" />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "column" }}>
        <Image style={styles.profilePicture} source={{ uri: connectedUser.imageUrl }} />
        <View style={{ backgroundColor: Colors.primary, height: 100 }}></View>
        <View style={{ height: 100 }}></View>
      </View>
      <Text numberOfLines={1} style={styles.userName}>
        {connectedUser.firstName} {connectedUser.lastName}
      </Text>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  headerContainer: {
    paddingTop: 50,
    backgroundColor: Colors.primary,
    height: 120
  },
  titleLogo: {
    flex: 1,
    flexDirection: "row"
  },
  title: {
    color: "white",
    fontWeight: "600",
    fontSize: 30,
    textAlign: "center"
  },
  settingsButton: {
    alignSelf: "center"
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
      height: 0
    },
    shadowOpacity: 0.6,
    shadowColor: "grey",
    zIndex: 2,
    marginTop: 12.5,
    borderRadius: 100
  },
  userName: {
    alignSelf: "center",
    textAlign: "center",
    width: "85%",
    fontSize: 30,
    fontWeight: "500"
  }
});

export default UserProfileScreen;
