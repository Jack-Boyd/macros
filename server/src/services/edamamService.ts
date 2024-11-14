import axios from 'axios';

const BASE_URL = 'https://api.edamam.com/api/nutrition-data';

export const getNutritionData = async (ingredientList: string) => {
  const EDAMAM_APP_ID = process.env.EDAMAM_APP_ID;
  const EDAMAM_APP_KEY = process.env.EDAMAM_APP_KEY;
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
