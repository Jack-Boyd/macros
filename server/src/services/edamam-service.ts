import axios from 'axios';
import env from '../config/env';

const BASE_URL = 'https://api.edamam.com/api/nutrition-data';

export const loadNutritionData = async (ingredientList: string) => {
  const EDAMAM_APP_ID = env.EDAMAM_APP_ID;
  const EDAMAM_APP_KEY = env.EDAMAM_APP_KEY;
  if (!EDAMAM_APP_ID || !EDAMAM_APP_KEY) {
    throw new Error('Edamam API credentials are not set');
  }
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        app_id: EDAMAM_APP_ID,
        app_key: EDAMAM_APP_KEY,
        ingr: ingredientList,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching nutrition data:', error);
    throw error;
  }
};
