import React, { useState } from 'react';
import SignInLogo from '../../assets/logos/HealthInsurance.png';
import GoogleIcon from '../../assets/images/google.png';
import FacebookIcon from '../../assets/images/facebook.png';
import TwitterIcon from '../../assets/images/twitter.png';
import { NavLink } from 'react-bootstrap';
import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../API_Config';
import { Button } from '@chakra-ui/react';
import './SignIn.css';
import axios from 'axios';

function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL + '/login', formData);

      if (!response) {
        console.error('Empty response received');
        return;
      }

      console.log('Login successful', response.data);

      navigate('/home');

      alert('Login successful');
    } catch (error) {
      console.error('Login failed', error.response?.data);

      if (
        error.response?.status === 400 &&
        error.response?.data?.title ===
          'One or more validation errors occurred.'
      ) {
        // Xử lý lỗi validation
        console.error('Validation errors:', error.response.data.errors);
      }

      alert('Login failed: ' + (error.response?.data || 'Unknown error'));
    }
  };

  return (
    <>
      <section className="SignIn">
        <div className="SignIn-Form-Container">
          <form onSubmit={handleSubmit} className="SignIn-Form">
            <h1 className="SignIn-Form-Title">Login</h1>
            <p className="SignIn-Form-Intro">
              Hi, enter your details to get login to your account.
            </p>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              className="email_phone-Input"
              placeholder="Enter Email / Phone Number"
            />
            <div>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="password-Input"
                placeholder="Password"
              />
              <img src="" alt="" />
            </div>

            <a href="/ForgotPass" className="forgotpass-Btn">
              <b>Forgot Password ?</b>
            </a>

            <button type="submit" className="login-Btn">
              Login
            </button>
          </form>

          <div className="SignIn-Form-Alternatives">
            <div className="SignIn-Form-Alternatives-Intro">
              <hr className="SignIn-Form-Alternatives-Intro-Side" />
              <p> Or Login with</p>
              <hr className="SignIn-Form-Alternatives-Intro-Side" />
            </div>
            <nav className="SignIn-Form-Alternatives-Navs">
              <a href="/GoogleSignIn">
                <img src={GoogleIcon} alt="google icon" />
                Google
              </a>
              <a href="/FacebookSignIn">
                <img src={FacebookIcon} alt="facebook icon" />
                Facebook
              </a>
              <a href="/TwitterSignIn">
                <img src={TwitterIcon} alt="twitter icon" />
                Twitter
              </a>
            </nav>
          </div>

          <div className="SignIn-SignUp-Nav">
            <p>Don't have an account ?</p>
            <Nav>
              <Nav.Link
                href={'/signup'}
                style={{ color: 'blue', textDecorationLine: 'underline' }}
              >
                Create Now
              </Nav.Link>
            </Nav>
          </div>
        </div>

        <img src={SignInLogo} alt="sign in logo" className="SignIn-Logo" />
      </section>
    </>
  );
}

export default SignIn;
