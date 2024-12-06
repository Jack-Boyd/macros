/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  message: Scalars['String']['output'];
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type Ingredient = {
  __typename?: 'Ingredient';
  calories: Scalars['Float']['output'];
  carbohydrates: Scalars['Float']['output'];
  createdBy: User;
  description?: Maybe<Scalars['String']['output']>;
  fats: Scalars['Float']['output'];
  fiber?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parsed?: Maybe<Array<Maybe<ParsedIngredient>>>;
  protein: Scalars['Float']['output'];
  sugar?: Maybe<Scalars['Float']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  unit: Unit;
};

export type Mutation = {
  __typename?: 'Mutation';
  createIngredient: Ingredient;
  createRecipe: Recipe;
  deleteIngredient: Ingredient;
  deleteRecipe: Recipe;
  login: AuthPayload;
  logout: AuthPayload;
  register: AuthPayload;
  updateIngredient: Ingredient;
  updateRecipe: Recipe;
  updateUser?: Maybe<User>;
};


export type MutationCreateIngredientArgs = {
  calories: Scalars['Float']['input'];
  carbohydrates: Scalars['Float']['input'];
  description: Scalars['String']['input'];
  fats: Scalars['Float']['input'];
  fiber?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  protein: Scalars['Float']['input'];
  sugar?: InputMaybe<Scalars['Float']['input']>;
  unit: Unit;
};


export type MutationCreateRecipeArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  recipeIngredients: Array<RecipeIngredientInput>;
  servings: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};


export type MutationDeleteIngredientArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRecipeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateIngredientArgs = {
  calories?: InputMaybe<Scalars['Float']['input']>;
  carbohydrates?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fats?: InputMaybe<Scalars['Float']['input']>;
  fiber?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  protein?: InputMaybe<Scalars['Float']['input']>;
  sugar?: InputMaybe<Scalars['Float']['input']>;
  unit?: InputMaybe<Unit>;
};


