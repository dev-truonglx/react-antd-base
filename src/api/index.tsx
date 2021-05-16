import axios from 'axios';
import { toastMessage, TypeToast } from 'src/components/common/ToastMessage';
import { PATH } from 'src/routes/path';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000,
});

axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    switch (error.response.status) {
      case 401:
        window.location.href = PATH.LOGIN;
        toastMessage('Error', error.response.data.message, TypeToast.ERROR);
        localStorage.removeItem('accessToken');
        break;
      case 404:
        window.location.href = PATH.PAGE_404;
        break;
      case 500:
        toastMessage('Error', error.response.data.message, TypeToast.ERROR);
        break;
      default:
        toastMessage('Error', error.response.data.message, TypeToast.ERROR);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
