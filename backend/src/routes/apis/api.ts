import { Router } from "express";
import Paths from "../../constants/Paths";
import userApi from "./UserApi";
import customerApi from "./CustomerApi";
import orderApi from "./OrderApi";
import productApi from "./ProductApi";

// **** Variables **** //

const apiRouter = Router();

// ***************

apiRouter.use(Paths.Users.Base, userApi);
apiRouter.use(Paths.Customer.Base, customerApi);
apiRouter.use(Paths.Order.Base, orderApi);
apiRouter.use(Paths.Product.Base, productApi);

// **** Export default **** //

export default apiRouter;
