import { getNutritionData } from '../../services/edamamService';

export const nutrientResolvers = {
  Query: {
    getNutritionData: async (_: any, { ingredientList }: { ingredientList: string }) => {
      const data = await getNutritionData(ingredientList);
      return {
        uri: data?.uri,
        calories: data?.calories,
        totalCO2Emissions: data?.totalCO2Emissions,
        co2EmissionsClass: data?.co2EmissionsClass,
        totalWeight: data?.totalWeight,
        dietLabels: data?.dietLabels,
        healthLabels: data?.healthLabels,
        cautions: data?.cautions,
        totalNutrients: data?.totalNutrients,
        totalDaily: data?.totalDaily,
        ingredients: data?.ingredients,
        totalNutrientsKCal: data?.totalNutrientsKCal,
      };
    },
  },
};
