import {createContext} from 'react';

type TScreenContextValue = {
  todoId: null | string;
  goToMainScreen?: () => void;
  changeScreen?: (todoId: string) => void;
}

export const ScreenContext = createContext<TScreenContextValue>({
  todoId: null,
});
