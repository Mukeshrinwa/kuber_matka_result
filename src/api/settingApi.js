import axios from 'axios';

const API_BASE_URL = 'https://server.saraofficialsalonmembership.online';

export const fetchsetting = async (enrollmentNo) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/app/setting/get`,
      {
        params: { enrollment_no: enrollmentNo },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching setting:', error);
    throw error;
  }
};