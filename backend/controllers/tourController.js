import Tour from '../models/Tour.js';


// create new tour
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);

    try {
        const savedTour = await newTour.save();
        
        res.status(200).json({
            success:true, 
            message: 'Successfully created',
            data: savedTour,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            messsage: 'Failed to create. Try again',
        });
    }
}
