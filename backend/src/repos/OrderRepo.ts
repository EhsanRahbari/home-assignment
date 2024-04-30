import { IOrder } from "@src/models/Order";
import prisma from "./orm";

async function getOne(orderId: number) {
  try {
    const result = prisma.order.findFirst({
      where: {
        id: orderId,
      },
    });
    return result;
  } catch (error) {
    console.error("Error in Getting Order", error);
  }
}

async function getAll() {
  try {
    const result = await prisma.order.findMany();
    return result;
  } catch (error) {
    console.error("Error in Getting Orders", error);
  }
}

async function editOrder(editedOrder: IOrder) {
  try {
    const result = await prisma.order.update({
      where: {
        id: editedOrder.id,
      },
      data: editedOrder,
    });
    return result;
  } catch (error) {
    console.error("Error in Editing the Order", error);
  }
}

async function deleteOrder(orderId: number) {
  try {
    const result = prisma.order.delete({
      where: {
        id: orderId,
      },
    });
  } catch (error) {
    console.error("Error in Deleting the Order", error);
  }
}

export { getOne, getAll, editOrder, deleteOrder };
