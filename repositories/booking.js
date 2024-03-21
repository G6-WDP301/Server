import Booking from "../models/booking.js"
import Tour from "../models/tour.js";
const BookingRepository = {
    BookTour: async (tour_id, user_id) => {
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
    cancelBookingTour: async (tour_id, user_id) => {
        try {
            const tourDeleted = await Booking.deleteOne({
                tour_id,
                user_id
            });
            return tourDeleted;
        } catch (error) {
            throw new Error(error);
        }
    },
    payTicketTour: async (tour_id, user_id) => {
        try {
            const updateBooking = await Booking.findOneAndUpdate({ user_id, tour_id }, { isPay: true })
            return updateBooking;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default BookingRepository;