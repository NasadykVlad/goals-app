import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";

const GoalInput = ({onAddGoal}) => {

    const [enteredGoal, setEnteredGoal] = useState('')

    const addGoalHandler = () => {
        if (enteredGoal.length > 2) {
            onAddGoal(enteredGoal);
            setEnteredGoal('')
        }
    }

    return (
        <View style={inputContainer}>
            <TextInput style={textInput}
                       value={enteredGoal}
                       onChangeText={setEnteredGoal}
                       placeholder='Your course goal!'/>
            <Button title='Add Goal' onPress={addGoalHandler}/>
        </View>
    );
};

const {
    inputContainer,
    textInput,
} = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    }
})

export default GoalInput;
