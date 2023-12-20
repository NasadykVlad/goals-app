import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('')
    const [courseGoals, setCourseGoals] = useState([])

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
                {
                    courseGoals.map((goal, index) =>
                        <Text key={index}>{goal}</Text>
                    )
                }
            </View>
        </View>
    );
}

const {
    appContainer,
    inputContainer,
    textInput,
    goalsContainer
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
    }
});
