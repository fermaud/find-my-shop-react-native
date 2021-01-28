import React from 'react';
import { View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';

const FavoriteScreen = (props) => {
    const favMeals = useSelector((state) => state.meals.favoriteMeals);
    if (favMeals.length === 0 || !favMeals) {
        return (
            <View>
                <Text>No favorite meals found</Text>
            </View>
        );
    } else {
        return <MealList listData={favMeals} navigation={props.navigation} />;
    }
};

FavoriteScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Favorites',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
    };
};

export default FavoriteScreen;
