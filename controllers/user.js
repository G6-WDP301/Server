import jwt from 'jsonwebtoken'
import MessageError from "../constants/messageError.js";
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
                    error : "username " + MessageError.inputNotContainSpecial 
                })
            }
            if(!Validator.checkEmail(email)){
                return resp.status(400).json({
                    success : false,
                    error : MessageError.email
                });
            }
            if(!Validator.isValidPhoneNumber(phoneNumber)){
                return resp.status(400).json({
                    success : false,
                    error : MessageError.phoneNumber
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
    },
    loginAccount : async (req,resp) => {
        try {
            const {email} = req.body;
            if(!Validator.checkEmail(email)){
                return resp.status(400).json({
                    success : false,
                    error : MessageError.email
                })
            }
            const user = await userRepository.loginAccount(req.body);
            if(!user){
                return resp.status(400).json({
                    success : false,
                    error : "Email, Password not correctly !"
                });
            }
            const payload = {
                user_id : user._id,
                email : user.email,
                user_name : user.username,
                role : user.role_id.role_name
            }
            const token = jwt.sign(payload,process.env.SECRET_KEY,{
                expiresIn : "365d"
            });
            return resp.status(200).json({
                success : true,
                token,
                message : "Login successfully !"
            })
        } catch (error) {
            return resp.status(400).json({
                success : false,
                error : error.message
            });
        }
    }
}

export default userController;