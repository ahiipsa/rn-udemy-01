import {AppLoading} from 'expo';
import React, {useContext, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {ScreenContext} from '../context/screen/screenContext';
import {TodoContext} from '../context/todo/todoContext';
import {MainScreen} from '../screens/MainScreen';
import {TodoScreen} from '../screens/TodoScreen';
import {THEME} from '../styles/theme';
import {NavBar} from './NavBar';

type Props = {};
export const LayoutMain: React.FC<Props> = () => {
  const {todos, updateTodo, removeTodo, addTodo} = useContext(TodoContext);
  const {goToMainScreen, todoId, changeScreen} = useContext(ScreenContext);

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
          onPress: () => {
            goToMainScreen();
            removeTodo(id);
          }
        },
      ],
      {cancelable: false},
    );
  };

  const openTodo = (id) => {
    changeScreen(id);
  };

  const goBack = () => {
    goToMainScreen();
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
