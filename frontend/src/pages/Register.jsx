import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link, UNSAFE_DataRouterContext } from 'react-router-dom';

import '../styles/login.css';
import registerImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: undefined,
    email: undefined,
    password: undefined,
  })

  const handleChange = (e) => {
    setCredentials(prev => ({...prev, [e.targer.id]: e.target.value}));
  }

  const handleClick = e => {
    e.preventDefault();
    console.log(credentials);
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>

                <FormGroup>
                    <input type="text" placeholder='Enter your username' required id='name' onChange={handleChange} />
                  </FormGroup>

                  <FormGroup>
                    <input type="text" placeholder='Email' required id='email' onChange={handleChange} />
                  </FormGroup>

                  <FormGroup>
                    <input type="text" placeholder='Password' required id='password' onChange={handleChange} />
                  </FormGroup>
                  
                  <Button className='btn btn__secondary auth__btn' type='submit' onClick={handleClick}>
                    Create Account
                  </Button>
                </Form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register