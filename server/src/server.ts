import express from 'express';
import { createSchema, createYoga } from 'graphql-yoga'
import dotenv from 'dotenv';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/schemas';
import { authMiddleware } from './middleware/authMiddleware';

dotenv.config();
const app = express();

app.use(authMiddleware as express.RequestHandler);

export const schema = createSchema({
  typeDefs,
  resolvers
});

const yoga = createYoga({ schema });

app.use(yoga.graphqlEndpoint, yoga);
app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql')
});