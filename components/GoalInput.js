import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
import { Image } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setGoalText] = useState("");

  function inputGoalHandler(enteredText) {
    setGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    props.cancelAddGoal();
    setGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          onChangeText={inputGoalHandler}
          style={styles.textInput}
          defaultValue={enteredGoalText}
          placeholder="Enter goal"
          autoFocus={true}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.cancelAddGoal} />
          </View>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Tap me" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "#aaaaaa",
    flex: 1,
    backgroundColor: "#bcbcbc",
  },
  textInput: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    width: "30%",
    marginHorizontal: 15,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default GoalInput;
