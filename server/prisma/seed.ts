import { PrismaClient } from '@prisma/client'
import { hashPassword } from '../src/models/userModel';
const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await hashPassword('password');
  await prisma.user.create({
    data: {
      email: `email@example.com`,
      password: hashedPassword,
      role: 'ADMIN',
    },
  })
}

main()
  .catch(e => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })