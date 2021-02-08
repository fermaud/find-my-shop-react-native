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
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

import SearchPlaceHolderItem from "../../components/UI/SearchPlaceHolderItem";
import * as usersActions from "../../store/actions/users";

const EditProfileScreen = (props) => {
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

  // const updateConnectedUserProfile = (userData) => {
  //   try {
  //     console.log(userData);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      await dispatch(
        usersActions.updateConnectedUserProfile({ uri: result.uri })
      );
    }
  };

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
            <Text style={styles.title}>Modifier mon profil</Text>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
      </View>
      <ScrollView style={{ paddingHorizontal: 10, flex: 1 }}>
        <SearchPlaceHolderItem selectItem={pickImage}>
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
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}>Change ma photo de profil</Text>
            </View>
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

export default EditProfileScreen;
