import express from "express";
import { BookingController, cancelBookingTour } from "../controllers/index.js";
const bookingRouter = express.Router();

bookingRouter.get("/", BookingController.getTotalBookingByTime)
bookingRouter.post("/:id", BookingController.bookTour)
bookingRouter.delete("/cancel/:id", cancelBookingTour)
bookingRouter.put("/pay/:id", BookingController.payTicketTour)
bookingRouter.get("/all", BookingController.getTourBookedByUserId)


export default bookingRouter