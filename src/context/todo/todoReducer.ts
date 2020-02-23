import {TODO_ADD, TODO_REMOVE, TODO_UPDATE} from '../../constants/actionTypes';

export const todoReducer = (state, action) => {

  switch (action.type) {
    case TODO_ADD: {
      const newTodo = {
        id: Date.now().toString(),
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
    default: return state;
  }
};
