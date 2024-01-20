import express from "express";
import { userController } from "../controllers/index.js";

const userRouter = express.Router();

userRouter.post("/create",userController.createAccount);
userRouter.post("/login",userController.loginAccount);


export default userRouter;