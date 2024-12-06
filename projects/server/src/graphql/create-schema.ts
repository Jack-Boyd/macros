import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { createSchema, createYoga } from 'graphql-yoga';
import path from 'path';

import { __projectRoot } from '../utils/paths';
import { userResolvers } from './resolvers/user';
import { nutrientResolvers } from './resolvers/nutrients';
import { ingredientResolvers } from './resolvers/ingredients';
import { recipeResolvers } from './resolvers/recipes';

const typesArray = loadFilesSync(
  path.join(__projectRoot, 'src/graphql/schemas'),
  { extensions: ['graphql'] },
);
const typeDefs = mergeTypeDefs(typesArray);

const resolvers = mergeResolvers([
  userResolvers,
  nutrientResolvers,
  ingredientResolvers,
  recipeResolvers,
]);

const schema = createSchema({ typeDefs, resolvers });

export default schema;
