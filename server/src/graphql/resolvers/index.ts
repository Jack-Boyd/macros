import { nutrientResolvers } from './nutrients';
import { userResolvers } from './user';
import { mergeResolvers } from '@graphql-tools/merge';

export default mergeResolvers([userResolvers, nutrientResolvers]);