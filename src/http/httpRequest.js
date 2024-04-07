import axios from "axios";

url = "https://74d2-145-224-74-246.ngrok-free.app";

const httpRequest = axios.create({
  baseURL: url,
  timeout: 5000, // Increased timeout value
});

// trackerAPI.interceptors.request.use(
//   async (config) => {
//     const token = await AsyncStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

export default httpRequest;
