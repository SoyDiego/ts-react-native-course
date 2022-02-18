import React from 'react';
import {createContext} from 'react';

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
  return (
    <AuthContext.Provider
      value={{authState: authInitialState, signIn: () => {}}}>
      {children}
    </AuthContext.Provider>
  );
};
