import {AuthState} from './AuthContext';

type AuthActions = {type: 'signIn'} | {type: 'changeFavIcon'; payload: string};

const AuthReducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };
    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };

    default:
      return state;
  }
};

export default AuthReducer;
