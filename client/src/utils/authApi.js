import axios from "./axios.customize";

export const register = (name, email, password) => {
  const URL_API = "/v1/api/auth/register";
  const data = {
    name,
    email,
    password,
  };

  return axios.post(URL_API, data);
};

export const login = (email, password) => {
  const URL_API = "/v1/api/auth/login";
  const data = {
    email,
    password,
  };

  return axios.post(URL_API, data);
};
