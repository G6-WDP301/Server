import express from "express";
import { BookingController } from "../controllers/index.js";
const bookingRouter = express.Router();

bookingRouter.post("/:id",BookingController.bookTour)
bookingRouter.delete("/cancel/:id",BookingController.cancelBookingTour)
bookingRouter.put("/pay/:id",BookingController.payTicketTour)
export default bookingRouter