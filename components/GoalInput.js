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
                <Image style={image} source={require('../assets/images/goal.png')} />
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
    redButton,
    image
} = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e6d8fa',
        backgroundColor: '#e6d8fa',
        color: '#120438',
        width: '100%',
        borderRadius: 6,
        marginBottom: 16,
        padding: 16
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
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})

export default GoalInput;
