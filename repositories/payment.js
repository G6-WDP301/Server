import Payment from "../models/payment.js";

const paymentRepository = {
  createPayment: async (payment_info) => {
    try {
      const { tour_id, user_id, total_amount, payment_details } = payment_info;
      const paymentSaved = await Payment.create({
        tour_id,
        user_id,
        payment_details,
        total_amount,
      });
      return paymentSaved;
    } catch (error) {
        throw new Error(error)
    }
  },
  deletePayment : async (payment_info) => {
    try {
        const paymentDeleted = await Payment.deleteOne({
            user_id : payment_info.user_id,
            tour_id : payment_info.tour_id
        })
        return paymentDeleted;
    } catch (error) {
        throw new Error(error)
    }
  }
};
export default paymentRepository