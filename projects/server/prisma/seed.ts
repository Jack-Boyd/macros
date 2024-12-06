import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../src/models/user';
const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await hashPassword('examplepassword');
  await prisma.user.create({
    data: {
      email: `example@example.com`,
      password: hashedPassword,
      role: 'ADMIN',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
