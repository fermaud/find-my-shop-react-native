import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

import DefaultText from '../components/DefaultText';

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground
                            source={{ uri: props.image }}
                            style={styles.bgImage}
                        >
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>
                                    {props.title}
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
                        <DefaultText>{props.duration}m</DefaultText>
                        <DefaultText>
                            {props.complexity.toUpperCase()}
                        </DefaultText>
                        <DefaultText>
                            {props.affordability.toUpperCase()}
                        </DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
    },
    mealRow: {
        flexDirection: 'row',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    mealHeader: {
        height: '85%',
    },
    mealDetails: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    title: {
        fontFamily: 'roboto-bold',
        fontSize: 22,
        color: 'white',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center',
    },
});

export default MealItem;
