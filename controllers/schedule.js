import Schedule from "../models/schedule.js";
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
            const dateNow = new Date();
            const date_check = new Date(schedule_date);
            if(date_check < dateNow){
                return resp.status(400).json({
                    success : false,
                    error : "Schedule Date must be greater than now"
                });
            }
            const schedule_tour = await Schedule.find({tour_id});
            if(schedule_tour){
                const last_schedule = await Schedule.findOne({tour_id}).sort({schedule_date : -1});
                if(last_schedule.schedule_date > date_check){
                    return resp.status(400).json({
                        success : false,
                        error : "Schedule Date must be greater than old Schedule !"
                    });
                }
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