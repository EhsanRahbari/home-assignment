import { Router } from "express";
import Paths from "../../constants/Paths";
import ProductRoutes from "../ProductRoutes";

const productRouter = Router();

// Get all products
productRouter.get(Paths.Product.Get, ProductRoutes.getAll);

// Add one product
productRouter.post(Paths.Product.Add, ProductRoutes.add);

// Update one product
productRouter.put(Paths.Product.Update, ProductRoutes.update);

// Delete one product
productRouter.delete(Paths.Product.Delete, ProductRoutes.delete);

export default productRouter;
