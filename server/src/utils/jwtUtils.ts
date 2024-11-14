import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'supersecretkey';

export const generateToken = (userId: number): string => 
  jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' });


export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    throw new Error('Invalid or expired token');
  }
};
