import ProductRepo from "@src/repos/ProductRepo";
import { IProduct } from "@src/models/Product";
import { RouteError } from "@src/other/classes";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";

// **** Variables **** //

export const PRODUCT_NOT_FOUND_ERR = "product not found";

// **** Functions **** //

/**
 * Get all users.
 */
function getAll(): Promise<IProduct[] | undefined> {
  return ProductRepo.getAll();
}

/**
 * Add one user.
 */
function addOne(user: IProduct): Promise<IProduct | undefined> {
  return ProductRepo.add(user);
}

/**
 * Update one user.
 */
async function updateOne(user: IProduct): Promise<IProduct | undefined> {
  const result = await ProductRepo.edit(user);
  if (!result) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, PRODUCT_NOT_FOUND_ERR);
  }
  // Return Product
  return result;
}

/**
 * Delete a user by their id.
 */
async function _delete(product: IProduct): Promise<IProduct | undefined> {
  const result = await ProductRepo.deleteProduct(product);
  if (!result) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, PRODUCT_NOT_FOUND_ERR);
  }
  // Delete user
  return result;
}

// **** Export default **** //

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
