// scholarshipService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/scholarships';

export const getScholarships = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createScholarship = async (scholarshipData) => {
  const response = await axios.post(API_URL, scholarshipData);
  return response.data;
};