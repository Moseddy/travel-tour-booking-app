import React, { useState } from 'react';
import './booking.css';

import { useNavigate } from 'react-router-dom';

import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';

const Booking = ({ tour, avgRating }) => {
    const {price, reviews} = tour;
    const navigate = useNavigate()

    const [ credentials, setCredentials ] = useState({
        userId: '01',
        userEmail: 'example@gmail.com',
        fullname: '',
        phone: '',
        guestSize: 1,
        bookAt: '',
    })

    const handleChange = (e) => {
        setCredentials(prev =>({...prev, [e.target.id]: e.target.value}) )
    }

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(credentials.guestSize);

    // Send data to the server

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/thank-you');
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
            <Form className="booking__info-form" onSubmit={handleClick}>
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
                    <span>${serviceFee}</span>
                </ListGroupItem>

                <ListGroupItem className=' d-flex align-items-center justify-content-between border-0 px-0 total'>
                    <h5>Total</h5>
                    <span>${totalAmount}</span>
                </ListGroupItem>
                
                <button className="btn primary__btn w-100" onClick={handleClick}>Book Now</button>
            </ListGroup>
        </div>
        {/* BOOKING BUTTON END */}


    </div>
  )
}

export default Booking