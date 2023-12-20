import {FlatList, StyleSheet, View} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
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

    const deleteGoal = (id) => {
        setCourseGoals(prevState => prevState.filter(goal => goal.id !== id))
    }

    function addGoalHandler(text) {
        setCourseGoals(prevState => [
            ...prevState,
            {
                text,
                id: Math.random().toString()
            }
        ]);
    }

    return (
        <View style={appContainer}>
            <GoalInput onAddGoal={addGoalHandler}/>
            <View style={goalsContainer}>
                <FlatList data={courseGoals}
                          renderItem={itemData =>
                              <GoalItem itemData={itemData} onDeleteGoal={deleteGoal}/>
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
        goalsContainer
    } = StyleSheet.create({
        appContainer: {
            flex: 1,
            padding: 50,
            paddingHorizontal: 16
        },
        goalsContainer: {
            flex: 5
        },
    })
