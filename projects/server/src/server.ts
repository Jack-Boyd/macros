import express from 'express';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { createYoga } from 'graphql-yoga';
import env from './config/env';
import schema from './graphql/create-schema';
import authMiddleware from './middleware/auth';
import errorMiddleware from './middleware/error';
import loggingMiddleware from './middleware/logging';
import notFoundMiddleware from './middleware/not-found';
import tokenMiddleware from './middleware/token';

function createApp() {
  const app = express();
  app.use(cookieParser());
  app.use(
    cors({
      origin: 'http://localhost:5173',
      credentials: true,
    }),
  );
  app.use(compression());
  app.use(loggingMiddleware);
  app.use(tokenMiddleware);
  app.use(authMiddleware);

  app.get('/health', (req, res) => {
    res.send({ status: 'UP' });
  });

  return app;
}

const yoga = createYoga({ schema });

const app = createApp();
app.use(yoga.graphqlEndpoint, yoga);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(env.PORT, () => {
  console.log(
    `Running a GraphQL API server at http://localhost:${env.PORT}/graphql`,
  );
});

process.on('SIGINT', () => {
  console.log('Shutting down gracefully...');
  process.exit(0);
});
