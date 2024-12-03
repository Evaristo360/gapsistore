import axios from 'axios';
import { config } from '../config';
const { endpoints: { apiKey } } = config;
export const instance = axios.create({
  baseURL: config.endpoints.mainBackendUrl,
  timeout: 60000,
  headers: {
    'x-rapidapi-key': apiKey
  }
});

// TODO: Config nedeed interceptors to check requests & responses
instance.interceptors.request.use(
  (config) => {

    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);