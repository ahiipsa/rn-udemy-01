import React, {useReducer} from 'react';
import {TODO_ADD, TODO_REMOVE, TODO_UPDATE} from '../../constants/actionTypes';
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

  const addTodo = (title) => dispatch({type: TODO_ADD, payload: {title}});
  const removeTodo = (id) => dispatch({type: TODO_REMOVE, payload: {id}});
  const updateTodo = (todo) => dispatch({type: TODO_UPDATE, payload: {todo}});

  return (
    <TodoContext.Provider value={{
      todos: state.todos,
      addTodo,
      updateTodo,
      removeTodo,
    }}>
      {children}
    </TodoContext.Provider>
  );
};
