import React, {useContext, useReducer} from 'react';
import {Alert} from 'react-native';
import {TODO_ADD, TODO_REMOVE, TODO_UPDATE} from '../../constants/actionTypes';
import {ScreenContext} from '../screen/screenContext';
import {TodoContext} from './todoContext';
import {todoReducer} from './todoReducer';

const defaultTodoList = [
  {id: '1', title: 'Learn React Native'},
  {id: '2', title: 'Create Application'},
];

const initialState = {
  todos: [...defaultTodoList],
};

type Props = {};
export const TodoState: React.FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const {goToMainScreen} = useContext(ScreenContext);

  const addTodo = (title) => dispatch({type: TODO_ADD, payload: {title}});
  const removeTodo = (id) => dispatch({type: TODO_REMOVE, payload: {id}});
  const updateTodo = (todo) => dispatch({type: TODO_UPDATE, payload: {todo}});

  const removeTodoWithAlert = (id) => {
    const todo = state.todos.find((item) => item.id === id);

    if (!todo) {
      return;
    }

    console.log('### todo', todo);


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


  return (
    <TodoContext.Provider value={{
      todos: state.todos,
      addTodo,
      updateTodo,
      removeTodo,
      removeTodoWithAlert,
    }}>
      {children}
    </TodoContext.Provider>
  );
};
