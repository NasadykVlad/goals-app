import React, {useState} from 'react';
import {Image, Modal, Pressable, StyleSheet, Text, TextInput, View} from "react-native";

const GoalInput = ({onAddGoal, visible, setVisible}) => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const addGoalHandler = () => {
        if (enteredGoal.length > 2) {
            onAddGoal(enteredGoal);
            setEnteredGoal('')

        }
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={inputContainer}>
                <Image source={require('../assets/images/goal.png')} />
                <TextInput style={textInput}
                           value={enteredGoal}
                           onChangeText={setEnteredGoal}
                           placeholder='Your course goal!'/>
                <View style={buttonContainer}>
                    <Pressable style={blueButton}
                               android_ripple={{color: '#370973'}}
                               onPress={addGoalHandler}>
                        <View>
                            <Text style={textButton}>Add Goal</Text>
                        </View>
                    </Pressable>
                    <Pressable style={redButton}
                               android_ripple={{color: '#9a1348'}}
                               onPress={setVisible}>
                        <View>
                            <Text style={textButton}>Cancel</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
        ;
};

const {
    inputContainer,
    textInput,
    buttonContainer,
    blueButton,
    textButton,
    redButton
} = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        marginBottom: 16,
        padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    blueButton: {
        width: '30%',
        padding: 10,
        backgroundColor: '#1b44e5',
        justifyContent: 'center',
        color: 'white',
        alignItems: 'center',
        borderRadius: 4,
        marginHorizontal: 8
    },
    redButton: {
        width: '30%',
        padding: 10,
        backgroundColor: '#f11010',
        justifyContent: 'center',
        color: 'white',
        alignItems: 'center',
        borderRadius: 4,
        marginHorizontal: 8
    },
    textButton: {
        color: 'white'
    }
})

export default GoalInput;
