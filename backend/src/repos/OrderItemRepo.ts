import prisma from "./orm";
import { IOrderItem } from "@src/models/OrderItem";

async function add(orderItem: IOrderItem) {
  try {
    const result = await prisma.orderItem.create({
      data: orderItem,
    });
    return result;
  } catch (error) {
    console.error("Error in Creating a orderItem", error);
  }
}

async function getAll() {
  try {
    const result = await prisma.orderItem.findMany();
    return result;
  } catch (error) {
    console.error("Error in Getting All orderItems", error);
  }
}

async function getOne(orderItemId: number) {
  try {
    const result = await prisma.orderItem.findFirst({
      where: {
        id: orderItemId,
      },
    });
    return result;
  } catch (error) {
    console.error("Error in Getting One orderItem", error);
  }
}

async function edit(editedorderItem: IOrderItem) {
  try {
    const result = await prisma.orderItem.update({
      where: {
        id: editedorderItem.id,
      },
      data: editedorderItem,
    });
    return result;
  } catch (error) {
    console.error("Error in Editing the orderItem", error);
  }
}

async function deleteorderItem(orderItemId: number) {
  try {
    const result = await prisma.orderItem.delete({
      where: {
        id: orderItemId,
      },
    });
    return result;
  } catch (error) {
    console.error("Error in Deleting orderItem", error);
  }
}

export default {
  add,
  getOne,
  getAll,
  edit,
  deleteorderItem,
} as const;
