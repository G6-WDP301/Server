import nodemailer from "nodemailer"
import { EMAIL } from "../constants/constants.js";
import { FormatDate, FormatNumberToVND } from "../constants/common.js";

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
    },
    sendMailInvoice : (receiver,subject,content,tourInfo) => {
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
            text: content,
            html : `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <style>
                    .m_7894734060713233746td-left {
                        background-color: #f4f5f6;
                        border-bottom : 1px solid #fff;
                        margin : 0;
                        padding : 5px 10px;
                        text-align : right;
                        vertical-align : middle;
                        width : 150px
                    }
                    .m_7894734060713233746td-right {
                        border-bottom : 1px solid #fff;
                        font-size: 14px;
                        line-height: 20px;
                        margin: 0;
                        padding: 5px 10px;
                        vertical-align: middle;
                    }
                </style>
            </head>
            <body>
                <table style="width: 760px;">
                    <tbody>
                        <tr>
                           <td>
                            <div style="text-align:center;font-weight:bold;text-transform:uppercase;color:#000;font-size:24px;padding-top:20px;padding-bottom:20px;border-bottom:1px dotted #ccc;border-top:1px dotted #ccc;margin-bottom:30px">
                                Booking của quý khách
                            </div>
                           </td>
                        </tr>
                        <tr>
                            <td>
                                <div style="font-weight:bold;text-transform:uppercase;color:#c50000;margin-bottom:10px;font-size:16px">
                                    I. Phiếu xác nhận booking:
                                </div>
                                <div style="background:#f1f1f1;padding:15px;height:135px;margin-bottom:20px">
                                    <div style="width:100%;float:left">
                                        <div style="padding:0 15px 0 15px">
                                            <div style="font-size:16px;text-align:justify;line-height:18px;color:#025da6;margin-bottom:10px">
                                                ${tourInfo.tour_name}
                                            </div>
                                            <div style="float:left;width:100%;margin-bottom:7px">
                                                <div style="float:left;width:20%;font-weight:bold;color:#333">
                                                    Ngày đi:
                                                </div>
                                                <div style="float:left;width:30%">
                                                    ${FormatDate(tourInfo.start_date)}
                                                </div>
                                                <div style="float:left;width:20%;font-weight:bold;color:#333">
                                                    Ngày về:
                                                </div>
                                                <div style="float:left;width:30%">
                                                    30/01/2024 15:35
                                                </div>
                                            </div>
                                            <div style="float:left;width:100%;margin-bottom:7px">
                                                <div style="float:left;width:20%;font-weight:bold;color:#333">
                                                    Nơi tập trung:
                                                </div>
                                                <div style="float:left;width:30%">
                                                    Ha Noi
                                                </div>
                                                <div style="float:left;width:20%;font-weight:bold;color:#333">
                                                    Điểm khởi hành:
                                                </div>
                                                <div style="float:left;width:30%">
                                                    ${tourInfo.start_position.location_name}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style="clear:both"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style="font-weight:bold;text-transform:uppercase;color:#c50000;margin-bottom:10px;font-size:16px">
                                    II. Chi tiết booking:
                                </div>
                                <table style="width: 100%; margin-bottom:20px;border: 1px solid #f4f5f6;border-collapse : collapse; margin : 0; padding: 0;">
                                    <tbody>
                                        <tr>
                                            <td class="m_7894734060713233746td-left">
                                                Trị giá booking:
                                            </td>
                                            <td class="m_7894734060713233746td-right">
                                                <span style="font-weight:bold;color:#c50000">
                                                    ${FormatNumberToVND(tourInfo.tour_price)}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="m_7894734060713233746td-left">
                                                Ngày đăng ký:
                                            </td>
                                            <td class="m_7894734060713233746td-right">
                                                <span>
                                                    ${FormatDate(new Date())} (Theo giờ Việt Nam) 
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="m_7894734060713233746td-left">
                                                Tình trạng:
                                            </td>
                                            <td class="m_7894734060713233746td-right" style="color:#c50000;font-weight:bold">                                 
                                                Booking của quý khách đã được chúng tôi xác nhận thành công
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="font-weight:bold">
                                <div style="margin-bottom:15px">
            
                                    Chúc quý khách 1 chuyến du lịch thật vui vẻ và bổ ích!
                            
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                &nbsp;
                            </td>
                        </tr>
                        <tr>
                            <td style="height:30px;text-align:center;background:#306eb7;padding-top:15px;padding-bottom:15px;color:#fff">
                                <div style="margin-bottom:5px">
                                    Hoa Lac, Tro Hoang Ha
                                </div>
                                <div>
                                    <span>
                                        Điện thoại:
                                    </span>
                                    (+84 28) 38 22 8898 - 
                                    <span>
                                        Email:
                                    </span>
                                    <a href="dinhhoan0511@gmail.com" target="_blank">dinhhoan0511@gmail.com</a>
                                </div>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            
            </body>
            </html>`
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