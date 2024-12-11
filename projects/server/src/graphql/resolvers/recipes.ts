import { MutationResolvers, QueryResolvers } from './generated';
import prisma from '../../config/db';
import { calculateTotals } from '../../utils/recipe-calculations';

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
  try {
    const ingredientIds = recipeIngredients.map((ri) => ri.ingredientId);
    const ingredientsData = await prisma.ingredient.findMany({
      where: { id: { in: ingredientIds } },
      include: {
        createdBy: true,
      },
    });

    const ingredientMap = new Map(ingredientsData.map((ing) => [ing.id, ing]));

    const totals = calculateTotals(recipeIngredients, ingredientMap);

    const recipe = await prisma.recipe.create({
      data: {
        title,
        description,
        servings,
        createdById: user.userId,
        totalCalories: totals.totalCalories,
        totalProtein: totals.totalProtein,
        totalCarbohydrates: totals.totalCarbohydrates,
        totalFats: totals.totalFats,
        recipeIngredients: {
          create: recipeIngredients.map((ri) => ({
            quantity: ri.quantity,
            unit: ri.unit,
            ingredient: { connect: { id: ri.ingredientId } },
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
