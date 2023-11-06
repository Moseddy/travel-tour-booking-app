import  express from 'express';

import { 
    updateUser, 
    deleteUser, 
    getSingleUser, 
    getAllUsers } from '../controllers/userController.js'

import { verifyUser, verifyAdmin } from '../utils/verifyToken.js';


const router = express.Router();




// update user route
router.put('/:id', verifyUser, updateUser);

// deleteUser route
router.delete('/:id', verifyUser, deleteUser);

// getSingle user route
router.get('/:id', verifyUser, getSingleUser);

// get all user route
router.get('/', verifyAdmin, getAllUsers);

export default router;