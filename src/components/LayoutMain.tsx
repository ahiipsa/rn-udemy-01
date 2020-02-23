import {AppLoading} from 'expo';
import React, {useContext, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {TodoContext} from '../context/todo/todoContext';
import {MainScreen} from '../screens/MainScreen';
import {TodoScreen} from '../screens/TodoScreen';
import {THEME} from '../styles/theme';
import {NavBar} from './NavBar';

type Props = {};
export const LayoutMain: React.FC<Props> = () => {
  const [todoId, setTodoId] = useState(null);

  const {todos, updateTodo, removeTodo, addTodo} = useContext(TodoContext);

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
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 10,
  },
});
