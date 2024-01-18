import express from 'express';
import * as dotenv from 'dotenv';
import connectDB from './database/database.js';
// import routes from './routes/index.js';
import cors from 'cors';
import {tourRouter,locationRouter,scheduleRouter, transportionRouter} from "./routes/index.js" 
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/tour',tourRouter)
app.use('/api/location',locationRouter)
app.use('/api/schedule',scheduleRouter)
app.use('/api/transportion',transportionRouter)


// app.use('/products', routes.productRouter);
// app.use('/categories', routes.categoryRouter);

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});