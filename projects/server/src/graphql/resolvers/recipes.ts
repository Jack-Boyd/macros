import { MutationResolvers, QueryResolvers } from './generated';
import prisma from '../../config/db';

const recipes: QueryResolvers['recipes'] = async (_, __, { req }) => {
  const user = req.user;
  if (!user) throw new Error('Not authenticated');
  return prisma.recipe.findMany({
    include: {
      recipeIngredients: {
        include: {
          ingredient: {
            include: {
              createdBy: true,
            },
          },
        },
      },
      createdBy: true,
    },
  });
};

const createRecipe: MutationResolvers['createRecipe'] = async (
  _,
  { title, description, servings, recipeIngredients },
  { req },
) => {
  const user = req.user;
  if (!user) throw new Error('Not authenticated');
  console.log('user', user);
  try {
    const recipe = await prisma.recipe.create({
      data: {
        title,
        description,
        servings,
        createdById: user.userId,
        recipeIngredients: {
          create: recipeIngredients.map((ingredient) => ({
            quantity: ingredient.quantity,
            unit: ingredient.unit,
            ingredient: {
              connect: { id: ingredient.ingredientId },
            },
          })),
        },
      },
      include: {
        recipeIngredients: {
          include: {
            ingredient: {
              include: {
                createdBy: true,
              },
            },
          },
        },
        createdBy: true,
      },
    });

    return recipe;
  } catch (error) {
    console.error('Error creating recipe:', error);
    throw new Error('Failed to create recipe');
  }
};

export const recipeResolvers = {
  Query: { recipes },
  Mutation: { createRecipe },
};
