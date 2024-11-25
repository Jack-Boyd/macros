-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "BMR" INTEGER,
ADD COLUMN     "TDEE" INTEGER,
ADD COLUMN     "gender" "Gender";
