/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  query AuthStatus {\n    me {\n      id\n      email\n      BMR\n      profileComplete\n    }\n  }\n": types.AuthStatusDocument,
    "\n  mutation Logout {\n    logout {\n      message\n    }\n  }\n": types.LogoutDocument,
    "\n  mutation CreateIngredient(\n    $name: String!\n    $description: String!\n    $unit: Unit!\n    $calories: Float!\n    $protein: Float!\n    $carbohydrates: Float!\n    $fats: Float!\n    $fiber: Float\n    $sugar: Float\n  ) {\n    createIngredient(\n      name: $name\n      description: $description\n      unit: $unit\n      calories: $calories\n      protein: $protein\n      carbohydrates: $carbohydrates\n      fats: $fats\n      fiber: $fiber\n      sugar: $sugar\n    ) {\n      id\n      name\n      description\n      unit\n      calories\n      protein\n      carbohydrates\n      fats\n      fiber\n      sugar\n      createdBy {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n": types.CreateIngredientDocument,
    "\n  query Ingredients {\n    ingredients {\n      id\n      name\n      description\n      unit\n      calories\n      protein\n      carbohydrates\n      fats\n      fiber\n      sugar\n      createdBy {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n": types.IngredientsDocument,
    "\n  mutation CreateRecipe(\n    $title: String!\n    $description: String\n    $servings: Int!\n    $recipeIngredients: [RecipeIngredientInput!]!\n  ) {\n    createRecipe(\n      title: $title\n      description: $description\n      servings: $servings\n      recipeIngredients: $recipeIngredients\n    ) {\n      id\n      title\n      description\n      servings\n      recipeIngredients {\n        id\n        quantity\n        unit\n        ingredient {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.CreateRecipeDocument,
    "\n  query IngredientsInput {\n    ingredients {\n      id\n      name\n    }\n  }\n": types.IngredientsInputDocument,
    "\n  mutation UpdateUser(\n    $firstName: String\n    $lastName: String\n    $age: Int\n    $height: Float\n    $weight: Float\n    $gender: Gender\n  ) {\n    updateUser(\n      firstName: $firstName\n      lastName: $lastName\n      age: $age\n      height: $height\n      weight: $weight\n      gender: $gender\n    ) {\n      id\n      firstName\n      lastName\n      age\n      height\n      weight\n      gender\n      profileComplete\n    }\n  }\n": types.UpdateUserDocument,
    "\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      message\n    }\n  }\n": types.LoginDocument,
    "\n  mutation Register($email: String!, $password: String!) {\n    register(email: $email, password: $password) {\n      message\n    }\n  }\n": types.RegisterDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AuthStatus {\n    me {\n      id\n      email\n      BMR\n      profileComplete\n    }\n  }\n"): (typeof documents)["\n  query AuthStatus {\n    me {\n      id\n      email\n      BMR\n      profileComplete\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Logout {\n    logout {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation Logout {\n    logout {\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateIngredient(\n    $name: String!\n    $description: String!\n    $unit: Unit!\n    $calories: Float!\n    $protein: Float!\n    $carbohydrates: Float!\n    $fats: Float!\n    $fiber: Float\n    $sugar: Float\n  ) {\n    createIngredient(\n      name: $name\n      description: $description\n      unit: $unit\n      calories: $calories\n      protein: $protein\n      carbohydrates: $carbohydrates\n      fats: $fats\n      fiber: $fiber\n      sugar: $sugar\n    ) {\n      id\n      name\n      description\n      unit\n      calories\n      protein\n      carbohydrates\n      fats\n      fiber\n      sugar\n      createdBy {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateIngredient(\n    $name: String!\n    $description: String!\n    $unit: Unit!\n    $calories: Float!\n    $protein: Float!\n    $carbohydrates: Float!\n    $fats: Float!\n    $fiber: Float\n    $sugar: Float\n  ) {\n    createIngredient(\n      name: $name\n      description: $description\n      unit: $unit\n      calories: $calories\n      protein: $protein\n      carbohydrates: $carbohydrates\n      fats: $fats\n      fiber: $fiber\n      sugar: $sugar\n    ) {\n      id\n      name\n      description\n      unit\n      calories\n      protein\n      carbohydrates\n      fats\n      fiber\n      sugar\n      createdBy {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Ingredients {\n    ingredients {\n      id\n      name\n      description\n      unit\n      calories\n      protein\n      carbohydrates\n      fats\n      fiber\n      sugar\n      createdBy {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"): (typeof documents)["\n  query Ingredients {\n    ingredients {\n      id\n      name\n      description\n      unit\n      calories\n      protein\n      carbohydrates\n      fats\n      fiber\n      sugar\n      createdBy {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateRecipe(\n    $title: String!\n    $description: String\n    $servings: Int!\n    $recipeIngredients: [RecipeIngredientInput!]!\n  ) {\n    createRecipe(\n      title: $title\n      description: $description\n      servings: $servings\n      recipeIngredients: $recipeIngredients\n    ) {\n      id\n      title\n      description\n      servings\n      recipeIngredients {\n        id\n        quantity\n        unit\n        ingredient {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateRecipe(\n    $title: String!\n    $description: String\n    $servings: Int!\n    $recipeIngredients: [RecipeIngredientInput!]!\n  ) {\n    createRecipe(\n      title: $title\n      description: $description\n      servings: $servings\n      recipeIngredients: $recipeIngredients\n    ) {\n      id\n      title\n      description\n      servings\n      recipeIngredients {\n        id\n        quantity\n        unit\n        ingredient {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query IngredientsInput {\n    ingredients {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query IngredientsInput {\n    ingredients {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUser(\n    $firstName: String\n    $lastName: String\n    $age: Int\n    $height: Float\n    $weight: Float\n    $gender: Gender\n  ) {\n    updateUser(\n      firstName: $firstName\n      lastName: $lastName\n      age: $age\n      height: $height\n      weight: $weight\n      gender: $gender\n    ) {\n      id\n      firstName\n      lastName\n      age\n      height\n      weight\n      gender\n      profileComplete\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUser(\n    $firstName: String\n    $lastName: String\n    $age: Int\n    $height: Float\n    $weight: Float\n    $gender: Gender\n  ) {\n    updateUser(\n      firstName: $firstName\n      lastName: $lastName\n      age: $age\n      height: $height\n      weight: $weight\n      gender: $gender\n    ) {\n      id\n      firstName\n      lastName\n      age\n      height\n      weight\n      gender\n      profileComplete\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Register($email: String!, $password: String!) {\n    register(email: $email, password: $password) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation Register($email: String!, $password: String!) {\n    register(email: $email, password: $password) {\n      message\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;