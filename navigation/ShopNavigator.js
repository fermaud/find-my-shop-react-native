import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Platform } from "react-native";

import { Ionicons } from "@expo/vector-icons";
// import { useDispatch } from "react-redux";

import FeedScreen, {
  screenOptions as feedScreenOptions,
} from "../screens/users/FeedScreen";

import SearchScreen, {
  screenOptions as searchScreenOptions,
} from "../screens/search/SearchScreen";

import MapScreen, {
  screenOptions as mapScreenOptions,
} from "../screens/map/MapScreen";

import FavoritesScreen, {
  screenOptions as favoritesScreenOptions,
} from "../screens/users/FavoritesScreen";

import UserProfileScreen, {
  screenOptions as userProfileScreenOptions,
} from "../screens/users/UserProfileScreen";

import Colors from "../constants/Colors";
// import * as authActions from "../store/actions/auth";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

// Home Navigator
//
const FeedStackNavigator = createStackNavigator();

export const FeedNavigator = () => {
  return (
    <FeedStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <FeedStackNavigator.Screen
        name="Accueil"
        component={FeedScreen}
        options={feedScreenOptions}
      />
    </FeedStackNavigator.Navigator>
  );
};

// Search Navigator
//
const SearchStackNavigator = createStackNavigator();

export const SearchNavigator = () => {
  return (
    <SearchStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <SearchStackNavigator.Screen name="Chercher" component={SearchScreen} />
    </SearchStackNavigator.Navigator>
  );
};

// Map Navigator
//
const MapStackNavigator = createStackNavigator();

export const MapNavigator = () => {
  return (
    <MapStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <MapStackNavigator.Screen name="Map" component={MapScreen} />
    </MapStackNavigator.Navigator>
  );
};

// Favorites Navigator
//
const FavoritesStackNavigator = createStackNavigator();

export const FavoritesNavigator = () => {
  return (
    <FavoritesStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <FavoritesStackNavigator.Screen
        name="Favoris"
        component={FavoritesScreen}
      />
    </FavoritesStackNavigator.Navigator>
  );
};

// UserPofile Navigator
//
const UserPofileStackNavigator = createStackNavigator();

export const UserPofileNavigator = () => {
  return (
    <UserPofileStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <UserPofileStackNavigator.Screen
        name="Profil"
        component={UserProfileScreen}
      />
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
        name="Accueil"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" size={23} color={color} />
          ),
        }}
      />
      <GeneralBottomTabNavigator.Screen
        name="Chercher"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-search" size={23} color={color} />
          ),
        }}
      />
      <GeneralBottomTabNavigator.Screen
        name="Map"
        component={MapNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-map" size={23} color={color} />
          ),
        }}
      />
      <GeneralBottomTabNavigator.Screen
        name="Favoris"
        component={FavoritesNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-heart" size={23} color={color} />
          ),
        }}
      />
      <GeneralBottomTabNavigator.Screen
        name="Profil"
        component={UserPofileNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="ios-person-circle-outline"
              size={23}
              color={color}
            />
          ),
        }}
      />
    </GeneralBottomTabNavigator.Navigator>
  );
};
