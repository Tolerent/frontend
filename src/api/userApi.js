import axios from 'axios';

const API_URL = '/api/users';

export const getUserProfile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/profile`, config);
  return response.data;
};

export const updateUserProfile = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(`${API_URL}/profile`, userData, config);
  return response.data;
};
