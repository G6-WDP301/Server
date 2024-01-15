import Tour from "../models/tour.js"
const tourRepository = {
    createTour : async (tourInfor) => {
        try {
            const {tour_name,tour_description,tour_price,tour_img,max_tourist,start_date,end_date,start_position,end_postion} = tourInfor;
            const tourSaved = await Tour.create({
                tour_name,
                tour_description,
                tour_price,
                tour_img,
                max_tourist,
                start_date,
                end_date,
                start_position,
                end_postion
            });
            return {
                status : "OK",
                tourSaved
            }
        } catch (error) {
            throw new Error("Have error with data");
        }
    }
}
export default tourRepository