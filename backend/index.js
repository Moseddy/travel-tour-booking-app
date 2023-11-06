import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';


import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';

dotenv.config();
const app = express();


const port = process.env.PORT || 8000;
const corsOptions = {
    origin: true,
    credentials: true,
}

// database connection
mongoose.set('strictQuery', false);
const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log('Mongoose database connected');

    } catch (error) {
        console.log(error.message);
    }
}
// For testing
app.get('/', (req, res) => {
    res.send('api is working');
})

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

// register routes in my application
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/review', reviewRoute);


app.listen(port, () => {
    connect();
    console.log(`Server is listening on ${port}`);
})