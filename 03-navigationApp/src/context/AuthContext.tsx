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
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(AuthReducer, authInitialState);

  return (
    <AuthContext.Provider value={{authState, signIn: () => {}}}>
      {children}
    </AuthContext.Provider>
  );
};
