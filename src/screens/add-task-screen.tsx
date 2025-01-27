import React, {useContext, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import Button from '../components/button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {TaskContext} from '../context/task-context';
import {useNavigation} from '@react-navigation/native';
import {v4 as uuidv4} from 'uuid';

export default function AddTaskScreen() {
  const [taskName, setTaskName] = useState('');
  const taskContext = useContext(TaskContext);

  const {goBack} =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'AddTask'>>();

  if (!taskContext) {
    return null;
  }

  const {addTask} = taskContext;

  const handleAddTask = () => {
    if (taskName.trim()) {
      addTask({id: uuidv4(), name: taskName.trim(), isCompleted: false});
      goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome da Tarefa"
        value={taskName}
        onChangeText={setTaskName}
        multiline
      />
      <Button title="Adicionar Tarefa" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
  },
});
