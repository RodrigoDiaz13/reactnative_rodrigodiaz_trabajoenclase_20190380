import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, StatusBar } from 'react-native';
 
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');
 
  const añadirT = () => {
    if (inputTask.trim() !== '') {
      setTasks([...tasks, { key: Math.random().toString(), value: inputTask }]);
      setInputTask('');
    }
  };
 
  const eliminarT = taskKey => {
    setTasks(tasks.filter(task => task.key !== taskKey));
  };
 
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add a new task"
          style={styles.input}
          onChangeText={setInputTask}
          value={inputTask}
        />
        <Button title="Add Task" onPress={añadirT} />
      </View>
      <FlatList
        data={tasks}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
            <Button title="Delete" onPress={() => eliminarT(itemData.item.key)} />
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
  input: {
    width: '70%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  }
});
 