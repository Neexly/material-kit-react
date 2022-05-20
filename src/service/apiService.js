import axios from "axios";

export const API = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 50000,
  });

  instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.Authorization = localStorage.getItem('token')
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });