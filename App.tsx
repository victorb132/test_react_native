import AddTaskScreen from './src/screens/add-task-screen';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TaskListScreen from './src/screens/task-list-screen';
import {TaskProvider} from './src/context/task-context';
import {createStackNavigator} from '@react-navigation/stack';

export type RootStackParamList = {
  TaskList: undefined;
  AddTask: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TaskList"
            component={TaskListScreen}
            options={{title: 'Lista de Tarefas'}}
          />
          <Stack.Screen
            name="AddTask"
            component={AddTaskScreen}
            options={{title: 'Adicionar Tarefa'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}
