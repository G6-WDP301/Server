import { ROLE_USER } from "../constants/constants.js";
import User from "../models/user.js";
import Role from "../models/role.js"
const userRepository = {
    createAccount: async (userInfor) => {
        try {
            const { username, email, dob, phoneNumber, address, avatar, password, gender } = userInfor;
            const userSaved = await User.create({
                role_id: ROLE_USER,
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
    },
    loginAccount: async (userInfor) => {
        try {
            const { email, password } = userInfor;
            const user = await User.findOne({
                email,
                password
            }).populate("role_id");
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default userRepository;