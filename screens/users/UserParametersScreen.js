import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import * as authActions from "../../store/actions/auth";
import SearchPlaceHolderItem from "../../components/UI/SearchPlaceHolderItem";

const UserParametersScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const connectedUser = useSelector((state) => state.users.connectedUser);

  const dispatch = useDispatch();

  // Fonction pour récuperer les infos de l'user
  const loadConnectedUser = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(usersActions.loadConnectedUser());
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

  async function logOut() {
    try {
      await dispatch(authActions.logOut());
    } catch (err) {
      console.log("Logout error: " + err.message);
    }
  }
  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <View style={styles.titleLogo}>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
              <Ionicons
                style={styles.settingsButton}
                name="ios-arrow-back-outline"
                size={35}
                color="black"
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={{ flex: 4 }}>
            <Text style={styles.title}>Paramètres</Text>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
      </View>
      <ScrollView style={{ paddingHorizontal: 10, flex: 1 }}>
        <SearchPlaceHolderItem
          selectItem={() => {
            props.navigation.navigate("EditProfile");
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.profilePicture}
              source={{ uri: connectedUser.imageUrl }}
            />
            <View
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                {connectedUser.firstName} {connectedUser.lastName}
              </Text>
              <Text style={{ fontSize: 15, color: "#727272" }}>
                Modifier mon profil
              </Text>
            </View>
          </View>
        </SearchPlaceHolderItem>
        <SearchPlaceHolderItem style={{ marginTop: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              style={styles.settingsButton}
              name="notifications-outline"
              size={30}
              color="black"
            />
            <Text style={{ fontSize: 17, paddingLeft: 10 }}>Notifications</Text>
          </View>
        </SearchPlaceHolderItem>
        <SearchPlaceHolderItem
          style={{ marginTop: 5 }}
          selectItem={() => {
            logOut();
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              style={styles.settingsButton}
              name="log-out-outline"
              size={30}
              color="red"
            />
            <Text style={{ fontSize: 17, paddingLeft: 10, color: "red" }}>
              Déconnexion
            </Text>
          </View>
        </SearchPlaceHolderItem>
      </ScrollView>
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
    height: 100,
  },
  titleLogo: {
    flex: 1,
    flexDirection: "row",
  },
  title: {
    fontWeight: "600",
    fontSize: 25,
    paddingTop: 3,
    textAlign: "center",
  },
  settingsButton: {
    alignSelf: "center",
  },
  profilePicture: {
    backgroundColor: "blue",
    width: 50,
    height: 50,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowColor: "grey",
  },
});

export default UserParametersScreen;
