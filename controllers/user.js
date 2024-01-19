import User from "../models/user.js";
import userRepository from "../repositories/user.js";
import Validator from "../validator/validator.js"
const userController = {
    createAccount : async (req,resp) => {
        try {
            const {username,email,phoneNumber} = req.body;
            if(!Validator.checkString(username)){
                return resp.status(400).json({
                    success : false,
                    error : "username can not contain special character !"
                })
            }
            if(!Validator.checkEmail(email)){
                return resp.status(400).json({
                    success : false,
                    error : "Invalid email format !"
                });
            }
            if(!Validator.isValidPhoneNumber(phoneNumber)){
                return resp.status(400).json({
                    success : false,
                    error : "Invalid phonenumber format, phonenumber lengths must be 10 !"
                });
            }
            const user = await User.findOne({email});
            if(user){
                return resp.status(400).json({
                    success : false,
                    error : "Email already exist !"
                });
            }
            const userSaved = await userRepository.createAccount(req.body);
            return resp.status(200).json({
                success : true,
                message : "Create account successfully !"
            })
        } catch (error) {
            return resp.status(400).json({
                success : false,
                error : error.message
            })
        }
    }
}

export default userController;