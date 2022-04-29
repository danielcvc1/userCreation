import router from "./user.service/userRoutes.js"
import express from "express"
import morgan from "morgan";

export const app = express();


//middleware
app.use(express.json());
app.use(morgan("dev"))

//routs 
app.use("/user",router)
