import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Platform } from "react-native";

import { Ionicons } from "@expo/vector-icons";
// import { useDispatch } from "react-redux";

import FeedScreen, { screenOptions as feedScreenOptions } from "../screens/users/FeedScreen";
import SearchScreen, { screenOptions as searchScreenOptions } from "../screens/search/SearchScreen";
import MapScreen, { screenOptions as mapScreenOptions } from "../screens/map/MapScreen";
import FavoritesScreen, { screenOptions as favoritesScreenOptions } from "../screens/users/FavoritesScreen";
import UserProfileScreen, { screenOptions as userProfileScreenOptions } from "../screens/users/UserProfileScreen";
import ArticleDetailsScreen, { screenOptions as articleDetailsScreenOptions } from "../screens/articles/ArticleDetailsScreen";
import ShopDetailsScreen, { screenOptions as shopDetailsScreenOptions } from "../screens/shops/ShopDetailsScreen";

import Colors from "../constants/Colors";
// import * as authActions from "../store/actions/auth";

const defaultNavOptions = {
  headerStyle: {
    height: 100
  },
  headerTitleStyle: {
    // fontFamily: "open-sans",
    fontWeight: "500",
    fontSize: 20
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans"
  },
  headerTintColor: "black"
};

// Home Navigator
//
const FeedStackNavigator = createStackNavigator();

export const FeedNavigator = () => {
  return (
    <FeedStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <FeedStackNavigator.Screen name="Feed" component={FeedScreen} options={feedScreenOptions} />
      <FeedStackNavigator.Screen name="ArticleDetails" component={ArticleDetailsScreen} options={articleDetailsScreenOptions} />
      <FeedStackNavigator.Screen name="ShopDetails" component={ShopDetailsScreen} options={shopDetailsScreenOptions} />
    </FeedStackNavigator.Navigator>
  );
};

// Search Navigator
//
const SearchStackNavigator = createStackNavigator();

export const SearchNavigator = () => {
  return (
    <SearchStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <SearchStackNavigator.Screen name="Search" component={SearchScreen} options={searchScreenOptions} />
    </SearchStackNavigator.Navigator>
  );
};

// Map Navigator
//
const MapStackNavigator = createStackNavigator();

export const MapNavigator = () => {
  return (
    <MapStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <MapStackNavigator.Screen name="Map" component={MapScreen} options={mapScreenOptions} />
    </MapStackNavigator.Navigator>
  );
};

// Favorites Navigator
//
const FavoritesStackNavigator = createStackNavigator();

export const FavoritesNavigator = () => {
  return (
    <FavoritesStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <FavoritesStackNavigator.Screen name="Favorites" component={FavoritesScreen} options={favoritesScreenOptions} />
    </FavoritesStackNavigator.Navigator>
  );
};

// UserPofile Navigator
//
const UserPofileStackNavigator = createStackNavigator();

export const UserPofileNavigator = () => {
  return (
    <UserPofileStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <UserPofileStackNavigator.Screen name="UserProfile" component={UserProfileScreen} options={userProfileScreenOptions} />
    </UserPofileStackNavigator.Navigator>
  );
};

// General Bottom Tab Navigator
//
const GeneralBottomTabNavigator = createBottomTabNavigator();

export const GeneralNavigator = () => {
  return (
    <GeneralBottomTabNavigator.Navigator screenOptions={defaultNavOptions}>
      <GeneralBottomTabNavigator.Screen
        name="FeedTab"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="ios-home" size={23} color={color} />,
          tabBarLabel: "Accueil"
        }}
      />
      <GeneralBottomTabNavigator.Screen
        name="SearchTab"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="ios-search" size={23} color={color} />,
          tabBarLabel: "Chercher"
        }}
      />
      <GeneralBottomTabNavigator.Screen
        name="MapTab"
        component={MapNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="ios-map" size={23} color={color} />,
          tabBarLabel: "Map"
        }}
      />
      <GeneralBottomTabNavigator.Screen
        name="FavoritesTab"
        component={FavoritesNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="ios-heart" size={23} color={color} />,
          tabBarLabel: "Favoris"
        }}
      />
      <GeneralBottomTabNavigator.Screen
        name="UserProfileTab"
        component={UserPofileNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="ios-person-circle-outline" size={23} color={color} />,
          tabBarLabel: "Profil"
        }}
      />
    </GeneralBottomTabNavigator.Navigator>
  );
};
