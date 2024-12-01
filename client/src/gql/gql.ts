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
    "\n  mutation CreateIngredient($name: String!, $description: String!, $calories: Float!, $protein: Float!, $carbohydrates: Float!, $fats: Float!, $fiber: Float, $sugar: Float) {\n    createIngredient(name: $name, description: $description, calories: $calories, protein: $protein, carbohydrates: $carbohydrates, fats: $fats, fiber: $fiber, sugar: $sugar) {\n      id\n      name\n      description\n      calories\n      protein\n      carbohydrates\n      fats\n      fiber\n      sugar\n      createdBy {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n": types.CreateIngredientDocument,
    "\n  query Ingredients {\n    ingredients {\n      id\n      name\n      description\n      calories\n      protein\n      carbohydrates\n      fats\n      fiber\n      sugar\n      createdBy {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n": types.IngredientsDocument,
    "\n  mutation UpdateUser($firstName: String, $lastName: String, $age: Int, $height: Float, $weight: Float, $gender: Gender) {\n    updateUser(firstName: $firstName, lastName: $lastName, age: $age, height: $height, weight: $weight, gender: $gender) {\n      id\n      firstName\n      lastName\n      age\n      height\n      weight\n      gender\n      profileComplete\n    }\n  }\n": types.UpdateUserDocument,
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
export function graphql(source: "\n  mutation CreateIngredient($name: String!, $description: String!, $calories: Float!, $protein: Float!, $carbohydrates: Float!, $fats: Float!, $fiber: Float, $sugar: Float) {\n    createIngredient(name: $name, description: $description, calories: $calories, protein: $protein, carbohydrates: $carbohydrates, fats: $fats, fiber: $fiber, sugar: $sugar) {\n      id\n      name\n      description\n      calories\n      protein\n      carbohydrates\n      fats\n      fiber\n      sugar\n      createdBy {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateIngredient($name: String!, $description: String!, $calories: Float!, $protein: Float!, $carbohydrates: Float!, $fats: Float!, $fiber: Float, $sugar: Float) {\n    createIngredient(name: $name, description: $description, calories: $calories, protein: $protein, carbohydrates: $carbohydrates, fats: $fats, fiber: $fiber, sugar: $sugar) {\n      id\n      name\n      description\n      calories\n      protein\n      carbohydrates\n      fats\n      fiber\n      sugar\n      createdBy {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Ingredients {\n    ingredients {\n      id\n      name\n      description\n      calories\n      protein\n      carbohydrates\n      fats\n      fiber\n      sugar\n      createdBy {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"): (typeof documents)["\n  query Ingredients {\n    ingredients {\n      id\n      name\n      description\n      calories\n      protein\n      carbohydrates\n      fats\n      fiber\n      sugar\n      createdBy {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUser($firstName: String, $lastName: String, $age: Int, $height: Float, $weight: Float, $gender: Gender) {\n    updateUser(firstName: $firstName, lastName: $lastName, age: $age, height: $height, weight: $weight, gender: $gender) {\n      id\n      firstName\n      lastName\n      age\n      height\n      weight\n      gender\n      profileComplete\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUser($firstName: String, $lastName: String, $age: Int, $height: Float, $weight: Float, $gender: Gender) {\n    updateUser(firstName: $firstName, lastName: $lastName, age: $age, height: $height, weight: $weight, gender: $gender) {\n      id\n      firstName\n      lastName\n      age\n      height\n      weight\n      gender\n      profileComplete\n    }\n  }\n"];
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