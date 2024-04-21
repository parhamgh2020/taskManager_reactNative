import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Context as AuthContext} from '../context/AuthContext';
import {useContext} from 'react';
import {Alert} from 'react-native';
import {refreshTokenUrl, baseURL} from '../constants/urls';

const requestHttp = async (endpoint, method, params = {}, data = {}) => {
  try {
    let token = await AsyncStorage.getItem('token');
    const instance = axios.create({
      baseURL: baseURL,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await instance.request({
      url: endpoint,
      params: params,
      data: data,
    });

    return response;
  } catch (error) {
    if (error.response) {
      const {status} = error.response;
      if (status === 400) {
        console.warn('Bad Request: ', error.response.data);
        Alert('Bad Request 404');
      } else if (status === 401) {
        console.warn('Unauthorized: ', error.response.data);
        // Perform token refresh here
        try {
          // Your token refresh logic, for example:
          const refreshToken = await AsyncStorage.getItem('refreshToken');
          console.log('🚀 ~ requestHttp ~ refreshToken:', refreshToken);
          console.log(
            '🚀 ~ requestHttp ~ ${URL}${refreshTokenUrl}:',
            `${baseURL}${refreshTokenUrl}`,
          );
          const refreshResponse = await axios.post(`${baseURL}${refreshTokenUrl}`, {
            refresh: refreshToken,
          });
          token = refreshResponse.data.access;
          await AsyncStorage.setItem('token', token);
          // Retry the failed request with the new token
          return requestHttp(endpoint, method, params, data);
        } catch (refreshError) {
          console.error('Token refresh failed: ', refreshError);
          const {signOut} = useContext(AuthContext);
          signOut();
        }
      }
    }
    console.error('Error httpRequest data: ', error);
    throw error;
  }
};

export default requestHttp;
