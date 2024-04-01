import createDataContext from './createDataContext';
import httpRequest from '../http/httpRequest';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const navigation = useNavigation();
  return async props => {
    console.log('🚀 ~ signIn ~ props:', props);
    const data = {
      username: props.username,
      password: props.password,
    };
    try {
      const res = await httpRequest.post('api/token/', data);
      dispatch({type: 'sign_in', payload: res.data.access});
      await AsyncStorage.setItem('token', res.data.access);
    } catch (err) {
      console.log("🚀 ~ signIn ~ err:", err)
      Alert.alert('wrong username or password');
    }
    // navigation.navigate('AddTask')
  };
};

const signUp = dispatch => {
  return async props => {
    const data = {
      username: props.username,
      password: props.password,
    };
    try {
      const res = await httpRequest.post('client/user/create', data);
    } catch {
      Alert.alert('something went wrong!!');
    }
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
