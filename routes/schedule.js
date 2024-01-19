import express from "express";
import { scheduleController } from "../controllers/index.js";

const scheduleRouter = express.Router();

scheduleRouter.post('/create',scheduleController.createScheduleOfTour);
scheduleRouter.get('/:id',scheduleController.findSchedulesOfTour);
scheduleRouter.delete('/delete/:id',scheduleController.deleteSchedule);

export default scheduleRouter;