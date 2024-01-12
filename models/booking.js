import mongoose, {ObjectId, Schema} from 'mongoose'

const Booking = mongoose.model("Booking", new Schema({
    "id": {
        type: Schema.Types.ObjectId
    },
    "booking_status": {
        type: String,
        required: true,
    },
    "booking_date": {
        type: Date,
        required: true,
    }
}))