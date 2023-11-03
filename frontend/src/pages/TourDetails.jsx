import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import tourData from '../assets/data/tours';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';


const TourDetails = () => {
  const {id} = useParams();

  const reveiwMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  // This is static, later we will query our api to get data from db
  const tour = tourData.find(tour => tour.id === id);

  // destructure properties from the tour object

  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize} = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // format Date
  const options = {day:'numeric', month: 'long', year: 'numeric'}

  // submit request to the server 
  const submitHandler = e => {
    e.preventDefault();
    const reviewText = reveiwMsgRef.current.value;
    alert(`${reviewText}, ${tourRating}`);
  }
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className="tour__content">
                <img src={photo} alt="" />
                <div className="tour__info">
                  <h2>{title}</h2>

                  <div className="d-flex align-items-center gap-5">
                  <span className="tour__rating d-flex align-items-center gap-1">
                    <i className="ri-star-fill" style={{ color: 'var(--secondary-color)'}}></i> {avgRating == 0 ? null: avgRating} 
                    {avgRating === 0 ? ('Not rated'): <span>({reviews?.length})</span>}
                </span> 

                  <span>
                  <i className="ri-map-pin-fill"></i>   {address}
                </span>
                </div>
                <div className="tour__extra-details">
                  <span><i className="ri-map-pin-2-line"></i>{city}</span>

                  <span><i className="ri-money-dollar-circle-line"></i>{price} / per person</span>

                  <span><i className="ri-map-pin-time-line"></i>{distance} km</span>

                  <span><i className="ri-group-line"></i>{maxGroupSize} people</span>
                </div>
                  <h6>Description</h6>
                  <p>{desc}</p>
                </div>

                {/*  TOUR REVIEWS SECTION START */}
                  <div className="tour__reviews mt-4">
                    <h4>{reviews?.length > 1 ? `Reviews: ${reviews?.length} reviews` : `Reviews: ${reviews?.length} review`}</h4>

                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 .rating__group">
                        1 <span onClick={() => setTourRating(1)}><i className="ri-star-s-fill"></i></span>
                        2 <span onClick={() => setTourRating(2)}><i className="ri-star-s-fill"></i></span>3 <span onClick={() => setTourRating(3)}><i className="ri-star-s-fill"></i></span>4 <span onClick={() => setTourRating(4)}><i className="ri-star-s-fill"></i></span>5 <span onClick={() => setTourRating(5)}><i className="ri-star-s-fill"></i></span>
                      </div>

                      <div className="review__input">
                        <input 
                        type="text" 
                        placeholder='Share your thoughts' 
                        ref={reveiwMsgRef}
                        required />
                        <button className="btn primary__btn text-white" type='submit'>
                          Submit
                        </button>
                      </div>
                    </Form>

                    <ListGroup className='user__reviews'>
                      { 
                        reviews?.map(review => (
                          <div className="review__item">
                            <img src={avatar} alt="" />

                            <div className="w-100">
                              <div className="d-flex align-items-center justify-content-between">
                                <div>
                                  <h5>Edwin</h5>
                                  <p>
                                    {new Date("01-18-2023").toLocaleDateString("en-US", options)}
                                  </p>
                                </div>
                                <span className="d-flex align-items-center">
                                  5 <i className="ri-star-s-fill"></i>
                                </span>
                              </div>

                              <h6>Amazing tour</h6>
                            </div>
                          </div>
                        ))
                      }
                    </ListGroup>
                  </div>
                {/* TOUR REVIEWS SECTION END */}
              </div>
            </Col>
            <Col lg='4'>
              <Booking tour={tour} />
            
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default TourDetails