import { Router } from "express";
import Paths from "../../constants/Paths";
import CustomerRoutes from "../CustomerRoutes";

const customerRouter = Router();

// Get all customers
customerRouter.get(Paths.Customer.Get, CustomerRoutes.getAll);

// Add one customer
customerRouter.post(Paths.Customer.Add, CustomerRoutes.add);

// Update one customer
customerRouter.put(Paths.Customer.Update, CustomerRoutes.update);

// Delete one customer
customerRouter.delete(Paths.Customer.Delete, CustomerRoutes.delete);

export default customerRouter;
