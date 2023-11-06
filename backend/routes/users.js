import  express from 'express';

import { createUser, updateUser, deleteUser, getSingleUser, getAllUsers } from '../controllers/userController.js'

const router = express.Router();


// create user route
router.post('/', createUser);


// update user route
router.put('/:id', updateUser);

// deleteUser route
router.delete('/:id', deleteUser);

// getSingle user route
router.get('/:id', getSingleUser);

// get all user route
router.get('/', getAllUsers);

export default router;