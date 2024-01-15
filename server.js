import express from 'express';
import * as dotenv from 'dotenv';
import connectDB from './database/database.js';
// import routes from './routes/index.js';
import cors from 'cors';
import bodyParser from "body-parser";
import {tourController,locationController} from "./routes/index.js" 
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api/tour',tourController.createTour)
app.use('/api/location',locationController.createLocation)


// app.use('/products', routes.productRouter);
// app.use('/categories', routes.categoryRouter);

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});