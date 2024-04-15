import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

URL = 'https://2360-3-8-154-105.ngrok-free.app';

const requestHttp = async (endpoint, method, data) => {
  const token = AsyncStorage.getItem('token');
  try {
    const instance = axios.create({
      baseURL: URL,
      method: method, // specify the method (GET, POST, PUT, DELETE, etc.)
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // add your authentication token
      },
      params: {
        // specify your query parameters here
        key1: 'value1',
        key2: 'value2',
      },
      data: data,
    });
    const response = await instance.request({
      url: endpoint, // specify the endpoint
    });
    return response;
  } catch (error) {
    console.error('Error httpRequest data: ', error);
  }
  return null;
};

export default requestHttp;
