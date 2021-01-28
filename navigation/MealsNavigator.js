import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Platform from 'react-native';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/Colors';

const defaultStackNavOptions = {
    // mode: 'modal', Transition
    // initialRouteName: 'Categories',
    headerStyle: {
        backgroundColor:
            Platform.OS === 'android' ? Colors.primaryColor : 'white',
    },
    headerTitleStyle: {
        fontFamily: 'roboto',
    },
    // Style du font du botton back
    headerBackTitleStyle: {
        fontFamily: 'roboto-thin',
    },

    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    // headerTitle: 'A Screen',
};

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
            // navigationOptions: {
            //     headerTitle: 'Meal Categories',
            // },
        },
        CategoryMeals: {
            screen: CategoryMealsScreen,
        },
        MealDetails: {
            screen: MealDetailsScreen,
        },
    },
    {
        defaultNavigationOptions: defaultStackNavOptions,
    }
);

const FavoriteStackNavigator = createStackNavigator(
    {
        Favorite: FavoritesScreen,
        MealDetails: MealDetailsScreen,
    },
    {
        defaultNavigationOptions: defaultStackNavOptions,
    }
);

const tabsScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: 'Meals Nav',
            tabBarIcon: (tabInfos) => {
                return (
                    <Ionicons
                        name="ios-restaurant"
                        size={25}
                        color={tabInfos.tintColor}
                    />
                );
            },
        },
    },
    FavoritesScreen: {
        screen: FavoriteStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorite !',
            tabBarIcon: (tabInfos) => {
                return (
                    <Ionicons
                        name="ios-star"
                        size={25}
                        color={tabInfos.tintColor}
                    />
                );
            },
            tabBarColor: Colors.primaryColor,
            // tabBarLabel: <Text>dzedez</Text>,
        },
    },
};

const MealsFavTabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(tabsScreenConfig, {
              activeColor: Colors.accentColor,
              shifting: true,
          })
        : createBottomTabNavigator(tabsScreenConfig, {
              labelStyle: {
                  fontFamily: 'roboto',
              },
              tabBarOptions: {
                  activeTintColor: Colors.accentColor,
              },
          });

const FiltersNavigator = createStackNavigator(
    {
        Filters: FiltersScreen,
    },
    {
        // navigationOptions: {
        //     drawerLabel: 'Filters !!',
        // },
        defaultNavigationOptions: defaultStackNavOptions,
    }
);

const MainNavigator = createDrawerNavigator(
    {
        MealsFavs: {
            screen: MealsFavTabNavigator,
            navigationOptions: { drawerLabel: 'Meals' },
        },
        Filters: FiltersNavigator,
    },
    {
        contentOptions: {
            activeTintColor: Colors.accentColor,
            labelStyle: {
                fontFamily: 'roboto',
            },
        },
    }
);

export default createAppContainer(MainNavigator);
