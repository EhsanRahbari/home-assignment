import OrderRepo from "@src/repos/OrderRepo";
import { IOrder } from "@src/models/Order";
import { RouteError } from "@src/other/classes";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";

// **** Variables **** //

export const ORDER_NOT_FOUND_ERR = "Order not found";

// **** Functions **** //

/**
 * Get all users.
 */
function getAll(): Promise<IOrder[] | undefined> {
  return OrderRepo.getAll();
}

/**
 * Add one Order.
 */
function addOne(Order: IOrder): Promise<IOrder | undefined> {
  return OrderRepo.add(Order);
}

/**
 * Update one Order.
 */
async function updateOne(Order: IOrder): Promise<IOrder | undefined> {
  const result = await OrderRepo.editOrder(Order);
  if (!result) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, ORDER_NOT_FOUND_ERR);
  }
  // Return Order
  return result;
}

/**
 * Delete a Order by their id.
 */
async function _delete(id: number): Promise<IOrder | undefined> {
  const result = await OrderRepo.deleteOrder(id);
  if (!result) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, ORDER_NOT_FOUND_ERR);
  }
  // Delete Order
  return result;
}

// **** Export default **** //

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
