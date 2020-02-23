import React, {useReducer} from 'react';
import {SCREEN_CHANGE, SCREEN_MAIN} from '../../constants/actionTypes';
import {ScreenContext} from './screenContext';
import {screenReducer} from './screenReducer';

type Props = {};
export const ScreenState: React.FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(screenReducer, {});

  const changeScreen = id => dispatch({type: SCREEN_CHANGE, payload: {todoId: id}});
  const goToMainScreen = () => dispatch({type: SCREEN_MAIN});

  return (
    <ScreenContext.Provider value={{
      todoId: state.todoId,
      goToMainScreen,
      changeScreen,
    }}>
      {children}
    </ScreenContext.Provider>
  );
};
