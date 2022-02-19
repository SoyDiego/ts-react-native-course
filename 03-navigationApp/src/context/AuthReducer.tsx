import {AuthState} from './AuthContext';

type AuthActions = {
  type: 'signIn';
};

const AuthReducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };

    default:
      return state;
  }
};

export default AuthReducer;
