import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import OrderService from "@src/services/OrderService";
import { IOrder } from "@src/models/Order";
import { IReq, IRes } from "./types/express/misc";

// **** Functions **** //

/**
 * Get all orders.
 */
async function getAll(_: IReq, res: IRes) {
  const orders = await OrderService.getAll();
  return res.status(HttpStatusCodes.OK).json({ orders });
}

/**
 * Add one order.
 */
async function add(req: IReq<{ order: IOrder }>, res: IRes) {
  const { order } = req.body;
  await OrderService.addOne(order);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one order.
 */
async function update(req: IReq<{ order: IOrder }>, res: IRes) {
  const { order } = req.body;
  await OrderService.updateOne(order);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one order.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await OrderService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}

// **** Export default **** //

export default {
  getAll,
  add,
  update,
  delete: delete_,
} as const;
