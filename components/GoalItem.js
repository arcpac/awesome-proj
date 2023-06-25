import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteGoal.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 20,
    borderRadius: 4,
    borderColor: "#81cad6",
    backgroundColor: "#eeeeee",
  },
  goalText: {
    color: "#444444",
    
  },
});

export default GoalItem;
