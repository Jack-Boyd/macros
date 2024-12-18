import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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

export const Gender = {
  Female: 'FEMALE',
  Male: 'MALE'
} as const;

export type Gender = typeof Gender[keyof typeof Gender];
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
  perUnitBasis: Scalars['Int']['output'];
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

export const Role = {
  Admin: 'ADMIN',
  User: 'USER'
} as const;

export type Role = typeof Role[keyof typeof Role];
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

export const Unit = {
  Grams: 'GRAMS',
  Millilitres: 'MILLILITRES',
  Pounds: 'POUNDS'
} as const;

export type Unit = typeof Unit[keyof typeof Unit];
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Gender: Gender;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Ingredient: ResolverTypeWrapper<Ingredient>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  NutrientInfo: ResolverTypeWrapper<NutrientInfo>;
  NutritionData: ResolverTypeWrapper<NutritionData>;
  ParsedIngredient: ResolverTypeWrapper<ParsedIngredient>;
  Query: ResolverTypeWrapper<{}>;
  Recipe: ResolverTypeWrapper<Recipe>;
  RecipeIngredient: ResolverTypeWrapper<RecipeIngredient>;
  RecipeIngredientInput: RecipeIngredientInput;
  Role: Role;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  TotalDaily: ResolverTypeWrapper<TotalDaily>;
  TotalNutrients: ResolverTypeWrapper<TotalNutrients>;
  TotalNutrientsKCal: ResolverTypeWrapper<TotalNutrientsKCal>;
  Unit: Unit;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthPayload: AuthPayload;
  Boolean: Scalars['Boolean']['output'];
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Ingredient: Ingredient;
  Int: Scalars['Int']['output'];
  Mutation: {};
  NutrientInfo: NutrientInfo;
  NutritionData: NutritionData;
  ParsedIngredient: ParsedIngredient;
  Query: {};
  Recipe: Recipe;
  RecipeIngredient: RecipeIngredient;
  RecipeIngredientInput: RecipeIngredientInput;
  String: Scalars['String']['output'];
  TotalDaily: TotalDaily;
  TotalNutrients: TotalNutrients;
  TotalNutrientsKCal: TotalNutrientsKCal;
  User: User;
};

export type AuthPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IngredientResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ingredient'] = ResolversParentTypes['Ingredient']> = {
  calories?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  carbohydrates?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fats?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  fiber?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parsed?: Resolver<Maybe<Array<Maybe<ResolversTypes['ParsedIngredient']>>>, ParentType, ContextType>;
  perUnitBasis?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  protein?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sugar?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unit?: Resolver<ResolversTypes['Unit'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createIngredient?: Resolver<ResolversTypes['Ingredient'], ParentType, ContextType, RequireFields<MutationCreateIngredientArgs, 'calories' | 'carbohydrates' | 'description' | 'fats' | 'name' | 'protein' | 'unit'>>;
  createRecipe?: Resolver<ResolversTypes['Recipe'], ParentType, ContextType, RequireFields<MutationCreateRecipeArgs, 'recipeIngredients' | 'servings' | 'title'>>;
  deleteIngredient?: Resolver<ResolversTypes['Ingredient'], ParentType, ContextType, RequireFields<MutationDeleteIngredientArgs, 'id'>>;
  deleteRecipe?: Resolver<ResolversTypes['Recipe'], ParentType, ContextType, RequireFields<MutationDeleteRecipeArgs, 'id'>>;
  login?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
  logout?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType>;
  register?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'email' | 'password'>>;
  updateIngredient?: Resolver<ResolversTypes['Ingredient'], ParentType, ContextType, RequireFields<MutationUpdateIngredientArgs, 'id'>>;
  updateRecipe?: Resolver<ResolversTypes['Recipe'], ParentType, ContextType, RequireFields<MutationUpdateRecipeArgs, 'id'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationUpdateUserArgs>>;
};

