import axios from 'axios';

const API_BASE_URL = 'https://server.saraofficialsalonmembership.online';

export const fetchSettings = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/v1/app/setting/get`);
    return response.data;
  } catch (error) {
    console.error('Error fetching settings:', error);
    throw error;
  }
};

export const getRatesFromSettings = (settingsData) => {
  if (!settingsData || !settingsData.data || !settingsData.data.multipliers) {
    return null;
  }

  const { main, primary, exclusive } = settingsData.data.multipliers;

  // Map main rates
  const matkaRates = [
    {
      name: "Single Digit",
      rate: `1 Ka ${main.single_val_2 || '100'}`,
      color: "#3b82f6",
      bg: "#dbeafe",
    },
    {
      name: "Jodi Digit",
      rate: `1 Ka ${main.pair_val_2 || '100'}`,
      color: "#22c55e",
      bg: "#dcfce7",
    },
    {
      name: "Single Pana",
      rate: `1 Ka ${main.single_code_2 || '100'}`,
      color: "#a855f7",
      bg: "#f3e8ff",
    },
    {
      name: "Double Pana",
      rate: `1 Ka ${main.double_code_2 || '100'}`,
      color: "#eab308",
      bg: "#fef9c3",
    },
    {
      name: "Triple Pana",
      rate: `1 Ka ${main.triple_code_2 || '100'}`,
      color: "#14b8a6",
      bg: "#ccfbf1",
    },
    {
      name: "Half Sangam",
      rate: `1 Ka ${main.half_combo_2 || '100'}`,
      color: "#06b6d4",
      bg: "#cffafe",
    },
    {
      name: "Full Sangam",
      rate: `1 Ka ${main.full_combo_2 || '100'}`,
      color: "#ec4899",
      bg: "#fce7f3",
    },
  ];

  // Map starline rates (from primary)
  const starlineRates = [
    {
      name: "Single Digit",
      rate: `1 Ka ${primary.single_val_2 || '100'}`,
      color: "#3b82f6",
      bg: "#dbeafe",
    },
    {
      name: "Jodi Digit",
      rate: `1 Ka ${main.pair_val_2 || '100'}`,
      color: "#22c55e",
      bg: "#dcfce7",
    },
    {
      name: "Single Pana",
      rate: `1 Ka ${primary.single_code_2 || '100'}`,
      color: "#a855f7",
      bg: "#f3e8ff",
    },
    {
      name: "Double Pana",
      rate: `1 Ka ${primary.double_code_2 || '100'}`,
      color: "#eab308",
      bg: "#fef9c3",
    },
  ];

  // Map jackpot rates (from exclusive)
  const jackpotRates = [
    {
      name: "Jodi Digit",
      rate: `1 Ka ${exclusive.pair_val_2 || '100'}`,
      color: "#22c55e",
      bg: "#dcfce7",
    },
  ];

  return {
    Matka: matkaRates,
    Starline: starlineRates,
    Jackpot: jackpotRates,
  };
};

export default fetchSettings;