/*
  Warnings:

  - You are about to alter the column `price_per_unit` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "price_per_unit" SET DATA TYPE INTEGER;
