import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {NavBar} from './src/components/NavBar';
import {MainScreen} from './src/screens/MainScreen';
import {TodoScreen} from './src/screens/TodoScreen';

const defaultTodoList = [
  {id: '1', title: 'Learn React Native'},
  {id: '2', title: 'Create Application'},
];

export default function App() {
  const [todos, setTodos] = useState([...defaultTodoList]);
  const [todoId, setTodoId] = useState(null);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    };

    setTodos(prev => [newTodo, ...prev]);
  };

  const removeTodo = (id) => {
    setTodos((items) => items.filter((item) => item.id !== id));
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
      removeTodo={removeTodo}
      todos={todos}
      onTouchTodo={openTodo}
    />);

  if (todoId) {
    const todo = todos.find((item) => item.id === todoId);
    content = (<TodoScreen todo={todo} goBack={goBack} />);
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
