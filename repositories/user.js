import { ROLE_USER } from "../constants/constants.js";
import User from "../models/user.js";

const userRepository = {
    createAccount : async (userInfor) => {
        try {
            const {username,email,dob,phoneNumber,address,avatar,password,gender} = userInfor;
            const userSaved = await User.create({
                role_id : ROLE_USER,
                username,
                email,
                dob,
                phoneNumber,
                address,
                avatar,
                gender,
                password
            });
            return userSaved;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default userRepository;