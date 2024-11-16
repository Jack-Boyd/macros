import { mergeResolvers } from '@graphql-tools/merge';

import { userResolvers } from './user';
import { nutrientResolvers } from './nutrients';

export default mergeResolvers([userResolvers, nutrientResolvers]);