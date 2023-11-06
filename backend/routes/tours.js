import express from 'express';
import { createTour, updateTour, deleteTour, getSingleTour, getAllTours, getTourBySearch, getFeaturedTour, getTourCount } from '../controllers/tourController.js';

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
const router = express.Router();

// Create new tour

router.post('/', verifyAdmin, createTour);

// Update tour

router.put('/:id', verifyAdmin, updateTour);

// Delete tour

router.delete('/:id', verifyAdmin, deleteTour);

// Get single tour

router.get('/:id', getSingleTour);

// Get all tours

router.get('/', getAllTours);

// Get tours by search
router.get('/search/getTourBySearch', getTourBySearch);

// Get featured tours
router.get('/search/getFeaturedTours', getFeaturedTour);


// Get tour count
router.get('/search/getTourCount', getTourCount);

export default router;
