import axios from "axios";

const API_BASE_URL = "https://server.saraofficialsalonmembership.online";

export const fetchJodi = async (marketId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/v1/public/result`,
      {
        params: {
          market_id: marketId,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching result:", error);
    throw error;
  }
};