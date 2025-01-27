import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Checkbox from './checkbox';
import React from 'react';
import {Task} from '../context/task-context';

type CardProps = {
  task: Task;
  onExcluse: () => void;
  onToggleCompletion: () => void;
};

export function Card({task, onExcluse, onToggleCompletion}: CardProps) {
  return (
    <TouchableOpacity onPress={onToggleCompletion}>
      <View style={[styles.taskItem, task.isCompleted && styles.taskCompleted]}>
        <Checkbox value={task.isCompleted} onValueChange={onToggleCompletion} />
        <Text
          style={[
            styles.taskText,
            task.isCompleted && styles.taskTextCompleted,
          ]}>
          {task.name}
        </Text>
        <TouchableOpacity onPress={onExcluse}>
          <Text style={styles.deleteText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 24,
    marginVertical: 8,
    backgroundColor: '#80b3ff',
    borderRadius: 8,
    alignItems: 'center',
  },
  taskCompleted: {
    backgroundColor: '#b3d9ff',
  },
  taskText: {
    fontSize: 16,
    width: '70%',
    color: '#fff',
  },
  taskTextCompleted: {
    textDecorationLine: 'line-through',
  },
  toggleText: {
    color: '#007BFF',
    marginRight: 16,
  },
  deleteText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
