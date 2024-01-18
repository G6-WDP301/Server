import tourRepository from "../repositories/tour.js";

const tourController = {
    createTour : async (req,resp) => {
        try {
           const tourSaved = await tourRepository.createTour(req.body);
            return resp.status(200).json({
                success : true,
                tourSaved  
            })
        } catch (error) {
            return resp.status(400).json({ success: false, error: error.message });
        }
    },
    deleteTour : async (req,resp) => {
        try {
            const {tour_id} = req.body;
            const tourDeleted = await tourRepository.deleteTour(tour_id);
            if(tourDeleted.deletedCount == 1){
                return resp.status(200).json({
                    success : true,
                    message : "Deleted successfully !"
                })
            }else{
                return resp.status(400).json({
                    success : false,
                    message : "ID not exist !"
                });
            }
        } catch (error) {
            return resp.status(400).json({ success: false, error: error.message });
        }
    },
    findAll : async (req,resp) => {
        try {
            const tours = await tourRepository.findAll();
            return resp.status(200).json({
                success : true,
                tours
            });
        } catch (error) {
            return resp.status(400).json({ success: false, error: error.message });
        }
    }
}

export default tourController