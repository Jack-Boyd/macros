import { loadNutritionData } from '../../services/edamam-service';
import { QueryResolvers, Resolvers } from './generated';

const getNutritionData: QueryResolvers['getNutritionData'] = async (_: any, { ingredientList }: { ingredientList: string }) => {
  const data = await loadNutritionData(ingredientList);
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
};

export const nutrientResolvers: Resolvers = {
  Query: { getNutritionData },
};
