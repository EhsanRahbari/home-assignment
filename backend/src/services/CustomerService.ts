import CustomerRepo from "@src/repos/CustomerRepo";
import { ICustomer } from "@src/models/Customer";
import { RouteError } from "@src/other/classes";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";

// **** Variables **** //

export const CUSTOMER_NOT_FOUND_ERR = "customer not found";

// **** Functions **** //

/**
 * Get all customers.
 */
function getAll(): Promise<ICustomer[] | undefined> {
  return CustomerRepo.getAll();
}

/**
 * Add one customer.
 */
function addOne(customer: ICustomer): Promise<ICustomer | undefined> {
  return CustomerRepo.add(customer);
}

/**
 * Update one customer.
 */
async function updateOne(customer: ICustomer): Promise<ICustomer | void> {
  const result = await CustomerRepo.edit(customer);
  if (!result) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, CUSTOMER_NOT_FOUND_ERR);
  }
  // Return customer
  return result;
}

/**
 * Delete a customer by their id.
 */
async function _delete(id: number): Promise<ICustomer | void> {
  const result = await CustomerRepo.deleteCustomer(id);
  if (!result) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, CUSTOMER_NOT_FOUND_ERR);
  }
  // Delete customer
  return result;
}

// **** Export default **** //

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
