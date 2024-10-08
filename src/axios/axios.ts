import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { paths } from '../constant';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
  httpAgent: true,
  // timeout: 10000,

  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error: AxiosResponse) {
    if (error.status === 401) {
      //   TODO: implement logic call get new accessToken and refreshToken
      const navigate = useNavigate();
      navigate(`${paths.login}`);
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default axiosClient;
