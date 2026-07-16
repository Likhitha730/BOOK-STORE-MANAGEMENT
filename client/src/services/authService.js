import API from "./api";

// Register a new user
export const registerUser = async (userData) => {
  const response = await API.post("/auth/register", userData);
  return response.data;
};

// Login an existing user
export const loginUser = async (userData) => {
  const response = await API.post("/auth/login", userData);
  return response.data;
};