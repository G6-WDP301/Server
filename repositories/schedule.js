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
    }
}

export default scheduleRepository;