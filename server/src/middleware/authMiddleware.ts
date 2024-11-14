import { NextFunction, Response } from "express";
import type { JwtPayload } from 'jsonwebtoken';

import { Request } from '../@types/express';
import { verifyToken } from '../utils/jwtUtils';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    try {
      const decoded: JwtPayload = verifyToken(token) as JwtPayload;
      req.user = decoded;
    } catch (err) {
      return res.status(401).send('Invalid token');
    }
  }
  next();
};