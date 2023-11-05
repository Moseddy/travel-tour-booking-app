import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import tourRoute from './routes/tours.js';

dotenv.config();
const app = express();


const port = process.env.PORT || 8000;

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
app.use(cors());
app.use(cookieParser());
app.use('/tours', tourRoute);

app.listen(port, () => {
    connect();
    console.log(`Server is listening on ${port}`);
})