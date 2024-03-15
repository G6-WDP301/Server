import express from "express";
import tourController from "../controllers/tour.js";

const tourRouter = express.Router();

tourRouter.post("/create",tourController.createTour)
tourRouter.delete("/delete",tourController.deleteTour)
tourRouter.get("/find-all",tourController.findAll)
tourRouter.get("/search",tourController.findByTourName)
tourRouter.get("/:id",tourController.findATour)
tourRouter.put("/change_status",tourController.changeStatusTour)
tourRouter.put("/update/:id",tourController.updateTour)
tourRouter.post("/get-list-search-tour",tourController.findTourWithStartAndEnd)




export default tourRouter