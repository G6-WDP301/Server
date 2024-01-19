import Schedule from "../models/schedule.js";
import Tour from "../models/tour.js"
const tourRepository = {
    createTour : async (tourInfor) => {
        try {
            const {tour_name,tour_description,tour_price,tour_img,max_tourist,start_date,start_position,end_position,duration,tour_transportion} = tourInfor;
            const tourSaved = await Tour.create({
                tour_name ,
                tour_description ,
                tour_price ,
                tour_img ,
                max_tourist ,
                start_date ,
                duration,
                start_position,
                end_position,
                tour_transportion,
            });
            return tourSaved;
        } catch (error) {
            throw new Error(error);
        }
    },
    deleteTour : async (tour_id) => {
        try {
            await Schedule.deleteMany({tour_id});
            const tourDeleted = await Tour.deleteOne({_id : tour_id});
            return tourDeleted;
        } catch (error) {
            throw new Error(error);
        }
    },
    findAll : async () => {
        try {
            const tours = await Tour.find().populate(["start_position","end_position"]);
           return tours;
        } catch (error) {
            throw new Error(error);
        }
    },
    findATour : async (tour_id) => {
        try {
            const tour = await Tour.findById(tour_id).populate(["start_position","end_position","tour_transportion"]);
            const scheduleOfTour = await Schedule.find({tour_id});
            return {
                tour,
                scheduleOfTour
            };
        } catch (error) {
            throw new Error(error);
        }
    },
    changeStatusTour : async (status,tour_id) => {
        try {
            const tourUpdated = await Tour.updateOne({_id : tour_id},{
                status : status
            })
            return tourUpdated;
        } catch (error) {
            throw new Error(error);
        }
    }
}
export default tourRepository