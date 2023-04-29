import axios from "axios";
// import Cookies from 'universal-cookie';

// const cookies = new Cookies();
const API_URL = "https://api.mareew.uz";




const base = axios.create({
  baseURL: API_URL,
});

base.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${localStorage.getItem("access")}`
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default base