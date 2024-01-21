import mongoose, {ObjectId, Schema} from 'mongoose'

const Booking = mongoose.model("Booking", new Schema({
    "booking_status": {
        type: Boolean,
        default : false,
    },
    "booking_date": {
        type: Date,
        default : new Date(),
        required: true,
    },
    "tour_id" : {
        type : Schema.Types.ObjectId,
        require : true,
        ref : "Tour"
    },
    "user_id" : {
        type : Schema.Types.ObjectId,
        require : true,
        ref : "User"
    }
}))
export default Booking