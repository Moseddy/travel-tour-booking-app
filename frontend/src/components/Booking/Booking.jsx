import React from 'react';
import './booking.css';

import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';

const Booking = ({ tour, avgRating }) => {
    const {price, reviews} = tour;

    const handleChange = () => {
        console.log('handlechange')
    }
  return (
    <div className='booking'>
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>${price}</h3>
            <span className="tour__rating d-flex align-items-center">
                    <i className="ri-star-fill" style={{ color: 'var(--secondary-color)'}}></i> {avgRating == 0 ? null: avgRating} 
                    {avgRating === 0 ? ('Not rated') : avgRating} 
                    <span>({reviews?.length})</span>
                </span>
        </div>

        {/* BOOKING FORM START */}
        <div className="booking__form">
            <h3>Information</h3>
            <Form className="booking__info-form">
                <FormGroup>
                    <input type="text" placeholder='Full Name' id='fullname' required onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                    <input type="number" placeholder='Phone number' id='phone' required onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                    <input type="date" id='bookAt' required onChange={handleChange} />
                </FormGroup>

                <FormGroup className='d-flex align-items-center gap-3'>
                    <input type="number" placeholder='Number of Guests' id='guestSize' required onChange={handleChange} />
                </FormGroup>
            </Form>
        </div>
        {/* BOOKING FORM END */}

        {/* BOOKING BUTTON START */}
        <div className="booking__button">
            <ListGroup>
            <ListGroupItem className=' d-flex align-items-center justify-content-between border-0 px-0 total'>
                    <h5 className='d-flex align-items-center gap-1'>${price} <i className="ri-close-line"></i>  1 person</h5>
                    <span>${price}</span>
                </ListGroupItem>

                <ListGroupItem className=' d-flex align-items-center justify-content-between border-0 px-0 total'>
                    <h5>Service Charge</h5>
                    <span>$10</span>
                </ListGroupItem>

                <ListGroupItem className=' d-flex align-items-center justify-content-between border-0 px-0 total'>
                    <h5>Total</h5>
                    <span>$109</span>
                </ListGroupItem>
                
                <button className="btn primary__btn w-100">Book Now</button>
            </ListGroup>
        </div>
        {/* BOOKING BUTTON END */}


    </div>
  )
}

export default Booking