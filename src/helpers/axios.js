import axios from "axios";

const baseURL = "https://truly-contacts.herokuapp.com/api";

console.log(baseURL);
let headers = {};

if (localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`;
}

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers
});

export default axiosInstance;
