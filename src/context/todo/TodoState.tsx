import React, {useContext, useReducer} from 'react';
import {Alert} from 'react-native';
import * as api from '../../api';
import {
  CLEAR_ERROR, FETCH_TODOS,
  HIDE_LOADER,
  SHOW_ERROR,
  SHOW_LOADER,
  TODO_ADD,
  TODO_REMOVE,
  TODO_UPDATE,
} from '../../constants/actionTypes';
import {ScreenContext} from '../screen/screenContext';
import {TodoContext} from './todoContext';
import {todoReducer} from './todoReducer';

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

type Props = {};
export const TodoState: React.FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const {goToMainScreen} = useContext(ScreenContext);

  const addTodo = async (title) => {
    const data = await api.createTodo({title});

    dispatch({type: TODO_ADD, payload: {title, id: data.name}});
  };

  const fetchTodoList = async () => {
    showLoader();
    clearError();
    try {
      const data = await api.fetchTodoList();
      const todos = Object.keys(data).map((key) => ({...data[key], id: key}));
      dispatch({type: FETCH_TODOS, payload: {todos}});
    } catch (e) {
      console.log('### error', e);

      showError('Something wrong...');
    } finally {
      hideLoader();
    }
  };

  const removeTodo = async (id) => {
    await api.removeTodo({id});
    dispatch({type: TODO_REMOVE, payload: {id}})
  };
  const updateTodo = async (todo) => {
    await api.updateTodo({todo});
    dispatch({type: TODO_UPDATE, payload: {todo}})
  };

  const removeTodoWithAlert = (id) => {
    const todo = state.todos.find((item) => item.id === id);

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

  const showLoader = () => dispatch({type: SHOW_LOADER});
  const hideLoader = () => dispatch({type: HIDE_LOADER});
  const showError = (error) => dispatch({type: SHOW_ERROR, payload: {error}});
  const clearError = () => dispatch({type: CLEAR_ERROR});


  return (
    <TodoContext.Provider value={{
      todos: state.todos,
      loading: state.loading,
      error: state.error,
      fetchTodoList,
      addTodo,
      updateTodo,
      removeTodo,
      removeTodoWithAlert,
    }}>
      {children}
    </TodoContext.Provider>
  );
};
