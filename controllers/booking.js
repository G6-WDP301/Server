import { BookingRepository } from "../repositories/index.js";
import StatusCode from "../constants/statusCode.js"
import Booking from "../models/booking.js";
import Tour from "../models/tour.js";
import User from "../models/user.js";
import Mail from "../mail/mail.js";
const BookingController = {
    bookTour : async (req,resp) => {
        try {
            const {id}  = req.params;
            const {user_id} = req.body;
            const checkUser = await Booking.findOne({
                tour_id : id,
                user_id
            });
            const checkTour = await Tour.findById({
                _id : id
            }).populate("start_position");
            if(!checkTour){
                return resp.status(StatusCode.BAD_REQUEST).json({
                    success : false,
                    error : "Tour is not exist !"
                });
            }
            if(checkUser){
                return resp.status(StatusCode.BAD_REQUEST).json({
                    success : false,
                    error : "You already booked this tour !"
                });
            }
            const book = await BookingRepository.BookTour(id,user_id);
            const user = await User.findById({
                _id : user_id
            })

            const mailContent = {
                receiver : user.email,
                subject : "Thông tin đặt tour trên G6Tour",
                content : ""
            }
            Mail.sendMailInvoice(mailContent.receiver,mailContent.subject,mailContent.content,checkTour);
            return resp.status(StatusCode.SUCCESS).json({
                success : true,
                message : "Booking tour successfully !",
                book
            });
        } catch (error) {
            return resp.status(StatusCode.BAD_REQUEST).json({
                success : false,
                error : error.message
            })
        }
    },
    cancelBookingTour : async (req,resp) => {
        try {
            const {id} = req.params;
            const {user_id} = req.body;
            const tourDeleted = await BookingRepository.cancelBookingTour(id,user_id);
            if(tourDeleted.deletedCount === 0 ){
                return resp.status(StatusCode.BAD_REQUEST).json({
                    success : false,
                    error : "Not Found !"
                })
            }
            return resp.status(StatusCode.SUCCESS).json({
                success : true,
                message : "Cancel tour success"
            })
        } catch (error) {
            return resp.status(StatusCode.BAD_REQUEST).json({
                success : false,
                error : error
            })
        }
    }
}

export default BookingController