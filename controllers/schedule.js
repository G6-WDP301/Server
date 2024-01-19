import { scheduleRepository } from "../repositories/index.js";

const scheduleController = {
    createScheduleOfTour : async (req,resp) => {
        try {
            const {tour_id,schedule_name,schedule_detail,schedule_date} = req.body;
            if(!tour_id || !schedule_name || !schedule_detail || !schedule_date){
                return resp.statsu(400).json({
                    success : false,
                    error : "Can not set field empty !"
                });
            }
            const scheduleSaved = await scheduleRepository.createScheduleOfTour(req.body);
            return resp.status(200).json({
                success : true,
                scheduleSaved
            });
        } catch (error) {
            return resp.status(500).json(error.toString());
        }
    },
    findSchedulesOfTour : async (req,res) => {
        try {
            const {id} = req.params;
            const schedules = await scheduleRepository.findSchedulesOfTour(id);
            if(schedules.length === 0){
                return res.status(400).json({
                    success : false,
                    error : "ID tour is not exist !"
                })
            }
            return res.status(200).json({
                success : true,
                schedules
            });
        } catch (error) {
            return res.status(400).json({
                success : false,
                error : error.message
            });
        }
    }
}

export default scheduleController;