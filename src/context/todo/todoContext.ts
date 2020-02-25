import {createContext} from 'react';
import {TTodo} from '../../types';

type TTodoState = {
  todos: TTodo[];
  addTodo?: (title: string) => void;
  removeTodo?: (id: string) => void;
  updateTodo?: (todo: TTodo) => void;
  removeTodoWithAlert?: (id: string) => void;
  fetchTodoList?: () => void;
  loading: boolean,
  error: string | boolean,
}

const initialState = {
  todos: [],
  loading: false,
  error: null,
}

export const TodoContext = createContext<TTodoState>(initialState);
