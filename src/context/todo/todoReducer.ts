import {
  CLEAR_ERROR, FETCH_TODOS,
  HIDE_LOADER,
  SHOW_ERROR,
  SHOW_LOADER,
  TODO_ADD,
  TODO_REMOVE,
  TODO_UPDATE,
} from '../../constants/actionTypes';

export const todoReducer = (state, action) => {

  switch (action.type) {
    case TODO_ADD: {
      const newTodo = {
        id: action.payload.id,
        title: action.payload.title,
      };

      return {...state, todos: [newTodo, ...state.todos]};
    }
    case TODO_REMOVE: {
      const newTodoList = state.todos.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        todos: newTodoList
      };
    }
    case TODO_UPDATE: {
      const {todo} = action.payload;

      const newTodoList = state.todos.map((item) => {
        if (item.id === todo.id) {
          return {...todo};
        }
        return item;
      });

      return {...state, todos: newTodoList};
    }
    case SHOW_LOADER: {
      return {...state, loading: true};
    }
    case HIDE_LOADER: {
      return {...state, loading: false};
    }
    case CLEAR_ERROR: {
      return {...state, error: null};
    }
    case SHOW_ERROR: {
      return {...state, error: action.payload.error};
    }
    case FETCH_TODOS: {
      return {...state, todos: [...action.payload.todos]}
    }
    default: return state;
  }
};
