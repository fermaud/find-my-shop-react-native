import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';

import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Platform from 'react-native';

import FeedScreen from '../screens/FeedScreen';
import SearchScreen from '../screens/SearchScreen';
import MapScreen from '../screens/MapScreen';

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

const FeedStackNavigator = createStackNavigator(
    {
        Feeds: FeedScreen,
    },
    {
        defaultNavigationOptions: defaultStackNavOptions,
    }
);

const SearchStackNavigator = createStackNavigator(
    {
        Search: SearchScreen,
    },
    {
        defaultNavigationOptions: defaultStackNavOptions,
    }
);

const MapStackNavigator = createStackNavigator(
    {
        Map: MapScreen,
    },
    {
        defaultNavigationOptions: defaultStackNavOptions,
    }
);

const tabsScreenConfig = {
    Feeds: {
        screen: FeedStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Accueil',
            tabBarIcon: (tabInfos) => {
                return (
                    <Ionicons
                        name="ios-home"
                        size={25}
                        color={tabInfos.tintColor}
                    />
                );
            },
        },
    },
    Search: {
        screen: SearchStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Chercher',
            tabBarIcon: (tabInfos) => {
                return (
                    <Ionicons
                        name="ios-search"
                        size={25}
                        color={tabInfos.tintColor}
                    />
                );
            },
            tabBarColor: Colors.primaryColor,
            // tabBarLabel: <Text>dzedez</Text>,
        },
    },
    Map: {
        screen: MapStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Map',
            tabBarIcon: (tabInfos) => {
                return (
                    <Ionicons
                        name="ios-map"
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

const ConnectedUserTabNavigator =
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

// const FiltersNavigator = createStackNavigator(
//     {
//         Filters: FiltersScreen,
//     },
//     {
//         // navigationOptions: {
//         //     drawerLabel: 'Filters !!',
//         // },
//         defaultNavigationOptions: defaultStackNavOptions,
//     }
// );

// const MainNavigator = createDrawerNavigator(
//     {
//         MealsFavs: {
//             screen: MealsFavTabNavigator,
//             navigationOptions: { drawerLabel: 'Meals' },
//         },
//         Filters: FiltersNavigator,
//     },
//     {
//         contentOptions: {
//             activeTintColor: Colors.accentColor,
//             labelStyle: {
//                 fontFamily: 'roboto',
//             },
//         },
//     }
// );

export default createAppContainer(ConnectedUserTabNavigator);
