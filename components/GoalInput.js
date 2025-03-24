import { useState } from "react";
import { View, TextInput, Button, Modal, Image, StyleSheet } from "react-native";

function GoalInput(props) {
const [enteredGoalText, setEnteredGoalText] = useState("");

function goalInputHandler(enteredText) {
setEnteredGoalText(enteredText);
}

function addGoalHandler() {
props.onAddGoal(enteredGoalText);
setEnteredGoalText("");
}

return (
<Modal visible={props.visible} animationType="slide">
<View style={styles.inputContainer}>
<Image
source={require("../assets/images/bucket.png")}
style={styles.image}
/>
<TextInput
style={styles.textInput}
placeholder="Your bucket goal"
onChangeText={goalInputHandler}
value={enteredGoalText}
/>
<View style={styles.buttonContainer}>
<View style={styles.button}>
<Button
title="Cancel"
onPress={props.onCancel}
color="#b9cfd5"
// className="color-black"
/>
</View>
<View className="w-[100px] mx-2">
<Button title="Add Goal" onPress={addGoalHandler} color="#5F909F" />
</View>
</View>
</View>
</Modal>
);
}

export default GoalInput;

const styles = StyleSheet.create({
inputContainer: {
flex: 1,
justifyContent: "center",
alignItems: "center",
padding: 16,
backgroundColor: "#FDDEB2",
},
image: {
width: 100,
height: 100,
margin: 20,
marginLeft: 50,
},
textInput: {
borderWidth: 1,
borderColor: "#F6EFDD",
backgroundColor: "#F6EFDD",
color: "#120438",
borderRadius: 6,
width: "100%",
padding: 16,
},
buttonContainer: {
marginTop: 16,
flexDirection: "row",
},
button: {
width: 100,
marginHorizontal: 8,
},
});