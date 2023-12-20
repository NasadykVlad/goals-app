import {Button, FlatList, StyleSheet, TextInput, View} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('')
    const [courseGoals, setCourseGoals] = useState([
        {
            text: 'Buy milk and bread',
            id: Math.random().toString()
        }, {
            text: 'Buy milk and bread',
            id: Math.random().toString()
        }, {
            text: 'Buy milk and bread',
            id: Math.random().toString()
        }, {
            text: 'Buy milk and bread',
            id: Math.random().toString()
        }, {
            text: 'Buy milk and bread',
            id: Math.random().toString()
        }, {
            text: 'Buy milk and bread',
            id: Math.random().toString()
        }, {
            text: 'Buy milk and bread',
            id: Math.random().toString()
        }, {
            text: 'Buy milk and bread',
            id: Math.random().toString()
        }, {
            text: 'Buy milk and bread',
            id: Math.random().toString()
        }, {
            text: 'Buy milk and bread',
            id: Math.random().toString()
        }, {
            text: 'Buy milk and bread',
            id: Math.random().toString()
        }, {
            text: 'Buy milk and bread',
            id: Math.random().toString()
        }, {
            text: 'Buy milk and bread',
            id: Math.random().toString()
        }, {
            text: 'Buy milk and bread',
            id: Math.random().toString()
        }, {
            text: 'Buy milk and bread',
            id: Math.random().toString()
        }, {
            text: 'Learn React Native',
            id: Math.random().toString()
        }
    ])

    function addGoalHandler() {
        setCourseGoals(prevState => [
            ...prevState,
            {
                text: enteredGoal,
                id: Math.random().toString()
            }
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
                <FlatList data={courseGoals}
                          renderItem={itemData =>
                              <GoalItem itemData={itemData}/>
                          }
                          alwaysBounceVertical={false}
                          keyExtractor={(item) => item.id}
                />
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
        },
    })
;
