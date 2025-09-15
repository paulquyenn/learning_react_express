import axios from "./axios.customize";

export const getAllUserApi = async () => {
  const URL_API = "/v1/api/users";

  return axios.get(URL_API);
};
