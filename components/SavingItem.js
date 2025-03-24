import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SavingItem = ({ amount, onDelete, onUpdate }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.amountText}>₱ {amount}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Edit" onPress={onUpdate} />
        <Button title="Delete" color="red" onPress={onDelete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: { padding: 15, marginVertical: 8, backgroundColor: '#eee', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  amountText: { fontSize: 18 },
  buttonContainer: { flexDirection: 'row', gap: 10 },
});

export default SavingItem;
