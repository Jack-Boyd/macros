import { Response } from 'express';
import { hashPassword, comparePassword } from '../../models/user';
import { Request } from '../../@types/express';
import { generateToken } from '../../utils/jwt-utils';
import { MutationResolvers, QueryResolvers, Resolvers, Role, Gender } from './generated';
import prisma from '../../config/db';

const login: MutationResolvers['login'] =  async (_: any, { email, password }: { email: string; password: string }, { res }: { res: Response }) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await comparePassword(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  const token = generateToken(user.id);
  res.cookie('authToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 3600000,
  });
  return { message: 'Login successful' };
};

const register: MutationResolvers['register'] = async (_: any, { email, password }: { email: string; password: string }, { res }: { res: Response }) => {
  const hashedPassword = await hashPassword(password);
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role: 'USER',
    },
  });
  const token = generateToken(user.id);
  res.cookie('authToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 3600000,
  });
  return { message: 'Registration successful' };    
}

const me: QueryResolvers['me'] = async (_: any, __: any, { req }: { req: Request }) => {
  const user = req.user;
  if (!user) throw new Error('Not authenticated');
  
  const dbUser = await prisma.user.findUnique({ where: { id: user.userId } });
  if (!dbUser) throw new Error('User not found');
  
  return {
    ...dbUser,
    role: dbUser.role as Role,
    gender: dbUser.gender as Gender,
  };
};

export const userResolvers: Resolvers = {
  Mutation: {  login, register },
  Query: { me },
};
