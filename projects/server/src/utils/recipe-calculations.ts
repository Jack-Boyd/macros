import {
  RecipeIngredientInput,
  Ingredient,
  Unit,
} from '../graphql/resolvers/generated';

type IngredientMap = Map<string, Ingredient>;

export const calculateTotals = (
  recipeIngredients: RecipeIngredientInput[],
  ingredientMap: IngredientMap,
) => {
  let totalCalories = 0;
  let totalProtein = 0;
  let totalCarbohydrates = 0;
  let totalFats = 0;

  for (const ri of recipeIngredients) {
    const { ingredientId, quantity, unit } = ri;
    const ingredient = ingredientMap.get(ingredientId);
    if (!ingredient) {
      throw new Error(`Ingredient not found: ${ingredientId}`);
    }

    let quantityInGrams = quantity;
    if (unit === 'POUNDS') {
      quantityInGrams = quantity * 453.59237;
    } else if (unit === 'MILLILITRES') {
      quantityInGrams = quantity;
    }

    const factor = quantityInGrams / ingredient.perUnitBasis;

    totalCalories += ingredient.calories * factor;
    totalProtein += ingredient.protein * factor;
    totalCarbohydrates += ingredient.carbohydrates * factor;
    totalFats += ingredient.fats * factor;
  }
  return {
    totalCalories,
    totalProtein,
    totalCarbohydrates,
    totalFats,
  };
};
