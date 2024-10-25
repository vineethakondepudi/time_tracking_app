import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Your Express server URL

// Function to login
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data; // Return success message
  } catch (error) {
    throw error.response.data; // Return error message
  }
};

// Function to logout
export const logoutUser = async () => {
  try {
    const response = await axios.post(`${API_URL}/logout`);
    return response.data; // Return success message
  } catch (error) {
    throw error.response.data; // Return error message
  }
};
