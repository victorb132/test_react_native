import {FlatList, StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import {Task, TaskContext} from '../context/task-context';

import Button from '../components/button';
import {Card} from '../components/card';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {useNavigation} from '@react-navigation/native';

export default function TaskListScreen() {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'TaskList'>>();
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    return null;
  }

  const {tasks, removeTask, removeAllTasksCompleted, toggleTaskCompletion} =
    taskContext;

  function navigateToAddTask() {
    navigate('AddTask');
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}: {item: Task}) => (
          <Card
            task={item}
            onExcluse={() => removeTask(item.id)}
            onToggleCompletion={() => toggleTaskCompletion(item.id)}
          />
        )}
      />
      <Button title="Adicionar Tarefa" onPress={navigateToAddTask} />
      <View style={styles.spacing} />
      <Button
        title="Limpar Concluídas"
        type="secundary"
        onPress={removeAllTasksCompleted}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e6f0ff',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  taskText: {
    fontSize: 16,
  },
  deleteText: {
    color: 'red',
    fontSize: 16,
  },
  spacing: {
    height: 8,
  },
});
