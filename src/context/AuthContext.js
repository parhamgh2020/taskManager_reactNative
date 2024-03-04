import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'sign_in':
      return {...state, token: action.payload, errMessage: null};
    case 'sign_out':
      return {...state, token: null};
    case 'add_error':
      return {...state, errMessage: action.payload};
    case 'clear_error':
      return {...state, errMessage: null};
    default:
      return state;
  }
};

const signIn = dispatch => {
  return async ({email, password}) => {};
};

const signUp = dispatch => {
  return params => {
    console.log(JSON.stringify(params, null, 4));
    console.log("🚀 ~ signUp ~ signUp:", signUp)
  };
};

const signOut = dispatch => {};

const cleanUpError = dispatch => {};

const tryLocalSignIn = dispatch => {};

export const {Context, Provider} = createDataContext(
  authReducer,
  {signIn, signOut, signUp, cleanUpError, tryLocalSignIn},
  {token: null, errMessage: null},
);
