import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, ImageBackground, ScrollView, Image, ActivityIndicator, Button, RefreshControl } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import CustomLoader from "../../components/UI/CustomLoader";
import * as shopsActions from "../../store/actions/shops";

const ShopDetailsScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const shopId = props.route.params.shopId;
  const shop = useSelector((state) => state.shops.selectedShop);
  const dispatch = useDispatch();

  const loadShop = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(shopsActions.fetchShopById(shopId));
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadShop().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadShop]);

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>Une erreur est survenue</Text>
        <Button title="Recharger" onPress={loadShop} color="grey" />
      </View>
    );
  }
  if (isLoading) {
    return <CustomLoader />;
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView} refreshControl={<RefreshControl onRefresh={loadShop} refreshing={isRefreshing} />}>
      <View style={styles.screen}>
        <View style={styles.imageContainer}>
          <ImageBackground
            resizeMethod={"auto"}
            source={{ uri: shop.coverUrl }}
            style={styles.image}
            imageStyle={{
              resizeMode: "cover",
              alignSelf: "flex-end"
            }}
          >
            <View style={styles.headerButtonContainer}>
              <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
                <Ionicons style={styles.backButton} name="ios-arrow-back-outline" size={40} color="white" />
              </TouchableWithoutFeedback>
              <Ionicons style={styles.backButton} name="ios-heart-outline" size={40} color="white" />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{shop.title}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 280,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  details: {
    padding: 10
  },
  title: {
    fontSize: 20
  },
  headerButtonContainer: {
    marginTop: 50,
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center"
  }
});

export default ShopDetailsScreen;
