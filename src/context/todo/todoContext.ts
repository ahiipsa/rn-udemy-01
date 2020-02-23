import {createContext} from 'react';
import {TTodo} from '../../types';

type TTodoState = {
  todos: TTodo[];
  addTodo?: (title: string) => void;
  removeTodo?: (id: string) => void;
  updateTodo?: (todo: TTodo) => void;
}

const initialState = {
  todos: [],
}

export const TodoContext = createContext<TTodoState>(initialState);
