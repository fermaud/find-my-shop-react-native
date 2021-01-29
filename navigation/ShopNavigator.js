import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { Platform, SafeAreaView, Button, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

// import ProductsOverviewScreen, {
//   screenOptions as productsOverviewScreenOptions
// } from '../screens/shop/ProductsOverviewScreen';
// import ProductDetailScreen, {
//   screenOptions as productDetailScreenOptions
// } from '../screens/shop/ProductDetailScreen';
// import CartScreen, {
//   screenOptions as cartScreenOptions
// } from '../screens/shop/CartScreen';
// import OrdersScreen, {
//   screenOptions as ordersScreenOptions
// } from '../screens/shop/OrdersScreen';
// import UserProductsScreen, {
//   screenOptions as userProductsScreenOptions
// } from '../screens/user/UserProductsScreen';
// import EditProductScreen, {
//   screenOptions as editProductScreenOptions
// } from '../screens/user/EditProductScreen';
// import AuthScreen, {
//   screenOptions as authScreenOptions
// } from '../screens/user/AuthScreen';
import HomeScreen from "../screens/HomeScreen";

import Colors from "../constants/Colors";
// import * as authActions from "../store/actions/auth";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : ""
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold"
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans"
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
};

const ShopStackNavigator = createStackNavigator();

export const ShopNavigator = () => {
  return (
    <ShopStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <ShopStackNavigator.Screen
        name="ProductsOverview"
        component={HomeScreen}
        // options={productsOverviewScreenOptions}
      />
    </ShopStackNavigator.Navigator>
  );
};
