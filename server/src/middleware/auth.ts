import { RequestHandler } from "express";
import type { JwtPayload } from 'jsonwebtoken';

import { Request } from '../@types/express';
import { verifyToken } from '../utils/jwt-utils';

const authMiddleware: RequestHandler = (req: Request, res, next): void => {
  const authHeader = req.headers.authorization;
  console.log('AUTH', authHeader);
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    try {
      const decoded: JwtPayload = verifyToken(token);
      req.user = decoded;
    } catch (err) {
      res.status(401).send('Invalid token');
      return;
    }
  }
  next();
};

export default authMiddleware;