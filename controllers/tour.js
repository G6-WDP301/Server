import { request, response } from "express";
import tourRepository from "../repositories/tour.js";

const tourController = {
    createTour : async (request,response) => {
        try {
           const tourSaved = tourRepository.createTour(request.body);
            return response.status(400).json(tourSaved)
        } catch (error) {
            return response.status(500).json(error)
        }
    }
}

export default tourController