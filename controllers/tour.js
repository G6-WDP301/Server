import tourRepository from "../repositories/tour.js";

const tourController = {
    createTour : async (req,resp) => {
        try {
           const tourSaved = await tourRepository.createTour(req.body);
            return resp.status(200).json(tourSaved)
        } catch (error) {
            return resp.status(500).json(error)
        }
    },
    findAll : async (req,resp) => {
        try {
            const tours = await tourRepository.findAll();
            return resp.status(200).json(tours);
        } catch (error) {
            return resp.status(500).json(error);
        }
    }
}

export default tourController