import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err, _, res): void => {
  console.error(err.stack);
  res.status(500).send({
    error: {
      message: 'Internal Server Error',
      details: err.message,
    },
  });
};

export default errorMiddleware;
