import { scheduleRepository } from "../repositories/index.js";

const scheduleController = {
    createScheduleOfTour : async (req,resp) => {
        try {
            const scheduleSaved = await scheduleRepository.createScheduleOfTour(req.body);
            return resp.status(200).json(scheduleSaved);
        } catch (error) {
            return resp.status(500).json(error.toString());
        }
    }
}

export default scheduleController;