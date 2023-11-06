import User from '../models/User.js';


// create new User
export const createUser = async (req, res) => {
    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();
        
        res.status(200).json({
            success:true, 
            message: 'Successfully created',
            data: savedUser,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            messsage: 'Failed to create. Try again',
        });
    }
}


// update User 

export const updateUser = async (req, res) => {

    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, {new: true});

        res.status(200).json({
            success:true, 
            message: 'Successfully updated',
            data: updatedUser
        })
    }
    catch (error) {
        res.status(500).json({
        success: false,
        messsage: 'Failed to update. Try again',
    });
    
}
}

// delete User 

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(id, {
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

// get single User 

export const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id)

        res.status(200).json({
            success:true, 
            message: 'Got User successfully',
            data: user,
        })
    }
    catch (error) {
        res.status(404).json({
        success: false,
        messsage: 'Failed to delete. Try again',
    });
    
}
}

export const getAllUsers = async (req, res) => {

    try {

        // This .skip stars the pagination code and it limits it to 8 values
        const users = await User.find({});

        res.status(200).json({
            success: true,
            message: "Fetched data from database",
            data: users
        })
        
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Could not fetch Users. Wait patiently',
        })
    }
};


// get User by search
export const getUserBySearch = async(req, res) => {
    
    const city = new RegExp(req.query.city, 'i'); // here i means case sensitive
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    // input validation

    if (isNaN(distance) || isNaN(maxGroupSize)) {
        return res.status(400).json({ error: 'Invalid input for distance or maxGroupSize' });
    } else {

    try {
        // gte means greater than equal to
        const Users = await User.find({city, distance:{$gte:distance}, maxGroupSize:{$gte: maxGroupSize}});

        res.status(200).json({ 
            status: true,
            message: "Successful",
            count: Users.length,
            data: Users,
        });
    } catch (error) {
        res.status(404).json({
            status: false,
            message: "Not found"
        });
    }
    }
}
