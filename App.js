import { useState } from "react";
import { StyleSheet, View, FlatList, Button, StatusBar } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalVisible] = useState(false);

  function startAddGoal() {
    setModalVisible(true);
  }
  function cancelAddGoal() {
    setModalVisible(false);
  }
  function addGoalHandler(enteredText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), text: enteredText },
    ]);
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#262525"
          style={styles.button}
          onPress={startAddGoal}
        />
        {modalIsVisible && (
          <GoalInput
            onAddGoal={addGoalHandler}
            cancelAddGoal={cancelAddGoal}
            visible={modalIsVisible}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  onDeleteGoal={deleteGoalHandler}
                  id={itemData.item.id}
                  text={itemData.item.text}
                />
              );
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  button: { backgroundColor: "#262525" },
  goalsContainer: {
    flex: 5,
    marginTop: 20,
  },
});
