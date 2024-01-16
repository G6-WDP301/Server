import Tour from "../models/tour.js"
const tourRepository = {
    createTour : async (tourInfor) => {
        try {
            const {tour_name,tour_description,tour_price,tour_img,max_tourist,start_date,start_position,end_position,duration} = tourInfor;
            const tourSaved = await Tour.create({
                tour_name ,
                tour_description ,
                tour_price ,
                tour_img ,
                max_tourist ,
                start_date ,
                duration,
                start_position,
                end_position
            });
            return {
                status : "OK",
                tourSaved
            }
        } catch (error) {
            throw new Error("Have error with data");
        }
    },
    findAll : async () => {
        try {
            const tours = await Tour.find().populate(["start_position","end_position"]);
            return {
                status : "OK",
                tours
            };
        } catch (error) {
            throw new Error("Have error with data");
        }
    }
}
export default tourRepository