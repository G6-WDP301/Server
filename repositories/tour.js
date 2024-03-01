import Schedule from "../models/schedule.js";
import Tour from "../models/tour.js"
const tourRepository = {
    createTour : async (tourInfor) => {
        try {
            const {user_id,tour_name,tour_description,tour_price,tour_img,max_tourist,start_date,end_date,start_position,end_position,duration,tour_transportion,return_status,return_tax} = tourInfor;
            const tourSaved = await Tour.create({
                tour_name ,
                tour_description ,
                tour_price ,
                tour_img ,
                max_tourist ,
                start_date ,
                end_date,
                duration,
                start_position,
                end_position,
                tour_transportion,
                return_status,
                return_tax,
                user_id
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
    },
    updateTour : async (tourInfor,tour_id) => {
        try {
            const tourUpdated = await Tour.updateOne({_id : tour_id},tourInfor);
            return tourUpdated;
        } catch (error) {
            throw new Error(error);
        }
    },
    findTourWithStartAndEnd : async (start_position,end_position,page,size,start_date) => {
        try {
            let tours = [];
            let totalPage = 0;
            let totalDocs = 0;
            let pageCurrent = parseInt(page);
            let pageSize = parseInt(size);
            if(start_position !== "" && end_position !== ""){
                 tours = await Tour.find({
                    start_position,
                    end_position,
                    
                }).populate(["start_position","end_position"]).limit(pageSize).skip(pageSize * (pageCurrent - 1));
                totalDocs = await Tour.countDocuments({
                    start_position,
                    end_position,
                    
                })
            }else if (start_position !== "" && end_position === ""){
                 tours = await Tour.find({
                    start_position,
                    
                }).populate(["start_position","end_position"]).limit(pageSize).skip(pageSize * (pageCurrent - 1));
                totalDocs = await Tour.countDocuments({
                    start_position,
                    start_date : {
                        $gte : start_date ? start_date : ""
                    }
                })
            }else {
                 tours = await Tour.find({
                    end_position,
                    
                }).populate(["start_position","end_position"]).limit(pageSize).skip(pageSize * (pageCurrent - 1));
                totalDocs = await Tour.countDocuments({
                    end_position,
                    
                })
            }
            totalPage = Math.ceil(totalDocs / pageSize);
            return {
                tours,
                totalPage
            };
        } catch (error) {
            throw new Error(error)
        }
    }
}
export default tourRepository