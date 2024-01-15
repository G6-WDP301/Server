import express from "express";
import tourController from "../controllers/tour.js";

const tourRouter = express.Router();

tourRouter.post("/create",tourController.createTour)

export default tourRouter