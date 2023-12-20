import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import {StatusBar} from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([
        {
            text: 'Buy milk and bread',
            id: Math.random().toString()
        }, {
            text: 'Learn React Native',
            id: Math.random().toString()
        }
    ])
    const [modalIsVisible, setModalIsVisible] = useState(false)

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
        setModalHandler()
    }

    const setModalHandler = () => {
        setModalIsVisible(prevState => !prevState)
    }

    return (
        <>
            <StatusBar style='light' />
            <View style={appContainer}>
                <Pressable android_ripple={{color: '#370973'}} style={newGoalButton} onPress={setModalHandler}>
                    <View>
                        <Text style={newGoalButtonText}>Add New Goal</Text>
                    </View>
                </Pressable>
                <GoalInput onAddGoal={addGoalHandler}
                           setVisible={setModalHandler}
                           visible={modalIsVisible}/>
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
        </>
    );
}

const {
    appContainer,
    goalsContainer,
    newGoalButton,
    newGoalButtonText
} = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 5
    },
    newGoalButton: {
        marginBottom: 16,
        padding: 10,
        backgroundColor: '#1b44e5',
        justifyContent: 'center',
        color: 'white',
        alignItems: 'center',
        borderRadius: 4,
    },
    newGoalButtonText: {
        color: 'white'
    }
})
