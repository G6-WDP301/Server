import express from "express";
import { BookingController } from "../controllers/index.js";
const bookingRouter = express.Router();

bookingRouter.post("/:id",BookingController.bookTour)

export default bookingRouter