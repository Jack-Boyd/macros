import { PrismaClient } from '@prisma/client';

import { hashPassword, comparePassword } from '../models/userModel';
import { Request } from '../@types/express';
import { generateToken } from '../utils/jwtUtils';

const prisma = new PrismaClient();

export const resolvers = {
  Mutation: {
    register: async (_: any, { email, password }: { email: string; password: string }) => {
      const hashedPassword = await hashPassword(password);
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });
      return { token: generateToken(user.id) };
    },
    login: async (_: any, { email, password }: { email: string; password: string }) => {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user || !(await comparePassword(password, user.password))) {
        throw new Error('Invalid credentials');
      }
      return { token: generateToken(user.id) };
    },
  },
  Query: {
    me: async (_: any, __: any, { req }: { req: Request }) => {
      const user = req.user;
      if (!user) throw new Error('Not authenticated');
      return prisma.user.findUnique({ where: { id: user.userId } });
    },
  },
};
