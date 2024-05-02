import { Router } from "express";
import Paths from "../../constants/Paths";
import OrderItemRoutes from "../OrderItemRoutes";

const orderitemRouter = Router();

// Get all orderitems
orderitemRouter.get(Paths.OrderItem.Get, OrderItemRoutes.getAll);

// Add one orderitem
orderitemRouter.post(Paths.OrderItem.Add, OrderItemRoutes.add);

// Update one orderitem
orderitemRouter.put(Paths.OrderItem.Update, OrderItemRoutes.update);

// Delete one orderitem
orderitemRouter.delete(Paths.OrderItem.Delete, OrderItemRoutes.delete);

export default orderitemRouter;
