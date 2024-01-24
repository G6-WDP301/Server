import express from "express";
import { paymentController } from "../controllers/index.js";
const paymentRouter = express.Router();

paymentRouter.post("/pay",paymentController.createPayment)

export default paymentRouter