import { Request, Response, NextFunction } from 'express';

// Middleware to extract token from HTTP-only cookie and set it in the Authorization header
const tokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.authToken;
  if (token) {
    req.headers.authorization = `Bearer ${token}`; // Set the token as the Authorization header
  }
  next();
};

export default tokenMiddleware;
