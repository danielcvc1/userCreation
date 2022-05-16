import express from "express";
import * as controller from "./order.controller.js"

const router=express.Router()

router.post("/orderCreation",controller.newOrder)

export default router