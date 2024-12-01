import { QueryResolvers, MutationResolvers } from './generated';
import prisma from '../../config/db';

interface CreateIngredientArgs {
  name: string;
  description: string;
  calories: number;
  protein: number;
  carbohydrates: number;
  fats: number;
  fiber?: number | null;
  sugar?: number | null;
}
const ingredients: QueryResolvers['ingredients'] = async (_, __, { req }) => {
  const user = req.user;
  if (!user) throw new Error('Not authenticated');
  try {
    const ingredients = await prisma.ingredient.findMany({
      include: {
        createdBy: true,
      },
    });
    return ingredients;
  } catch (error) {
    console.error('Error fetching ingredients:', error);
    throw new Error('Failed to fetch ingredients');
  }
};
const createIngredient: MutationResolvers['createIngredient'] = async (_, 
  { name, description, calories, protein, carbohydrates, fats, fiber, sugar }: CreateIngredientArgs, 
  { req }: { req: any }
) => {
  const user = req.user;
  if (!user) throw new Error('Not authenticated');
  try {
    const ingredient = await prisma.ingredient.create({
      data: {
        name,
        description,
        calories,
        protein,
        carbohydrates,
        fats,
        fiber: fiber ?? null,
        sugar: sugar ?? null,
        createdById: user.userId,
      },
      include: {
        createdBy: true,
      },
    });

    return ingredient;
  } catch (error) {
    console.error('Error creating ingredient:', error);
    throw new Error('Failed to create ingredient');
  }
}

export const ingredientResolvers = {
  Query: { ingredients },
  Mutation: { createIngredient },
};
