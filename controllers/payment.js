import StatusCode from "../constants/statusCode.js";
import Booking from "../models/booking.js";
import { paymentRepository } from "../repositories/index.js";
import paypal from 'paypal-rest-sdk'

const paymentController = {
    createPayment: async (req, resp) => {
        try {
            const { user_id, tour_id } = req.body;
            const booking = await Booking.findOne({
                user_id,
                tour_id
            });
            if (!booking) {
                return resp.status(StatusCode.BAD_REQUEST).json({
                    success: false,
                    error: "You did not booking this tour !"
                });
            }
            await Booking.updateOne({
                user_id,
                tour_id
            }, {
                booking_status: true
            });
            await paymentRepository.createPayment(req.body);
            return resp.status(StatusCode.SUCCESS).json({
                success: true,
                message: "Payment successfully !"
            })
        } catch (error) {
            return resp.status(StatusCode.BAD_REQUEST).json({
                success: false,
                error: error.message
            })
        }
    },

    // createCredentials: async (req, res) => {
    //     paypal.configure({
    //         'mode': 'sandbox',
    //         'client_id': 'ATt8D_-DrCynekegPB82I4S9PDMQz2ywkKxoMZGoswf3ZMo091PClesf4v1wYz8nkmEDbJvNo8PKzM2N',
    //         'client_secret': 'EAoGsKoz915_BrHG4coIAv-2IXdcd03OapqvZ-g3QZjrJlm2MA4qU81qapHuJ600rOceg02L6oeRszoC'
    //     })
    //     const create_payment_json = {
    //         "intent": "booking",
    //         "payer": {
    //             "payment_method": "paypal"
    //         },
    //         "redirect_urls": {
    //             "return_url": "http://localhost:5173/success",
    //             "cancel_url": "http://localhost:5173/cancel"
    //         },
    //         "transactions": [{
    //             "tour_list": {
    //                 "tour": [{
    //                     "tour_name": "Chuyến phiêu lưu...",
    //                     "tourist": "1",
    //                     "price": "250.00",
    //                     "currency": "USD",
    //                     "quantity": 1
    //                 }]
    //             },
    //             "amount": {
    //                 "currency": "USD",
    //                 "total": "250.00"
    //             },
    //             "description": "Chúc bạn có một trải nghiệm du lịch tuyệt vời ~"
    //         }]
    //     };

    //     paypal.payment.create(create_payment_json, function (error, payment) {
    //         if (error) {
    //             throw error;
    //         } else {
    //             for (let i = 0; i < payment.links.length; i++) {
    //                 if (payment.links[i].rel === 'approval_url') {
    //                     res.redirect(payment.links[i].href);
    //                 }
    //             }

    //         }
    //     });
    // },
    // cancel: (req, res) => res.send('Cancelled (Đơn hàng đã hủy)'),
    // success: (req, res) => {
    //     const payerId = req.query.PayerID;
    //     const paymentId = req.query.paymentId;

    //     const execute_payment_json = {
    //         "payer_id": payerId,
    //         "transactions": [{
    //             "amount": {
    //                 "currency": "USD",
    //                 "total": "250.00"
    //             }
    //         }]
    //     };
    //     paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    //         if (error) {
    //             console.log(error.response);
    //             throw error;
    //         } else {
    //             console.log(JSON.stringify(payment));
    //         }
    //     });
    // }
}
export default paymentController