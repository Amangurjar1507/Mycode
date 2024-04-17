import axios from 'axios';
import constant from '../config/constant';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();
const axiosInstance = axios.create({
  baseURL: constant.baseURL,
  // cancelToken: source.token,
  headers: {
    //'Content-Type': 'multipart/form-data',
    // 'Cache-Control': 'no-cache',
    // Pragma: 'no-cache',
    // Expires: '0',
  },
});

axiosInstance.interceptors.request.use(
  async config => {
    //do want you wont to do before call
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

// Relogin the user if the token expires
axiosInstance.interceptors.response.use(
  async response => response,
  async function (error) {
    if (error?.response?.status === 401 || error?.response?.status === 0) {
      // navigateAndSimpleReset(screenName.session, 0);
      source.cancel('Operation becouse of status code 401');
      // source.cancel('Operation becouse of status code 401');
      //do what you want to do in here
    } else if (error?.response?.status === 422) {
      // Toast.show(
    }

    return Promise.reject(error);
  },
);

export {axiosInstance};
