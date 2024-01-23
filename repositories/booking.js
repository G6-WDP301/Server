import Booking from "../models/booking.js"
const BookingRepository = {
        BookTour : async (tour_id,user_id) => {
            try {
                const booking = await Booking.create({
                    tour_id,
                    user_id
                });
                return booking;
            } catch (error) {
                throw new Error(error);
            }
        },
        cancelBookingTour : async (tour_id, user_id) => {
            try {
                const tourDeleted = await Booking.deleteOne({
                    tour_id,
                    user_id
                });
                return tourDeleted;
            } catch (error) {
                throw new Error(error);
            }
        }
}

export default BookingRepository;