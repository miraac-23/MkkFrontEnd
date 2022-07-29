import axios from "axios";

const API_URL = "http://localhost:8080/api/users/authenticate"

const register = (username, password) => {
  return axios.post(API_URL, {
    username,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL , {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;