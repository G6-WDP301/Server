import mongoose, { ObjectId, Schema } from 'mongoose'

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
    }
}))