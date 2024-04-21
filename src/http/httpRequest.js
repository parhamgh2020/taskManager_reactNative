import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { baseURL } from '../constants/urls';
import { Context as AuthContext } from '../context/AuthContext';

const requestHttp = (endpoint, method, params = {}, data = {}) => {
  return AsyncStorage.getItem('token')
    .then(token => {
      const instance = axios.create({
        baseURL: baseURL,
        method: method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return instance.request({
        url: endpoint,
        params: params,
        data: data,
      });
    })
    .catch(error => {
      if (error.response) {
        const { status } = error.response;
        if (status === 400) {
          console.error('Bad Request: ', error.response.data);
          return Promise.reject(error.response.data);
        } else if (status === 401) {
          console.error('Unauthorized: ', error.response.data);
          // Perform token refresh here
          return AsyncStorage.getItem('refresh')
            .then(refreshToken => {
              return axios.post(`${baseURL}${refresh-token}`, {
                refreshToken: refreshToken,
              });
            })
            .then(refreshResponse => {
              const token = refreshResponse.data.token;
              return AsyncStorage.setItem('token', token)
                .then(() => {
                  // Retry the failed request with the new token
                  return requestHttp(endpoint, method, params, data);
                });
            })
            .catch(refreshError => {
              console.error('Token refresh failed: ', refreshError);
              const {signOut} = useContext(AuthContext);
              signOut()
            });
        }
      }
      console.error('Error httpRequest data: ', error);
      return Promise.reject(error);
    });
};

export default requestHttp;
