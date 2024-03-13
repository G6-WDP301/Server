import express from 'express';
import * as dotenv from 'dotenv';
import connectDB from './database/database.js';
// import routes from './routes/index.js';
import cors from 'cors';
import paypal from 'paypal-rest-sdk'
import axios from 'axios'
import { tourRouter, locationRouter, scheduleRouter, transportionRouter, userRouter, bookingRouter, paymentRouter } from "./routes/index.js"
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/tour', tourRouter)
app.use('/api/location', locationRouter)
app.use('/api/schedule', scheduleRouter)
app.use('/api/transportion', transportionRouter)
app.use('/api/user', userRouter)
app.use('/api/booking', bookingRouter)
app.use('/api/payment', paymentRouter)

paypal.configure({
    'mode': 'sandbox',
    'client_id': 'AdMHBYU2RiOqnT7Vp5k2DuzPeELNn24W8Qcg4r_qo3ki5c_BfNHitzLmpidkk4AAe3j4bqrWeB0UMgwE',
    'client_secret': 'EKkJmxK4DiWbNb9K3KBJGU3LTJ9oDXynWOJkiGTI7UqiS-g5ha-rkneWEG6RQCvKBjHBdGtEwrvTBCHw'
})

// Pay to money
app.post('/pay', (req, res) => {
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:5173/success",
            "cancel_url": "http://localhost:5173/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Book tour",
                    "sku": "001",
                    "price": "1.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "1.00"
            },
            "description": "Chúc quý khách có một trải nghiệm tuyệt vời ~"
        }]
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for (let i = 0; i < payment.links.length; i++) {
                if (payment.links[i].rel === 'approval_url') {
                    res.redirect(payment.links[i].href);
                }
            }

        }
    });

});

const PORT = process.env.PORT || 9999;

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.REACT_URL);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});