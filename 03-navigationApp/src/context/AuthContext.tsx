import React, {useReducer} from 'react';
import {createContext} from 'react';
import AuthReducer from './AuthReducer';

// Define how it looks and what info i will have here.
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Initial State
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  signOut: () => void;
  changeFavIcon: (iconName: string) => void;
  changeUserName: (username: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(AuthReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const signOut = () => {
    dispatch({type: 'signOut'});
  };

  const changeFavIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const changeUserName = (username: string) => {
    dispatch({type: 'changeUserName', payload: username});
  };

  return (
    <AuthContext.Provider
      value={{authState, signIn, changeFavIcon, signOut, changeUserName}}>
      {children}
    </AuthContext.Provider>
  );
};
