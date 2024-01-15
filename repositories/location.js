import Location from "../models/location.js"
const locationRepository = {
    createLocation : async (locationInfor) => {
        try {
            const locationSaved = await Location.create({
                location_name : locationInfor.location_name
            });
            return {
                status : "OK",
                locationSaved
            }
        } catch (error) {
            throw new Exception("Have somthing wrong with data");
        }
    }
}
export default locationRepository;