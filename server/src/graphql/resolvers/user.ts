import { Response } from 'express';
import { hashPassword, comparePassword } from '../../models/user';
import { Request } from '../../@types/express';
import { calculateBMR } from '../../utils/calorie-calculations';
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

const logout: MutationResolvers['logout'] = async (_: any, __: any, { res }: { res: Response }) => {
  res.cookie('authToken', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: new Date(0),
  });

  return { message: 'Logout successful' };
};

const updateUser: MutationResolvers['updateUser'] = async (
  _: any,
  { firstName, lastName, age, height, weight, gender },
  { req }: { req: Request }
) => {
  const user = req.user;
  if (!user) throw new Error('Not authenticated');

  let bmr = 0;
  if (weight && height && age && gender) {
    bmr = calculateBMR(weight, height, age, gender);
  }
  const updatedUser = await prisma.user.update({
    where: { id: user.userId },
    data: {
      firstName,
      lastName,
      age,
      height,
      weight,
      gender: gender as Gender,
      BMR: bmr,
      profileComplete: true,
    },
  });

  return {
    ...updatedUser,
    role: updatedUser.role as Role,
    gender: updatedUser.gender as Gender,
  };
};

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
  Mutation: {  login, logout, register, updateUser },
  Query: { me },
};
