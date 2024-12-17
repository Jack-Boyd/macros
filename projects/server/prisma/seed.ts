import { PrismaClient, Role, Gender, Unit } from '@prisma/client';
import { hashPassword } from '../src/models/user';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await hashPassword('examplepassword');

  // Create an Admin user
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: hashedPassword,
      role: Role.ADMIN,
      firstName: 'Admin',
      lastName: 'User',
      age: 35,
      height: 175.5,
      weight: 70.2,
      gender: Gender.MALE,
      BMR: 1700,
      TDEE: 2200,
      profileComplete: true,
    },
  });

  // Create additional users
  await prisma.user.createMany({
    data: [
      {
        email: 'john.doe@example.com',
        password: hashedPassword,
        role: Role.USER,
        firstName: 'John',
        lastName: 'Doe',
        age: 28,
        height: 180.3,
        weight: 80.0,
        gender: Gender.MALE,
        BMR: 1800,
        TDEE: 2300,
        profileComplete: true,
      },
      {
        email: 'jane.doe@example.com',
        password: hashedPassword,
        role: Role.USER,
        firstName: 'Jane',
        lastName: 'Doe',
        age: 26,
        height: 165.0,
        weight: 60.0,
        gender: Gender.FEMALE,
        BMR: 1400,
        TDEE: 1900,
        profileComplete: true,
      },
      {
        email: 'chef@example.com',
        password: hashedPassword,
        role: Role.USER,
        firstName: 'Gordon',
        lastName: 'Ramsay',
        age: 50,
        height: 175.0,
        weight: 75.0,
        gender: Gender.MALE,
        BMR: 1600,
        TDEE: 2100,
        profileComplete: false,
      },
    ],
  });

  // Existing ingredients from previous example
  const ingredientsData = [
    {
      name: 'Chicken Breast',
      description: 'Boneless, skinless chicken breast',
      unit: Unit.GRAMS,
      calories: 165,
      protein: 31,
      carbohydrates: 0,
      fats: 3.6,
      fiber: 0,
      sugar: 0,
      perUnitBasis: 100,
      createdById: adminUser.id,
    },
    {
      name: 'Olive Oil',
      description: 'Extra virgin olive oil',
      unit: Unit.MILLILITRES,
      calories: 884,
      protein: 0,
      carbohydrates: 0,
      fats: 100,
      fiber: 0,
      sugar: 0,
      perUnitBasis: 100,
      createdById: adminUser.id,
    },
    {
      name: 'Brown Rice',
      description: 'Uncooked brown rice',
      unit: Unit.GRAMS,
      calories: 370,
      protein: 7.9,
      carbohydrates: 77,
      fats: 2.7,
      fiber: 3.5,
      sugar: 0.7,
      perUnitBasis: 100,
      createdById: adminUser.id,
    },
    {
      name: 'Broccoli',
      description: 'Raw broccoli florets',
      unit: Unit.GRAMS,
      calories: 34,
      protein: 2.8,
      carbohydrates: 6.6,
      fats: 0.4,
      fiber: 2.6,
      sugar: 1.7,
      perUnitBasis: 100,
      createdById: adminUser.id,
    },
    {
      name: 'Apple',
      description: 'Raw apple with skin',
      unit: Unit.GRAMS,
      calories: 52,
      protein: 0.3,
      carbohydrates: 14,
      fats: 0.2,
      fiber: 2.4,
      sugar: 10.4,
      perUnitBasis: 100,
      createdById: adminUser.id,
    },
  ];

  // Additional ingredients for the requested recipe
  const newIngredients = [
    {
      name: 'Peeled & Diced Potatoes (Spud Lite Potatoes)',
      description: 'Peeled and diced Spud Lite potatoes',
      unit: Unit.GRAMS,
      calories: 77,
      protein: 2,
      carbohydrates: 17,
      fats: 0.1,
      fiber: 2.2,
      sugar: 0.8,
      perUnitBasis: 100,
      createdById: adminUser.id,
    },
    {
      name: 'Garlic Powder',
      description: 'Dried, powdered garlic',
      unit: Unit.GRAMS,
      calories: 331,
      protein: 17,
      carbohydrates: 72,
      fats: 0.7,
      fiber: 9,
      sugar: 2.4,
      perUnitBasis: 100,
      createdById: adminUser.id,
    },
    {
      name: 'Oregano',
      description: 'Dried oregano leaves',
      unit: Unit.GRAMS,
      calories: 265,
      protein: 9,
      carbohydrates: 68,
      fats: 4,
      fiber: 42.5,
      sugar: 4,
      perUnitBasis: 100,
      createdById: adminUser.id,
    },
    {
      name: 'Smoked Paprika',
      description: 'Dried, smoked paprika powder',
      unit: Unit.GRAMS,
      calories: 282,
      protein: 14,
      carbohydrates: 54,
      fats: 13,
      fiber: 34,
      sugar: 10,
      perUnitBasis: 100,
      createdById: adminUser.id,
    },
    {
      name: 'Salt',
      description: 'Table salt',
      unit: Unit.GRAMS,
      calories: 0,
      protein: 0,
      carbohydrates: 0,
      fats: 0,
      fiber: 0,
      sugar: 0,
      perUnitBasis: 100,
      createdById: adminUser.id,
    },
    {
      name: 'Onion Powder',
      description: 'Dried, powdered onion',
      unit: Unit.GRAMS,
      calories: 341,
      protein: 11,
      carbohydrates: 79,
      fats: 1,
      fiber: 15,
      sugar: 39,
      perUnitBasis: 100,
      createdById: adminUser.id,
    },
    {
      name: 'Garlic Cloves',
      description: 'Fresh garlic cloves',
      unit: Unit.GRAMS,
      calories: 149,
      protein: 6.4,
      carbohydrates: 33,
      fats: 0.5,
      fiber: 2.1,
      sugar: 1,
      perUnitBasis: 100,
      createdById: adminUser.id,
    },
    {
      name: 'BBQ Sauce',
      description: 'Barbecue sauce',
      unit: Unit.GRAMS,
      calories: 150,
      protein: 1.5,
      carbohydrates: 35,
      fats: 0.5,
      fiber: 1,
      sugar: 28,
      perUnitBasis: 100,
      createdById: adminUser.id,
    },
    {
      name: 'Honey',
      description: 'Natural bee honey',
      unit: Unit.GRAMS,
      calories: 304,
      protein: 0.3,
      carbohydrates: 82,
      fats: 0,
      fiber: 0.2,
      sugar: 82,
      perUnitBasis: 100,
      createdById: adminUser.id,
    },
    {
      name: 'Light/Low Fat Cheese',
      description: 'Reduced fat cheese',
      unit: Unit.GRAMS,
      calories: 200,
      protein: 25,
      carbohydrates: 3,
      fats: 8,
      fiber: 0,
      sugar: 3,
      perUnitBasis: 100,
      createdById: adminUser.id,
    },
  ];

  await prisma.ingredient.createMany({
    data: [...ingredientsData, ...newIngredients],
  });

  // Fetch all ingredients by name to get their IDs
  const ingredientNames = [...ingredientsData, ...newIngredients].map(
    (i) => i.name,
  );
  const allIngredients = await prisma.ingredient.findMany({
    where: { name: { in: ingredientNames } },
  });

  const getIngredient = (name: string) =>
    allIngredients.find((ing) => ing.name === name)!;

  // Create a previously demonstrated recipe for reference
  const chickenAndRiceRecipe = await prisma.recipe.create({
    data: {
      title: 'Chicken and Brown Rice Bowl',
      description: 'A healthy bowl of chicken, brown rice, and broccoli',
      servings: 2,
      createdById: adminUser.id,
    },
  });

  await prisma.recipeIngredient.createMany({
    data: [
      {
        recipeId: chickenAndRiceRecipe.id,
        ingredientId: getIngredient('Chicken Breast').id,
        quantity: 200,
        unit: Unit.GRAMS,
      },
      {
        recipeId: chickenAndRiceRecipe.id,
        ingredientId: getIngredient('Brown Rice').id,
        quantity: 100,
        unit: Unit.GRAMS,
      },
      {
        recipeId: chickenAndRiceRecipe.id,
        ingredientId: getIngredient('Broccoli').id,
        quantity: 100,
        unit: Unit.GRAMS,
      },
      {
        recipeId: chickenAndRiceRecipe.id,
        ingredientId: getIngredient('Olive Oil').id,
        quantity: 10,
        unit: Unit.MILLILITRES,
      },
    ],
  });

  // Another simple recipe: Apple Snack
  const appleSnackRecipe = await prisma.recipe.create({
    data: {
      title: 'Apple Snack',
      description: 'Sliced apple as a quick snack',
      servings: 1,
      createdById: adminUser.id,
    },
  });

  await prisma.recipeIngredient.create({
    data: {
      recipeId: appleSnackRecipe.id,
      ingredientId: getIngredient('Apple').id,
      quantity: 150,
      unit: Unit.GRAMS,
    },
  });

  // The requested recipe
  const requestedRecipe = await prisma.recipe.create({
    data: {
      title: 'Potato & Chicken Bake with Spices and Sauce',
      description:
        'A flavorful dish with potatoes, chicken, spices, and BBQ sauce.',
      servings: 4,
      createdById: adminUser.id,
    },
  });

  // Now add the RecipeIngredients for the requested recipe
  // Approximations:
  // 900g potatoes
  // 1 tsp ~ 5g for dry spices, 5 ml for olive oil
  // 1 Tbsp honey ~ 15g
  // 4 garlic cloves ~ 12g total
  await prisma.recipeIngredient.createMany({
    data: [
      // 900g Peeled & Diced Potatoes
      {
        recipeId: requestedRecipe.id,
        ingredientId: getIngredient(
          'Peeled & Diced Potatoes (Spud Lite Potatoes)',
        ).id,
        quantity: 900,
        unit: Unit.GRAMS,
      },
      // 1 Tsp Olive Oil (5ml)
      {
        recipeId: requestedRecipe.id,
        ingredientId: getIngredient('Olive Oil').id,
        quantity: 5,
        unit: Unit.MILLILITRES,
      },
      // 1 Tsp Garlic Powder, Oregano, Smoked Paprika & Salt (each 5g)
      {
        recipeId: requestedRecipe.id,
        ingredientId: getIngredient('Garlic Powder').id,
        quantity: 5,
        unit: Unit.GRAMS,
      },
      {
        recipeId: requestedRecipe.id,
        ingredientId: getIngredient('Oregano').id,
        quantity: 5,
        unit: Unit.GRAMS,
      },
      {
        recipeId: requestedRecipe.id,
        ingredientId: getIngredient('Smoked Paprika').id,
        quantity: 5,
        unit: Unit.GRAMS,
      },
      {
        recipeId: requestedRecipe.id,
        ingredientId: getIngredient('Salt').id,
        quantity: 5,
        unit: Unit.GRAMS,
      },
      // 900g Diced Chicken Breast
      {
        recipeId: requestedRecipe.id,
        ingredientId: getIngredient('Chicken Breast').id,
        quantity: 900,
        unit: Unit.GRAMS,
      },
      // 1 Tsp Smoked Paprika, Onion Powder, Garlic Powder & Salt (each 5g again)
      {
        recipeId: requestedRecipe.id,
        ingredientId: getIngredient('Smoked Paprika').id,
        quantity: 5,
        unit: Unit.GRAMS,
      },
      {
        recipeId: requestedRecipe.id,
        ingredientId: getIngredient('Onion Powder').id,
        quantity: 5,
        unit: Unit.GRAMS,
      },
      {
        recipeId: requestedRecipe.id,
        ingredientId: getIngredient('Garlic Powder').id,
        quantity: 5,
        unit: Unit.GRAMS,
      },
      {
        recipeId: requestedRecipe.id,
        ingredientId: getIngredient('Salt').id,
        quantity: 5,
        unit: Unit.GRAMS,
      },
      // 4 Diced Garlic Cloves ~12g
      {
        recipeId: requestedRecipe.id,
        ingredientId: getIngredient('Garlic Cloves').id,
        quantity: 12,
        unit: Unit.GRAMS,
      },
      // 1 Tsp Olive Oil again (5ml)
      {
        recipeId: requestedRecipe.id,
        ingredientId: getIngredient('Olive Oil').id,
        quantity: 5,
        unit: Unit.MILLILITRES,
      },
      // 90g BBQ Sauce
      {
        recipeId: requestedRecipe.id,
        ingredientId: getIngredient('BBQ Sauce').id,
        quantity: 90,
        unit: Unit.GRAMS,
      },
      // 1 Tbsp Honey = 15g
      {
        recipeId: requestedRecipe.id,
        ingredientId: getIngredient('Honey').id,
        quantity: 15,
        unit: Unit.GRAMS,
      },
      // 100g Light/Low Fat Cheese
      {
        recipeId: requestedRecipe.id,
        ingredientId: getIngredient('Light/Low Fat Cheese').id,
        quantity: 100,
        unit: Unit.GRAMS,
      },
    ],
  });

  // Update nutrition for all recipes (optional)
  await updateRecipeNutrition(chickenAndRiceRecipe.id);
  await updateRecipeNutrition(appleSnackRecipe.id);
  await updateRecipeNutrition(requestedRecipe.id);

  console.log('Seeded data successfully!');
}

// A helper function to recalculate and update the total nutrition of a recipe
async function updateRecipeNutrition(recipeId: string) {
  const recipe = await prisma.recipe.findUnique({
    where: { id: recipeId },
    include: {
      recipeIngredients: {
        include: { ingredient: true },
      },
    },
  });

  if (!recipe) return;

  let totalCalories = 0;
  let totalProtein = 0;
  let totalCarbs = 0;
  let totalFats = 0;

  for (const ri of recipe.recipeIngredients) {
    const factor = ri.quantity / ri.ingredient.perUnitBasis;
    totalCalories += ri.ingredient.calories * factor;
    totalProtein += ri.ingredient.protein * factor;
    totalCarbs += ri.ingredient.carbohydrates * factor;
    totalFats += ri.ingredient.fats * factor;
  }

  await prisma.recipe.update({
    where: { id: recipeId },
    data: {
      totalCalories,
      totalProtein,
      totalCarbohydrates: totalCarbs,
      totalFats,
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
