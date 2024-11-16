import jwt, { JwtPayload } from 'jsonwebtoken';
import env from '../config/env';

const SECRET_KEY = env.JWT_SECRET || 'supersecretkey';

export const generateToken = (userId: number): string => 
  jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' });


export const verifyToken = (token: string): JwtPayload => {
  try {
    return jwt.verify(token, SECRET_KEY) as JwtPayload;
  } catch (err) {
    throw new Error('Invalid or expired token');
  }
};
