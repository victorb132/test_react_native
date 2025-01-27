import React, {ReactNode, createContext, useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export type Task = {
  id: string;
  name: string;
  isCompleted: boolean;
};

type TaskContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
  removeAllTasksCompleted: () => void;
  toggleTaskCompletion: (id: string) => void;
};

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined,
);

export const TaskProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    };
    loadTasks();
  }, []);

  const addTask = async (task: Task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const removeTask = async (id: string) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks));
  };

  const removeAllTasksCompleted = async () => {
    const filteredTasks = tasks.filter(task => task.isCompleted !== true);
    setTasks(filteredTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks));
  };

  const toggleTaskCompletion = async (id: string) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? {...task, isCompleted: !task.isCompleted} : task,
    );
    setTasks(updatedTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        removeAllTasksCompleted,
        toggleTaskCompletion,
      }}>
      {children}
    </TaskContext.Provider>
  );
};
