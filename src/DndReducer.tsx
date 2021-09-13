import React, { FC, useReducer } from 'react';

export type Action = {
  type: 'CHANGE_VALUE' | 'CLEAR_VALUE';
  id: string;
  value: string;
};
export type InputDataType = { [index: string]: string };

const initialState: InputDataType = {};

const reducer = (state: InputDataType, action: Action) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
        ...state,
        [action.id]: action.value,
      };
    case 'CLEAR_VALUE':
      return {
        ...state,
        [action.id]: '',
      };
    default:
      return state;
  }
};

export const DndContext = React.createContext(
  {} as {
    state: InputDataType;
    dispatch: React.Dispatch<Action>;
  },
);

export const DndContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DndContext.Provider value={{ state, dispatch }}>
      {children}
    </DndContext.Provider>
  );
};
