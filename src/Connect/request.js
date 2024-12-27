import axios from 'axios'

// axios.defaults.withCredentials = true;

const request = axios.create({
  baseURL: 'https://api.simsongarments.com/', // API server url
  // baseURL: 'http://192.168.199.213:8080/', 
  // baseURL: 'http://192.168.29.66:8086/', 
  // baseURL: 'http://localhost:8086/', 
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});
export default request


// export const BASEURL = 'http://192.168.29.66:8086';
// export const BASEURL = 'http://localhost:8086';
export const BASEURL = 'https://api.simsongarments.com';


