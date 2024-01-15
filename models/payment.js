import mongoose, { ObjectId, Schema } from 'mongoose'
import Tour from './tour'

const Payment = mongoose.model("Payment", new Schema({
    "id": {
        type: Schema.Types.ObjectId
    },
    "payment_method": {
        type: String,
        required: true,
    },
    "total_amount": {
        type: String,
        required: true
    },
    "status_payment": {
        type: String,
        required: true
    },
    "transaction": {
        type: String,
        required: true
    },
    "additional_details": {
        type: String,
        required: true
    },
    "user_id": {
        type : Schema.Types.ObjectId,
        require : true,
        ref : "User"
    },
    "tour_id" : {
        type : Schema.Types.ObjectId,
        require : true,
        ref : "Tour"
    }
}))
export default Tour;