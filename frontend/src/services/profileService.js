import axios from 'axios';

const getProfile = async () => {
  try {
    const res = await axios.get('http://localhost:5000/api/profile');
    return res.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return { success: false, error: error.message };
  }
};

export default getProfile;