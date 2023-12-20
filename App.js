import {Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('')
    const [courseGoals, setCourseGoals] = useState([
        'Buy milk and bread',
        'Buy milk and bread',
        'Buy milk and bread',
        'Buy milk and bread',
        'Buy milk and bread',
        'Buy milk and bread',
        'Buy milk and bread',
        'Buy milk and bread',
        'Buy milk and bread',
        'Buy milk and bread',
        'Buy milk and bread',
        'Buy milk and bread',
        'Buy milk and bread',
        'Buy milk and bread',
        'Buy milk and bread',
        'Buy milk and bread',
        'Buy milk and bread',
        'Buy milk and bread',
        'Buy milk and bread',
        'Buy milk and bread',
        'Buy milk and bread',
        'Buy milk and bread',
        'Buy milk and bread',
        'Learn React Native'
    ])

    function addGoalHandler() {
        setCourseGoals(prevState => [
            ...prevState,
            enteredGoal
        ]);
        setEnteredGoal('')
    }

    return (
        <View style={appContainer}>
            <View style={inputContainer}>
                <TextInput style={textInput}
                           value={enteredGoal}
                           onChangeText={setEnteredGoal}
                           placeholder='Your course goal!'/>
                <Button title='Add Goal' onPress={addGoalHandler}/>
            </View>
            <View style={goalsContainer}>
                <ScrollView alwaysBounceVertical={false}>
                    {
                        courseGoals.map((goal, index) =>
                            <View key={index} style={goalItem}>
                                <Text style={goalItemText}>{goal}</Text>
                            </View>
                        )
                    }
                </ScrollView>
            </View>
        </View>
    );
}

const {
        appContainer,
        inputContainer,
        textInput,
        goalsContainer,
        goalItem,
        goalItemText
    } = StyleSheet.create({
        appContainer: {
            flex: 1,
            padding: 50,
            paddingHorizontal: 16
        },
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
        },
        goalsContainer: {
            flex: 5
        },
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
;
