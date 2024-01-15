import mongoose, {ObjectId, Schema} from 'mongoose'

const Booking = mongoose.model("Booking", new Schema({
    "id": {
        type: Schema.Types.ObjectId,
        require : true
    },
    "booking_status": {
        type: String,
        required: true,
    },
    "booking_date": {
        type: Date,
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