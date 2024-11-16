import { RequestHandler } from 'express';

const notFoundMiddleware: RequestHandler = (req, res) => {
  res.status(404).send({ error: 'Route not found' });
};

export default notFoundMiddleware;