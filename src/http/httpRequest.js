import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

URL = 'https://8b0c-3-8-154-105.ngrok-free.app';

const requestHttp = async (endpoint, method, params = {}, data = {}) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const instance = axios.create({
      baseURL: URL,
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
    if (error.response && error.response.status === 400) {
      // Handle status code 400
      console.error('Bad Request: ', error.response.data);
      return error.response.data; // or throw an error
    } else {
      console.error('Error httpRequest data: ', error);
      throw error; // throw other errors to be handled elsewhere
    }
  }
};
export default requestHttp;
