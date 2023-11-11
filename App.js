import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState(" ");
  const [courseGoals, setCourseGoals] = useState([]);

  /**
   * This function handles the input taken from the user
   * @param {*} enteredText
   */
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  /**
   * This function stores the goals added by the user as an array and display in
   * the list of Goals. Every time the user add new goals, the courseGoals array
   *  gets updated and becomes the currentGoals
   */
  function addGoalHandler() {
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoalText]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.design}>
        <TextInput
          style={styles.box}
          placeholder="Put your goals.."
          onChangeText={goalInputHandler}
        />
        <Button color="maroon" title="Add goals" onPress={addGoalHandler} />
      </View>
      <View style={styles.goals}>
        <Text style={styles.text}>Your Goals</Text>
        {courseGoals.map((goal) => (
          <View style={styles.goalInput} key={goal}>
            <Text style = {styles.color}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
  },
  design: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignContent: "center",
    borderBottomWidth: 1,
    marginBottom: 25,
    borderBottomColor: "black",
    paddingBottom: 30,
  },
  box: {
    borderWidth: 2,
    borderColor: "maroon",
    padding: 6,
    width: "70%",
  },
  goals: {
    flex: 5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "red",
    paddingBottom: 10,
  },
  goalInput: {
    margin: 8,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "blue",

   
  },
  color:{
    color: 'white',
   
  }
});
