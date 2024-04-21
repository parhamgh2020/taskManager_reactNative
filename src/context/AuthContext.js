import createDataContext from './createDataContext';
import httpRequest from '../http/httpRequest';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUserUrl } from '../constants/urls';
import { tokenUrl } from '../constants/urls';

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

const signInLocally = dispatch => {
  return props => {
    dispatch({type: 'sign_in', payload: props});
  };
};

const signIn = dispatch => {
  return async props => {
    const data = {
      username: props.username,
      password: props.password,
    };
    try {
      const res = await httpRequest(tokenUrl, 'post', {}, data);
      dispatch({type: 'sign_in', payload: res.data.access});
      await AsyncStorage.setItem('token', res.data.access);
      await AsyncStorage.setItem('refreshToken', res.data.refresh)
    } catch (err) {
      console.log('🚀 ~ signIn ~ err:', err);
      Alert.alert('wrong username or password');
    }
  };
};

const signUp = dispatch => {
  return async props => {
    const data = {
      username: props.username,
      password: props.password,
    };
    try {
      const res = await httpRequest.post(createUserUrl, data);
    } catch {
      Alert.alert('something went wrong!!');
    }
  };
};

const signOut = dispatch => {
  return async props => {
    console.log('🚀 ~ signOut ~ signOut:');
    await AsyncStorage.removeItem('token');
    dispatch({type: 'sign_out'});
  };
};

const cleanUpError = dispatch => {};

export const {Context, Provider} = createDataContext(
  authReducer,
  {signInLocally, signIn, signOut, signUp, cleanUpError},
  {token: null, errMessage: null},
);
