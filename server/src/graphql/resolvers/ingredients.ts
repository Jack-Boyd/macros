import { MutationResolvers } from './generated';
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

const createIngredient: MutationResolvers['createIngredient'] = async (_, 
  { name, description, calories, protein, carbohydrates, fats, fiber, sugar }: CreateIngredientArgs, 
  { req }: { req: any }
) => {
  const user = req.user;
  if (!user) throw new Error('Not authenticated');

  const ingredient = await prisma.ingredient.create({
    data: {
      name,
      description,
      calories,
      protein,
      carbohydrates,
      fats,
      fiber,
      sugar,
      createdById: user.userId,
    },
    include: {
      createdBy: true
    }
  });

  return ingredient; 
};

export const ingredientResolvers = {
  Mutation: { createIngredient },
};
