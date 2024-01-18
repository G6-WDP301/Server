import express from "express";
import tourController from "../controllers/tour.js";

const tourRouter = express.Router();

tourRouter.post("/create",tourController.createTour)
tourRouter.delete("/delete",tourController.deleteTour)

tourRouter.get("/find-all",tourController.findAll)

export default tourRouter