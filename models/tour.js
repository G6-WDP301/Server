import mongoose, { ObjectId, Schema } from 'mongoose'

const Tour = mongoose.model("Tour", new Schema({
    "id": {
        type: Schema.Types.ObjectId
    },
    "tour_name": {
        type: String,
        required: true,
    },
    "tour_description": {
        type: String,
        required: true,
    },
    "tour_price": {
        type: String,
        required: true,
    },
    "tour_img": {
        type: String,
        required: true,
    },
    "max_tourist": {
        type: Number,
        required: true,
    },
    "tour_category": {
        type: String,
        required: true,
    },
    "status": {
        type: String,
        required: true,
    },
    "start_date": {
        type: Date,
        required: true,
    },
    "end_date": {
        type: Date,
        required: true,
    }
}))