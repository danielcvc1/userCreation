import router from "./user.service/userRoutes.js"
import express from "express"
import morgan from "morgan";
import orderController from "./order/order.routes.js"

export const app = express();


//middleware
app.use(express.json());
app.use(morgan("dev"))


//routs 
app.use("/user",router)
app.use("/orders",orderController)

