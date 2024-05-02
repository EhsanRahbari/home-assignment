import OrderItemRepo from "@src/repos/OrderItemRepo";
import { IOrderItem } from "@src/models/OrderItem";
import { RouteError } from "@src/other/classes";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";

// **** Variables **** //

export const ORDERITEM_NOT_FOUND_ERR = "orderItem not found";

// **** Functions **** //

/**
 * Get all orderItems.
 */
function getAll(): Promise<IOrderItem[] | undefined> {
  return OrderItemRepo.getAll();
}

/**
 * Add one orderItem.
 */
function addOne(orderItem: IOrderItem): Promise<IOrderItem | undefined> {
  return OrderItemRepo.add(orderItem);
}

/**
 * Update one orderItem.
 */
async function updateOne(orderItem: IOrderItem): Promise<IOrderItem | void> {
  const result = await OrderItemRepo.edit(orderItem);
  if (!result) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, ORDERITEM_NOT_FOUND_ERR);
  }
  // Return orderItem
  return result;
}

/**
 * Delete a orderItem by their id.
 */
async function _delete(id: number): Promise<IOrderItem | void> {
  const result = await OrderItemRepo.deleteorderItem(id);
  if (!result) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, ORDERITEM_NOT_FOUND_ERR);
  }
  // Delete orderItem
  return result;
}

// **** Export default **** //

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
