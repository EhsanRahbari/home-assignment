import { IProduct } from "@src/models/Product";
import prisma from "./orm";

async function add(product: IProduct) {
  try {
    const result = await prisma.product.create({
      data: product,
    });
    return result;
  } catch (error) {
    console.error("Error in Creating Product", error);
  }
}

async function getOne(productId: number) {
  try {
    const result = await prisma.product.findFirst({
      where: {
        id: productId,
      },
    });
    return result;
  } catch (error) {
    console.error("Error in Getting one Product ", error);
  }
}

async function getAll() {
  try {
    const result = await prisma.product.findMany();
    return result;
  } catch (error) {
    console.error("Error in Getting All the Products", error);
  }
}

async function edit(product: IProduct) {
  try {
    const result = await prisma.product.update({
      where: {
        id: product.id,
      },
      data: product,
    });
    return result;
  } catch (error) {
    console.error("Error in Editing the product", error);
  }
}

async function deleteProduct(product: IProduct) {
  try {
    const result = await prisma.product.delete({
      where: {
        id: product.id,
      },
    });
    return result;
  } catch (error) {
    console.error("Error in Deleting the product", error);
  }
}

export default { add, getOne, getAll, deleteProduct, edit } as const;
