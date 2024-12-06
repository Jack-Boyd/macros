/*
  Warnings:

  - Made the column `description` on table `Ingredient` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Ingredient_name_idx";

-- AlterTable
ALTER TABLE "Ingredient" ALTER COLUMN "description" SET NOT NULL;
