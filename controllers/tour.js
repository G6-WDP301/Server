import tourRepository from "../repositories/tour.js";
import Validator from "../validator/validator.js";

const tourController = {
    createTour : async (req,resp) => {
        try {
            const {tour_name,tour_description,tour_price,tour_img,max_tourist,start_date,start_position,end_position,duration,tour_transportion} = req.body;
            if(!tour_name || !tour_description  || !tour_img || !max_tourist || !start_date || !start_position || !end_position || !duration || !tour_transportion){
                return resp.status(400).json({
                    success : false,
                    error : "Can not set field empty !"
                });
            }
            if(tour_price < 0){
                return resp.status(400).json({
                    success : false,
                    error : "Can not set Price less than 0 !"
                })
            }
            if(max_tourist <= 0){
                return resp.status(400).json({
                    success : false,
                    error : "max_tourist must be greater than 0 !"
                })
            }
            if(!Validator.checkInputDateWithNow(start_date)){
                return resp.status(400).json({
                    success : false,
                    error : "Start Date must be greater than now !"
                })
            }
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
    },
    findATour : async (req,res) => {
        try {
            const { id } = req.params;
            const tour = await tourRepository.findATour(id);
            if(!tour.tour){
                return res.status(400).json({
                    success : false,
                    error : "ID tour is not exist !"
                })
            }
            return res.status(200).json({
                success : true,
                tour
            })
        } catch (error) {
            return res.status(400).json({
                success : false,
                error : error.message
            })
        }
    },
    changeStatusTour : async (req,resp) => {
        try {
            const {tour_id,status} = req.body;
            const tourUpdated = await tourRepository.changeStatusTour(status,tour_id);
            if(tourUpdated.matchedCount === 0){
                return resp.status(400).json({
                    success : false,
                    error : "ID tour is not exist !"
                });
            }else{
                if(tourUpdated.modifiedCount === 0){
                    return resp.status(400).json({
                        success : false,
                        message : "The tour status already changed !"
                    });
                }else{
                    return resp.status(200).json({
                        success : true,
                        message : "Update successfully !"
                    });
                }
            }
            
        } catch (error) {
            return resp.status(400).json({
                success : false,
                error : error.message
            });
        }
    },
    updateTour : async (req,resp) => {
        const { id } = req.params;
        try {
            const {tour_name,tour_description,tour_price,tour_img,max_tourist,start_date,start_position,end_position,duration,tour_transportion} = req.body;
            if(!tour_name || !tour_description  || !tour_img || !max_tourist || !start_date || !start_position || !end_position || !duration || !tour_transportion){
                return resp.status(400).json({
                    success : false,
                    error : "Can not set field empty !"
                });
            }
            if(tour_price < 0){
                return resp.status(400).json({
                    success : false,
                    error : "Can not set Price less than 0 !"
                })
            }
            if(max_tourist <= 0){
                return resp.status(400).json({
                    success : false,
                    error : "max_tourist must be greater than 0 !"
                })
            }
            const dateToCompare = new Date();
            const tour_date = new Date(start_date);
            if(tour_date < dateToCompare.getTime()){
                return resp.status(400).json({
                    success : false,
                    error : "Start Date must be greater than now !"
                })
            }
            const tourUpdated = await tourRepository.updateTour(req.body,id);
            if(tourUpdated.matchedCount === 0){
                return resp.status(400).json({
                    success : false,
                    error : "ID not exist !"
                })
            }
            return resp.status(200).json({
                success : true,
                message : "Updated successfully !"
            })
        } catch (error) {
            return resp.status(400).json({
                success : false,
                error : error.message
            });
        }
    }
}

export default tourController