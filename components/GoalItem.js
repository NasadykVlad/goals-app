import React from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";

const GoalItem = ({itemData, onDeleteGoal}) => {
    return (
        <View style={goalItem} onPress={() => onDeleteGoal(itemData.item.id)}>
            <Pressable android_ripple={{color: '#210644'}}
                       onPress={() => onDeleteGoal(itemData.item.id)}
                       style={({pressed}) => pressed && pressedItem}>
                <Text style={goalItemText}>{itemData.item.text}</Text>
            </Pressable>
        </View>
    );
};

const {
    goalItem,
    goalItemText,
    pressedItem
} = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 8,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        opacity: 0.5
    },
    goalItemText: {
        padding: 8,
        color: 'white'
    }
})

export default GoalItem;
