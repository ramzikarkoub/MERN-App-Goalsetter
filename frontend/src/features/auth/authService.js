import axios from "axios";

// const API_URL = "https://mern-app-goalsetter.vercel.app/";

// Register user
const register = async (userData) => {
  const response = await axios.post(
    "https://mern-app-goalsetter.vercel.app/",
    userData
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(
    "https://mern-app-goalsetter.vercel.app/login",
    userData
  );
  console.log(response);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
