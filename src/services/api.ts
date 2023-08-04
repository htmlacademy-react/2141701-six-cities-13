import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

import {getToken} from './token';
const BASE_BACKEND_URL = 'https://13.design.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  });
   api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
   );

    return api;
};


