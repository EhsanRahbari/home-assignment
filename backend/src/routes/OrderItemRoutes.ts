import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import OrderItemService from "@src/services/OrderItemService";
import { IOrderItem } from "@src/models/OrderItem";
import { IReq, IRes } from "./types/express/misc";

// **** Functions **** //

/**
 * Get all customers.
 */
async function getAll(_: IReq, res: IRes) {
  const customers = await OrderItemService.getAll();
  return res.status(HttpStatusCodes.OK).json({ customers });
}

/**
 * Add one customer.
 */
async function add(req: IReq<{ customer: IOrderItem }>, res: IRes) {
  const { customer } = req.body;
  await OrderItemService.addOne(customer);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one customer.
 */
async function update(req: IReq<{ customer: IOrderItem }>, res: IRes) {
  const { customer } = req.body;
  await OrderItemService.updateOne(customer);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one customer.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await OrderItemService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}

// **** Export default **** //

export default {
  getAll,
  add,
  update,
  delete: delete_,
} as const;
