import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';

import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';

import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import NewsLetter from '../shared/NewsLetter';


const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>Traveling opens the door to creating <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui, asperiores aliquid nihil enim unde tenetur ad quos obcaecati minima.
                </p>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col><Col lg='2'>
              <div className="hero__img-box mt-4">
                <video controls loop playsInline>
                  <source src={heroVideo} /></video>
              </div>
            </Col><Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
    {/* End of Main section */}

    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">What we serve</h5>
            <h2 className="services__title">We offer our best Services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>

    {/* FEATURED TOUR SECTION START */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'} />
            <h2 className='featured__tour-title'>Our Featured Tour</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    {/* FEATURED TOUR SECTION END */}

    {/* EXPERIENCE SECTION START */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'} />

                <h2>We will serve you<br />with our Experience</h2>
                <p>Lorem ipsum dolor sit amet consectetur.<br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>

                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Regular Clients</h6>
                </div>

                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>

          </Row>
        </Container>
      </section>
    {/* EXPERIENCE SECTION END */}

    {/* GALLERY SECTION START */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle='Gallery' />
            <h2 className='gallery__title'>Visit our customer <br /> tour gallery</h2>
          </Col>

          <Col lg='12'>
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
    {/* GALLERY SECTION END */}


    {/* TESTIMONIAL SECTION START */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle='Fans Love' />
              <h2 className="testimonial__title">
                What Our Fans Say About Us
              </h2>
            </Col>
            <Col lg='12'>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
    {/* TESTIMONIAL SECTION END */}

    {/* NEWSLETTER SECTION START */}
    <NewsLetter />
    {/* NEWSLETTER SECTION END */}
    </>
  )
}

export default Home