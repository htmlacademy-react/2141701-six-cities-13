import { toast } from 'react-toastify';
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import {StatusCodes} from 'http-status-codes';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

import {getToken} from './token';
const BASE_BACKEND_URL = 'https://13.design.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

type DetailMessageType = {
  type: string;
  message: string;
}

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

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
    api.interceptors.response.use(
      (response) => response,
      (error: AxiosError<DetailMessageType>) => {
        if (error.response && shouldDisplayError(error.response)) {
          const detailMessage = (error.response.data);
          toast.error(detailMessage.message);
        }
        throw error;
      }
    );
    return api;
};


