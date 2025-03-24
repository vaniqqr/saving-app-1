import React, { useState } from 'react';
import { View, Text, FlatList, Button, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import SavingItem from './components/SavingItem';

export default function App() {
  const [savings, setSavings] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputAmount, setInputAmount] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addSavingHandler = () => {
    if (inputAmount === '') return;
    if (editIndex !== null) {
      const updatedSavings = [...savings];
      updatedSavings[editIndex] = inputAmount;
      setSavings(updatedSavings);
      setEditIndex(null);
    } else {
      setSavings((current) => [...current, inputAmount]);
    }
    setInputAmount('');
    setModalVisible(false);
  };

  const deleteSavingHandler = (index) => {
    setSavings((current) => current.filter((_, i) => i !== index));
  };

  const updateSavingHandler = (index) => {
    setInputAmount(savings[index]);
    setEditIndex(index);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💰 Saving Money App</Text>
      <Button title="Add Saving" onPress={() => setModalVisible(true)} />
      
      <FlatList
        data={savings}
        renderItem={({ item, index }) => (
          <SavingItem 
            amount={item} 
            onDelete={() => deleteSavingHandler(index)} 
            onUpdate={() => updateSavingHandler(index)} 
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalView}>
          <TextInput 
            placeholder="Enter amount" 
            style={styles.input} 
            keyboardType="numeric" 
            value={inputAmount} 
            onChangeText={setInputAmount} 
          />
          <Button title={editIndex !== null ? "Update" : "Add"} onPress={addSavingHandler} />
          <Button title="Cancel" onPress={() => { setModalVisible(false); setInputAmount(''); setEditIndex(null); }} color="red" />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  title: { fontSize: 24, marginBottom: 10, textAlign: 'center', fontWeight: 'bold' },
  modalView: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: { width: '80%', borderBottomWidth: 1, padding: 10, marginBottom: 20 },
});
