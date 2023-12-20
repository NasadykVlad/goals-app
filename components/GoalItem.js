import React from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";

const GoalItem = ({itemData, onDeleteGoal}) => {
    return (
        <Pressable onPress={() => onDeleteGoal(itemData.item.id)}>
            <View style={goalItem} onPress={() => onDeleteGoal(itemData.item.id)}>
                <Text style={goalItemText}>{itemData.item.text}</Text>
            </View>
        </Pressable>
    );
};

const {
    goalItem,
    goalItemText
} = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#5e0acc',
    },
    goalItemText: {
        color: 'white'
    }
})

export default GoalItem;
