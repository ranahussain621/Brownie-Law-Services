import axios from 'axios'

const chatURL ='https://frontend.mylawyers.asia/'
// const chatURL ='http://localhost:4000/'

// const baseURL = 'http://localhost:4000/';
const baseURL = 'https://frontend.mylawyers.asia/';

let lastAPICallTime = null;

const instance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});



   /////For Form Data Request to Backend
const FormData = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/form-data'
  }
});




/////For urlEncodedRequest Request to Backend
const urlEncodedRequest = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});







 //// function to log out user and redirect to login page if the time difference is greater than 5 minutes
function checkSessionExpiration() {
  const currentUser = localStorage.getItem('user');
  const currentTime = new Date();
  if (currentUser && lastAPICallTime) {
    const timeDifference = (currentTime - lastAPICallTime) / (1000 * 60); // Convert milliseconds to minutes
    if (timeDifference >= 20) {
      localStorage.clear();
      window.location.href = '/auth/login';
    }
  }
  lastAPICallTime = currentTime;
}

// Axios interceptor to track the time of each API call and check session expiration
instance.interceptors.request.use(function (config) {
  checkSessionExpiration();
  return config;
});

FormData.interceptors.request.use(function (config) {
  checkSessionExpiration();
  return config;
});

urlEncodedRequest.interceptors.request.use(function (config) {
  checkSessionExpiration();
  return config;
});
    

export { instance, baseURL ,chatURL,FormData,urlEncodedRequest };