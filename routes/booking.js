import express from "express";
import { BookingController, cancelBookingTour } from "../controllers/index.js";
const bookingRouter = express.Router();

bookingRouter.post("/:id", BookingController.bookTour)
bookingRouter.delete("/cancel/:id", cancelBookingTour)
bookingRouter.get("/all", BookingController.allBooked)
bookingRouter.put("/pay/:id", BookingController.payTicketTour)
export default bookingRouter