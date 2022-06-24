import axios from "axios";

export default (navigate = null) => {
  const baseURL = "https://truly-contacts.herokuapp.com/api";

  let headers = {};

  if (localStorage.token) {
    headers.Authorization = `Bearer ${localStorage.token}`;
  }

  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers
  });

  axiosInstance.interceptors.response.use(
    response =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    error => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }

      if (error.response.status === 403) {
        localStorage.removeItem("token");
        if (navigate !== null) {
          navigate("/auth/login");
        } else {
          window.location = "/auth/login";
        }
      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
  );

  return axiosInstance;
};

//export default axiosInstance;