export type NutrientInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['NutrientInfo'] = ResolversParentTypes['NutrientInfo']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NutritionDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['NutritionData'] = ResolversParentTypes['NutritionData']> = {
  calories?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cautions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  co2EmissionsClass?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dietLabels?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  healthLabels?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  ingredients?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ingredient']>>>, ParentType, ContextType>;
  totalCO2Emissions?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalDaily?: Resolver<Maybe<ResolversTypes['TotalDaily']>, ParentType, ContextType>;
  totalNutrients?: Resolver<Maybe<ResolversTypes['TotalNutrients']>, ParentType, ContextType>;
  totalNutrientsKCal?: Resolver<Maybe<ResolversTypes['TotalNutrientsKCal']>, ParentType, ContextType>;
  totalWeight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParsedIngredientResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParsedIngredient'] = ResolversParentTypes['ParsedIngredient']> = {
  food?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  foodId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  foodMatch?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  measure?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  measureURI?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nutrients?: Resolver<Maybe<ResolversTypes['TotalNutrients']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  retainedWeight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getNutritionData?: Resolver<Maybe<ResolversTypes['NutritionData']>, ParentType, ContextType, RequireFields<QueryGetNutritionDataArgs, 'ingredientList'>>;
  ingredient?: Resolver<ResolversTypes['Ingredient'], ParentType, ContextType, RequireFields<QueryIngredientArgs, 'id'>>;
  ingredients?: Resolver<Array<ResolversTypes['Ingredient']>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  recipe?: Resolver<ResolversTypes['Recipe'], ParentType, ContextType, RequireFields<QueryRecipeArgs, 'id'>>;
  recipes?: Resolver<Array<ResolversTypes['Recipe']>, ParentType, ContextType>;
};

export type RecipeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Recipe'] = ResolversParentTypes['Recipe']> = {
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  recipeIngredients?: Resolver<Array<ResolversTypes['RecipeIngredient']>, ParentType, ContextType>;
  servings?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalCalories?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalCarbohydrates?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalFats?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalProtein?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RecipeIngredientResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeIngredient'] = ResolversParentTypes['RecipeIngredient']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ingredient?: Resolver<ResolversTypes['Ingredient'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  unit?: Resolver<ResolversTypes['Unit'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TotalDailyResolvers<ContextType = any, ParentType extends ResolversParentTypes['TotalDaily'] = ResolversParentTypes['TotalDaily']> = {
  CA?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  CHOCDF?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  CHOLE?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  ENERC_KCAL?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  FASAT?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  FAT?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  FE?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  FIBTG?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  FOLDFE?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  K?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  MG?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  NA?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  NIA?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  P?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  PROCNT?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  RIBF?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  THIA?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  TOCPHA?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  VITA_RAE?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  VITB6A?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  VITB12?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  VITC?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  VITD?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  VITK1?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  ZN?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TotalNutrientsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TotalNutrients'] = ResolversParentTypes['TotalNutrients']> = {
  CA?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  CHOCDF?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  CHOLE?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  ENERC_KCAL?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  FAMS?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  FAPU?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  FASAT?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  FAT?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  FATRN?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  FE?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  FIBTG?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  FOLAC?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  FOLDFE?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  FOLFD?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  K?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  MG?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  NA?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  NIA?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  P?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  PROCNT?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  RIBF?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  SUGAR?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  THIA?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  TOCPHA?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  VITA_RAE?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  VITB6A?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  VITB12?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  VITC?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  VITD?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  VITK1?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  WATER?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  ZN?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TotalNutrientsKCalResolvers<ContextType = any, ParentType extends ResolversParentTypes['TotalNutrientsKCal'] = ResolversParentTypes['TotalNutrientsKCal']> = {
  CHOCDF_KCAL?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  ENERC_KCAL?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  FAT_KCAL?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  PROCNT_KCAL?: Resolver<Maybe<ResolversTypes['NutrientInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  BMR?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  TDEE?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Gender']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profileComplete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Ingredient?: IngredientResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NutrientInfo?: NutrientInfoResolvers<ContextType>;
  NutritionData?: NutritionDataResolvers<ContextType>;
  ParsedIngredient?: ParsedIngredientResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Recipe?: RecipeResolvers<ContextType>;
  RecipeIngredient?: RecipeIngredientResolvers<ContextType>;
  TotalDaily?: TotalDailyResolvers<ContextType>;
  TotalNutrients?: TotalNutrientsResolvers<ContextType>;
  TotalNutrientsKCal?: TotalNutrientsKCalResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

