import prisma from "./orm";
import { ICustomer } from "@src/models/Customer";

async function add(customer: ICustomer) {
  try {
    const result = await prisma.customer.create({
      data: customer,
    });
    return result;
  } catch (error) {
    console.error("Error in Creating a Customer", error);
  }
}

async function getAll() {
  try {
    const result = await prisma.customer.findMany();
    return result;
  } catch (error) {
    console.error("Error in Getting All Customers", error);
  }
}

async function getOne(customerId: number) {
  try {
    const result = await prisma.customer.findFirst({
      where: {
        id: customerId,
      },
    });
    return result;
  } catch (error) {
    console.error("Error in Getting One Customer", error);
  }
}

async function edit(editedCustomer: ICustomer) {
  try {
    const result = await prisma.customer.update({
      where: {
        id: editedCustomer.id,
      },
      data: editedCustomer,
    });
    return result;
  } catch (error) {
    console.error("Error in Editing the Customer", error);
  }
}

async function deleteCustomer(customerId: number) {
  try {
    const result = await prisma.customer.delete({
      where: {
        id: customerId,
      },
    });
    return result;
  } catch (error) {
    console.error("Error in Deleting Customer", error);
  }
}

export default {
  add,
  getOne,
  getAll,
  edit,
  deleteCustomer,
} as const;