export type MutationUpdateRecipeArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  recipeIngredients?: InputMaybe<Array<RecipeIngredientInput>>;
  servings?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateUserArgs = {
  age?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  height?: InputMaybe<Scalars['Float']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type NutrientInfo = {
  __typename?: 'NutrientInfo';
  label?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

export type NutritionData = {
  __typename?: 'NutritionData';
  calories?: Maybe<Scalars['Int']['output']>;
  cautions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  co2EmissionsClass?: Maybe<Scalars['String']['output']>;
  dietLabels?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  healthLabels?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ingredients?: Maybe<Array<Maybe<Ingredient>>>;
  totalCO2Emissions?: Maybe<Scalars['Float']['output']>;
  totalDaily?: Maybe<TotalDaily>;
  totalNutrients?: Maybe<TotalNutrients>;
  totalNutrientsKCal?: Maybe<TotalNutrientsKCal>;
  totalWeight?: Maybe<Scalars['Float']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type ParsedIngredient = {
  __typename?: 'ParsedIngredient';
  food?: Maybe<Scalars['String']['output']>;
  foodId?: Maybe<Scalars['String']['output']>;
  foodMatch?: Maybe<Scalars['String']['output']>;
  measure?: Maybe<Scalars['String']['output']>;
  measureURI?: Maybe<Scalars['String']['output']>;
  nutrients?: Maybe<TotalNutrients>;
  quantity?: Maybe<Scalars['Float']['output']>;
  retainedWeight?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getNutritionData?: Maybe<NutritionData>;
  ingredient: Ingredient;
  ingredients: Array<Ingredient>;
  me?: Maybe<User>;
  recipe: Recipe;
  recipes: Array<Recipe>;
};


export type QueryGetNutritionDataArgs = {
  ingredientList: Scalars['String']['input'];
};


export type QueryIngredientArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRecipeArgs = {
  id: Scalars['ID']['input'];
};

export type Recipe = {
  __typename?: 'Recipe';
  createdBy: User;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  recipeIngredients: Array<RecipeIngredient>;
  servings: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  totalCalories?: Maybe<Scalars['Float']['output']>;
  totalCarbohydrates?: Maybe<Scalars['Float']['output']>;
  totalFats?: Maybe<Scalars['Float']['output']>;
  totalProtein?: Maybe<Scalars['Float']['output']>;
};

export type RecipeIngredient = {
  __typename?: 'RecipeIngredient';
  id: Scalars['ID']['output'];
  ingredient: Ingredient;
  quantity: Scalars['Float']['output'];
  unit: Unit;
};

export type RecipeIngredientInput = {
  ingredientId: Scalars['ID']['input'];
  quantity: Scalars['Float']['input'];
  unit: Unit;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type TotalDaily = {
  __typename?: 'TotalDaily';
  CA?: Maybe<NutrientInfo>;
  CHOCDF?: Maybe<NutrientInfo>;
  CHOLE?: Maybe<NutrientInfo>;
  ENERC_KCAL?: Maybe<NutrientInfo>;
  FASAT?: Maybe<NutrientInfo>;
  FAT?: Maybe<NutrientInfo>;
  FE?: Maybe<NutrientInfo>;
  FIBTG?: Maybe<NutrientInfo>;
  FOLDFE?: Maybe<NutrientInfo>;
  K?: Maybe<NutrientInfo>;
  MG?: Maybe<NutrientInfo>;
  NA?: Maybe<NutrientInfo>;
  NIA?: Maybe<NutrientInfo>;
  P?: Maybe<NutrientInfo>;
  PROCNT?: Maybe<NutrientInfo>;
  RIBF?: Maybe<NutrientInfo>;
  THIA?: Maybe<NutrientInfo>;
  TOCPHA?: Maybe<NutrientInfo>;
  VITA_RAE?: Maybe<NutrientInfo>;
  VITB6A?: Maybe<NutrientInfo>;
  VITB12?: Maybe<NutrientInfo>;
  VITC?: Maybe<NutrientInfo>;
  VITD?: Maybe<NutrientInfo>;
  VITK1?: Maybe<NutrientInfo>;
  ZN?: Maybe<NutrientInfo>;
};

export type TotalNutrients = {
  __typename?: 'TotalNutrients';
  CA?: Maybe<NutrientInfo>;
  CHOCDF?: Maybe<NutrientInfo>;
  CHOLE?: Maybe<NutrientInfo>;
  ENERC_KCAL?: Maybe<NutrientInfo>;
  FAMS?: Maybe<NutrientInfo>;
  FAPU?: Maybe<NutrientInfo>;
  FASAT?: Maybe<NutrientInfo>;
  FAT?: Maybe<NutrientInfo>;
  FATRN?: Maybe<NutrientInfo>;
  FE?: Maybe<NutrientInfo>;
  FIBTG?: Maybe<NutrientInfo>;
  FOLAC?: Maybe<NutrientInfo>;
  FOLDFE?: Maybe<NutrientInfo>;
  FOLFD?: Maybe<NutrientInfo>;
  K?: Maybe<NutrientInfo>;
  MG?: Maybe<NutrientInfo>;
  NA?: Maybe<NutrientInfo>;
  NIA?: Maybe<NutrientInfo>;
  P?: Maybe<NutrientInfo>;
  PROCNT?: Maybe<NutrientInfo>;
  RIBF?: Maybe<NutrientInfo>;
  SUGAR?: Maybe<NutrientInfo>;
  THIA?: Maybe<NutrientInfo>;
  TOCPHA?: Maybe<NutrientInfo>;
  VITA_RAE?: Maybe<NutrientInfo>;
  VITB6A?: Maybe<NutrientInfo>;
  VITB12?: Maybe<NutrientInfo>;
  VITC?: Maybe<NutrientInfo>;
  VITD?: Maybe<NutrientInfo>;
  VITK1?: Maybe<NutrientInfo>;
  WATER?: Maybe<NutrientInfo>;
  ZN?: Maybe<NutrientInfo>;
};

export type TotalNutrientsKCal = {
  __typename?: 'TotalNutrientsKCal';
  CHOCDF_KCAL?: Maybe<NutrientInfo>;
  ENERC_KCAL?: Maybe<NutrientInfo>;
  FAT_KCAL?: Maybe<NutrientInfo>;
  PROCNT_KCAL?: Maybe<NutrientInfo>;
};

export enum Unit {
  Grams = 'GRAMS',
  Millilitres = 'MILLILITRES',
  Pounds = 'POUNDS'
}

export type User = {
  __typename?: 'User';
  BMR?: Maybe<Scalars['Int']['output']>;
  TDEE?: Maybe<Scalars['Int']['output']>;
  age?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Gender>;
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  profileComplete?: Maybe<Scalars['Boolean']['output']>;
  role?: Maybe<Role>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type AuthStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthStatusQuery = { __typename?: 'Query', me?: { __typename?: 'User', id?: string | null, email?: string | null, BMR?: number | null, profileComplete?: boolean | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'AuthPayload', message: string } };

export type CreateIngredientMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  unit: Unit;
  calories: Scalars['Float']['input'];
  protein: Scalars['Float']['input'];
  carbohydrates: Scalars['Float']['input'];
  fats: Scalars['Float']['input'];
  fiber?: InputMaybe<Scalars['Float']['input']>;
  sugar?: InputMaybe<Scalars['Float']['input']>;
}>;


export type CreateIngredientMutation = { __typename?: 'Mutation', createIngredient: { __typename?: 'Ingredient', id: string, name: string, description?: string | null, unit: Unit, calories: number, protein: number, carbohydrates: number, fats: number, fiber?: number | null, sugar?: number | null, createdBy: { __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null } } };

export type IngredientsQueryVariables = Exact<{ [key: string]: never; }>;


export type IngredientsQuery = { __typename?: 'Query', ingredients: Array<{ __typename?: 'Ingredient', id: string, name: string, description?: string | null, unit: Unit, calories: number, protein: number, carbohydrates: number, fats: number, fiber?: number | null, sugar?: number | null, createdBy: { __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null } }> };

export type CreateRecipeMutationVariables = Exact<{
  title: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  servings: Scalars['Int']['input'];
  recipeIngredients: Array<RecipeIngredientInput> | RecipeIngredientInput;
}>;


export type CreateRecipeMutation = { __typename?: 'Mutation', createRecipe: { __typename?: 'Recipe', id: string, title: string, description?: string | null, servings: number, recipeIngredients: Array<{ __typename?: 'RecipeIngredient', id: string, quantity: number, unit: Unit, ingredient: { __typename?: 'Ingredient', id: string, name: string } }> } };

export type IngredientsInputQueryVariables = Exact<{ [key: string]: never; }>;


export type IngredientsInputQuery = { __typename?: 'Query', ingredients: Array<{ __typename?: 'Ingredient', id: string, name: string }> };

export type UpdateUserMutationVariables = Exact<{
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  age?: InputMaybe<Scalars['Int']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  gender?: InputMaybe<Gender>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null, age?: number | null, height?: number | null, weight?: number | null, gender?: Gender | null, profileComplete?: boolean | null } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', message: string } };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'AuthPayload', message: string } };


export const AuthStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AuthStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"BMR"}},{"kind":"Field","name":{"kind":"Name","value":"profileComplete"}}]}}]}}]} as unknown as DocumentNode<AuthStatusQuery, AuthStatusQueryVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const CreateIngredientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateIngredient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"unit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Unit"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"calories"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"protein"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"carbohydrates"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fats"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fiber"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sugar"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createIngredient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"unit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"unit"}}},{"kind":"Argument","name":{"kind":"Name","value":"calories"},"value":{"kind":"Variable","name":{"kind":"Name","value":"calories"}}},{"kind":"Argument","name":{"kind":"Name","value":"protein"},"value":{"kind":"Variable","name":{"kind":"Name","value":"protein"}}},{"kind":"Argument","name":{"kind":"Name","value":"carbohydrates"},"value":{"kind":"Variable","name":{"kind":"Name","value":"carbohydrates"}}},{"kind":"Argument","name":{"kind":"Name","value":"fats"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fats"}}},{"kind":"Argument","name":{"kind":"Name","value":"fiber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fiber"}}},{"kind":"Argument","name":{"kind":"Name","value":"sugar"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sugar"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"calories"}},{"kind":"Field","name":{"kind":"Name","value":"protein"}},{"kind":"Field","name":{"kind":"Name","value":"carbohydrates"}},{"kind":"Field","name":{"kind":"Name","value":"fats"}},{"kind":"Field","name":{"kind":"Name","value":"fiber"}},{"kind":"Field","name":{"kind":"Name","value":"sugar"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<CreateIngredientMutation, CreateIngredientMutationVariables>;
export const IngredientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Ingredients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ingredients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"calories"}},{"kind":"Field","name":{"kind":"Name","value":"protein"}},{"kind":"Field","name":{"kind":"Name","value":"carbohydrates"}},{"kind":"Field","name":{"kind":"Name","value":"fats"}},{"kind":"Field","name":{"kind":"Name","value":"fiber"}},{"kind":"Field","name":{"kind":"Name","value":"sugar"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<IngredientsQuery, IngredientsQueryVariables>;
export const CreateRecipeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRecipe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"servings"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recipeIngredients"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RecipeIngredientInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRecipe"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"servings"},"value":{"kind":"Variable","name":{"kind":"Name","value":"servings"}}},{"kind":"Argument","name":{"kind":"Name","value":"recipeIngredients"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recipeIngredients"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"servings"}},{"kind":"Field","name":{"kind":"Name","value":"recipeIngredients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"ingredient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateRecipeMutation, CreateRecipeMutationVariables>;
export const IngredientsInputDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IngredientsInput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ingredients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<IngredientsInputQuery, IngredientsInputQueryVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"age"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"height"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"weight"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gender"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Gender"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"Argument","name":{"kind":"Name","value":"age"},"value":{"kind":"Variable","name":{"kind":"Name","value":"age"}}},{"kind":"Argument","name":{"kind":"Name","value":"height"},"value":{"kind":"Variable","name":{"kind":"Name","value":"height"}}},{"kind":"Argument","name":{"kind":"Name","value":"weight"},"value":{"kind":"Variable","name":{"kind":"Name","value":"weight"}}},{"kind":"Argument","name":{"kind":"Name","value":"gender"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gender"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"profileComplete"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;