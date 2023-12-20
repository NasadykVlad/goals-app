import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const GoalItem = ({itemData}) => {
    return (
        <View style={goalItem}>
            <Text style={goalItemText}>{itemData.item.text}</Text>
        </View>
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
