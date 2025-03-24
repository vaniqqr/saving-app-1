import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
return (
<View style={styles.goalItem}>
<Pressable
android_ripple={{ color: '#210644' }}
onPress={props.onDeleteItem.bind(this, props.id)}
style={({ pressed }) => pressed && styles.pressedItem}
>
<Text style={styles.goalText}>{props.text}</Text>
</Pressable>
</View>
);
}

export default GoalItem;

const styles = StyleSheet.create({
goalItem: {
marginTop: 5,
borderRadius: 6,
backgroundColor: '#FDDEB2',
},
pressedItem: {
opacity: 0.5,
},
goalText: {
color: '#210644',
padding: 8,
},
});
