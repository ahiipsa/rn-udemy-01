import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {NavBar} from './src/components/NavBar';
import {MainScreen} from './src/screens/MainScreen';
import {TodoScreen} from './src/screens/TodoScreen';

async function loadApplication() {
  return await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })
}

const defaultTodoList = [
  {id: '1', title: 'Learn React Native'},
  {id: '2', title: 'Create Application'},
];

export default function App() {
  const [isAppReady, setAppReady] = useState(false);
  const [todos, setTodos] = useState([...defaultTodoList]);
  const [todoId, setTodoId] = useState(null);

  if (!isAppReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={(err) => console.log(err)}
        onFinish={() => setAppReady(true)}
      />
    )
  }

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    };

    setTodos(prev => [newTodo, ...prev]);
  };

  const removeTodo = (id) => {
    if (id === todoId) {
      setTodoId(null);
    }
    setTodos((items) => items.filter((item) => item.id !== id));
  };

  const removeTodoWithAlert = (id) => {
    const todo = todos.find((item) => item.id === id);

    if (!todo) {
      return;
    }

    // Works on both Android and iOS
    Alert.alert(
      'Delete todo',
      `Are you sure to delete toto ${todo.title}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => removeTodo(id)
        },
      ],
      {cancelable: false},
    );
  };

  const updateTodo = (todo) => {
    setTodos((old) => old.map((item) => {
      if (item.id === todo.id) {
        return {...todo};
      }
      return item;
    }))
  };

  const openTodo = (id) => {
    setTodoId(id);
  };

  const goBack = () => {
    setTodoId(null);
  };

  let content = (
    <MainScreen
      addTodo={addTodo}
      onRemoveTodo={removeTodoWithAlert}
      todos={todos}
      onTouchTodo={openTodo}
    />);

  if (todoId) {
    const todo = todos.find((item) => item.id === todoId);
    content = (
      <TodoScreen
        goBack={goBack}
        todo={todo}
        onSave={updateTodo}
        onRemove={removeTodoWithAlert}
      />);
  }

  return (
    <View>
      <NavBar title="Todo App" />
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  text: {
  }
});
