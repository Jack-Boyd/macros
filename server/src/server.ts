import express from 'express';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { createSchema, createYoga } from 'graphql-yoga';

import env from './config/env';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/schemas';
import authMiddleware from './middleware/auth';
import errorMiddleware from './middleware/error';
import loggingMiddleware from './middleware/logging';
import notFoundMiddleware from './middleware/not-found';

function createApp() {
  const app = express();
  app.use(cors());
  app.use(compression());
  app.use(cookieParser());
  app.use(loggingMiddleware);
  app.use(authMiddleware);

  app.get('/health', (req, res) => {
    res.send({ status: 'UP' });
  });

  return app;
}

export const schema = createSchema({
  typeDefs,
  resolvers,
});

const yoga = createYoga({ schema, graphiql: true, });

const app = createApp();
app.use(yoga.graphqlEndpoint, yoga);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(env.PORT, () => {
  console.log(`Running a GraphQL API server at http://localhost:${env.PORT}/graphql`);
});
