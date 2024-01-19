import mongoose, { ObjectId, Schema } from "mongoose"

const User = mongoose.model("User", new Schema({
    "username": {
        type: String,
        required: true,
    },
    "email": {
        type: String,
        required: true,
        validate: {
            validator: (value) => isEmail(value),
            message: "Incorrect format ~~~",
        },
    },
    "password": {
        type: String,
        required: true,
        validate: {
            validator: (value) => value.length >= 8,
            message: "Length password must be greater than 8 ~~~",
        },
    },
    "password": {
        type: String,
        required: true,
        validate: {
            validator: (value) => value.length > 8,
            message: 'Length of password > 8'
        }
    },
    "dob": {
        type: Date,
        required: true
    },
    "gender": {
        type: Boolean,
        required: true
    },
    "phoneNumber": {
        type: Number,
        required: true
    },
    "address": {
        type: String,
        required: true
    },
    "avatar": {
        type: String,
        required: true
    },
    "role_id" : {
        type : Schema.Types.ObjectId,
        ref : "Role",
        require : true
    }
}))
export default User;