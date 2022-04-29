import express from "express";
// import {accountCreation,logIn,rresendToken,verificationAccount} from "./userController.js"
import * as controller from "./userController.js"

const router=express.Router()


//user creation
router.post("/creation",controller.accountCreation)
//user verification
router.post("/verification",controller.verificationAccount)
//user login
router.post("/login",controller.logIn)
//token resend
router.post("/resendToken",controller.resendAuthToken)


export default router