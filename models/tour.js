import mongoose, { ObjectId, Schema, Types } from 'mongoose'

const Tour = mongoose.model("Tour", new Schema({
    "tour_name": {
        type: String,
        required: true,
    },
    "tour_description": {
        type: String,
        required: true,
    },
    "tour_transportion" : [
        {
            type : Schema.Types.ObjectId,
            ref : "Transportion"
        }
    ],
    "tour_price": {
        type: Number,
        required: true,
    },
    "discount" : {
        type : Number,
        default : 0
    },
    "tour_img": [
        {
            type : String,
            required : true,
        }
    ],
    "max_tourist": {
        type: Number,
        required: true,
    },
    "status": {
        type: Boolean,
        default : false,
    },
    "start_date": {
        type: Date,
        required: true,
    },
    "duration" : {
        type : Number,
        require : true
    },
    "start_position" : {
        type : Schema.Types.ObjectId,
        ref : "Location",
        require : true,
    },
    "end_position" : {
        type : Schema.Types.ObjectId,
        ref : "Location",
        require : true,
    },
    
}))
export default Tour;