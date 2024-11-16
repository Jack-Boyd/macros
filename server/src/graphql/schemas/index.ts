import { mergeTypeDefs } from '@graphql-tools/merge';

import { userDefs } from './user';
import { nutrientDefs } from './nutrients';

const typeDefs = mergeTypeDefs([userDefs, nutrientDefs]);

export default typeDefs;
