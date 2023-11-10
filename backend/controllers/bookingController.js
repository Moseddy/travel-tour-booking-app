import Booking from "../models/Booking.js"
export const createBooking = async(req, res) => {
    const newBooking = new Booking(req.body);

    try {
        const savedBooking = await newBooking.save();
        res.status(200).json({
            success: true,
            message: "Your tour is booked successfully",
            data: savedBooking
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "We are sorry, your booking could not be created. Please try again",
        })
    }
}