import axios from 'axios';

const API_URL = '/api/payments';

export const initiatePayment = async (paymentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, paymentData, config);
  return response.data;
};
