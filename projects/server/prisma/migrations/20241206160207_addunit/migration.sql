-- CreateEnum
CREATE TYPE "Unit" AS ENUM ('GRAMS', 'POUNDS', 'MILLILITRES');

-- AlterTable
ALTER TABLE "Ingredient" ADD COLUMN     "unit" "Unit" NOT NULL DEFAULT 'GRAMS';
