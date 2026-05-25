import axios from 'axios';

const API_BASE_URL = 'https://server.saraofficialsalonmembership.online';

export const fetchResult = async (enrollmentNo) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/v1/public/result`,
      {
        params: { enrollment_no: enrollmentNo },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching result:', error);
    throw error;
  }
};