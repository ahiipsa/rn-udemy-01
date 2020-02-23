import {SCREEN_CHANGE, SCREEN_MAIN} from '../../constants/actionTypes';

export const screenReducer = (state, action) => {
  switch (action.type) {
    case SCREEN_CHANGE: {
      return {...state, todoId: action.payload.todoId}
    }
    case SCREEN_MAIN: {
      return {...state, todoId: null};
    }
    default: return state;

  }
};
