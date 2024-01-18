import Schedule from "../models/schedule.js"
const scheduleRepository = {
    createScheduleOfTour : async (scheduleInfor) => {
        try {
            const {tour_id,schedule_name,schedule_detail,schedule_date} = scheduleInfor;
            const scheduleSaved = await Schedule.create({
                schedule_name,
                schedule_detail,
                schedule_date,
                tour_id
            })
            return {
                status : "OK",
                scheduleSaved
            };
        } catch (error) {
            throw new Error(error);
        }
    },
    findSchedulesOfTour : async (tour_id) => {
        try {
            const schedules = await Schedule.find({tour_id});
            return schedules;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default scheduleRepository;