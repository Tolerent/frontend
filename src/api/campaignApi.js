import axios from 'axios';

const API_URL = '/api/campaigns';

export const createCampaign = async (campaignData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, campaignData, config);
  return response.data;
};

export const getCampaigns = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};
