import {Button, FlatList, StyleSheet, View} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

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
        <View style={appContainer}>
            <View style={addNewGoalButton}>
                <Button title='Add New Goal'
                        color='#5e0acc'
                        onPress={setModalHandler}/>
            </View>
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
    );
}

const {
    appContainer,
    goalsContainer,
    addNewGoalButton
} = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 5
    },
    addNewGoalButton: {
        marginBottom: 16
    }
})
