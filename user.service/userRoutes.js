import express from "express";
import * as controller from "./userController.js"//dont need to import one after another, just import all as controler and call what you need with dot and the name of the function you need
//importing template for registration 
import path from "path"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const router = express.Router()


// frontend
router.get("/creation", (req, res) => {

    res.sendFile(path.join(__dirname, "../frontEnd/index.html"))

})

// frontend 


//getting all users
router.get("/",controller.getAllUsers)
//getting user by id
router.get("/:id",controller.getUserById)
//user creation
router.post("/creation", controller.accountCreation)
//user verification
router.post("/verification", controller.verificationAccount)
//user login
router.post("/login", controller.logIn)
//token resend
router.post("/resendToken", controller.resendAuthToken)


export default router