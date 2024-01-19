import express from "express";
import tourController from "../controllers/tour.js";

const tourRouter = express.Router();

tourRouter.post("/create",tourController.createTour)
tourRouter.delete("/delete",tourController.deleteTour)
tourRouter.get("/find-all",tourController.findAll)
tourRouter.get("/:id",tourController.findATour)
tourRouter.put("/change_status",tourController.changeStatusTour)


export default tourRouter