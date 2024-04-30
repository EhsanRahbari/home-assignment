import HttpStatusCodes from "@src/constants/HttpStatusCodes";

import CustomerService from "@src/services/CustomerService";
import { ICustomer } from "@src/models/Customer";
import { IReq, IRes } from "./types/express/misc";

// **** Functions **** //

/**
 * Get all customers.
 */
async function getAll(_: IReq, res: IRes) {
  const customers = await CustomerService.getAll();
  return res.status(HttpStatusCodes.OK).json({ customers });
}

/**
 * Add one customer.
 */
async function add(req: IReq<{ customer: ICustomer }>, res: IRes) {
  const { customer } = req.body;
  await CustomerService.addOne(customer);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one customer.
 */
async function update(req: IReq<{ customer: ICustomer }>, res: IRes) {
  const { customer } = req.body;
  await CustomerService.updateOne(customer);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one customer.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await CustomerService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}

// **** Export default **** //

export default {
  getAll,
  add,
  update,
  delete: delete_,
} as const;
