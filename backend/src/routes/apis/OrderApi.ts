import { Router } from "express";
import Paths from "../../constants/Paths";
import OrderRoutes from "../OrderRoutes";

const orderRouter = Router();

// Get all orders
orderRouter.get(Paths.Order.Get, OrderRoutes.getAll);

// Add one order
orderRouter.post(Paths.Order.Add, OrderRoutes.add);

// Update one order
orderRouter.put(Paths.Order.Update, OrderRoutes.update);

// Delete one order
orderRouter.delete(Paths.Order.Delete, OrderRoutes.delete);

export default orderRouter;
