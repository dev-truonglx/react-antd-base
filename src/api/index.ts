import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 1000,
  responseType: 'json',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    config.headers = { ...config, Authorization: `Bearer ${accessToken}` };
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      console.log('401');
      localStorage.removeItem('accessToken');
    }
    return response;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
