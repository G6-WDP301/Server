import nodemailer from "nodemailer"
import { EMAIL } from "../constants/constants.js";

const Mail = {
    sendMail: async (receiver,subject,content) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL,
                pass: 'jgiu ilxn twnj tstk'
            }
        });

        const mailOptions = {
            from: EMAIL,
            to: receiver,
            subject: subject,
            text: content
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}

export default Mail;