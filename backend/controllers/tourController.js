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


// update tour 

export const updateTour = async (req, res) => {

    const id = req.params.id;
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, {new: true});

        res.status(200).json({
            success:true, 
            message: 'Successfully updated',
            data: updatedTour
        })
    }
    catch (error) {
        res.status(500).json({
        success: false,
        messsage: 'Failed to update. Try again',
    });
    
}
}

// delete tour 

export const deleteTour = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedTour = await Tour.findByIdAndDelete(id, {
            $set: req.body
        }, {new: true});

        res.status(200).json({
            success:true, 
            message: 'Successfully deleted',
        })
    }
    catch (error) {
        res.status(500).json({
        success: false,
        messsage: 'Failed to delete. Try again',
    });
    
}
}

// get single tour 

export const getSingleTour = async (req, res) => {
    const id = req.params.id;
    try {
        const tour = await Tour.findById(id).populate('reviews');

        res.status(200).json({
            success:true, 
            message: 'Got tour successfully',
            data: tour,
        })
    }
    catch (error) {
        res.status(404).json({
        success: false,
        messsage: 'Failed to delete. Try again',
    });
    
}
}

// get all tours 

export const getAllTours = async (req, res) => {

    // for pagination

    const page = parseInt(req.query.page);
    console.log(page);
    try {

        // This .skip stars the pagination code and it limits it to 8 values
        const tours = await Tour.find({}).populate('reviews').skip(page * 8).limit(8);

        res.status(200).json({
            success: true,
            message: "Fetched data from database",
            count: tours.length,
            data: tours
        })
        
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Could not fetch tours. Wait patiently',
        })
    }
};


// get tour by search
export const getTourBySearch = async(req, res) => {
    
    const city = new RegExp(req.query.city, 'i'); // here i means case sensitive
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    // input validation

    if (isNaN(distance) || isNaN(maxGroupSize)) {
        return res.status(400).json({ error: 'Invalid input for distance or maxGroupSize' });
    } else {

    try {
        // gte means greater than equal to
        const tours = await Tour.find({city, distance:{$gte:distance}, maxGroupSize:{$gte: maxGroupSize}}).populate('reviews');

        res.status(200).json({ 
            status: true,
            message: "Successful",
            count: tours.length,
            data: tours,
        });
    } catch (error) {
        res.status(404).json({
            status: false,
            message: "Not found"
        });
    }
    }
}

// get Featured tour
export const getFeaturedTour = async(req, res) => {
    try {
        const tours = await Tour.find({featured:true}).populate('reviews').limit(8);

        res.status(200).json({
            success: true,
            message: "Successful",
            count: tours.length,
            data: tours,
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Not found',
        });
    }
}


// get tour count

export const getTourCount = async(req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount();

        res.status(200).json({
            success: true,
            data: tourCount,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error. Something happened unexpectedly'
        });
    }
}