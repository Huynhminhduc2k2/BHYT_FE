import React, { useState } from 'react';
import SignUpLogo from '../../assets/logos/HealthInsurance.png';
import { NavLink } from 'react-bootstrap';
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { API_URL } from '../API_Config';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import axios from 'axios';

function SignUp1() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: 'string',
    personID: 'string',
    phoneNumber: 'string',
    dob: 'string',
    address: 'string',
    email: 'user@example.com',
    nation: 'string',
    nationality: 'string',
    sex: 'string',
    password: 'string',
    rePassword: 'string',
    roles: ['string'],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) =>
      name === `roles`? 
      {
        ...prevData,
        [name]: [value],
      }
      : {
          ...prevData,
          [name]: value,
        },
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Add this line
    try {
      const response = await axios.post(API_URL + '/Register', formData);

      if (!response) {
        console.error('Empty response received');
        return;
      }

      console.log('Register successful', response.data);

      navigate('/signupVerify');

      alert('Register successful');
    } catch (error) {
      console.error('Register failed', error.response?.data);

      if (
        error.response?.status === 400 &&
        error.response?.data?.title ===
          'One or more validation errors occurred.'
      ) {
        // Xử lý lỗi validation
        console.error('Validation errors:', error.response.data.errors);
      }

      alert('Register failed: ' + (error.response?.data || 'Unknown error'));
    }
  };

  return (
    <>
      <section className="SignUp">
        <div className="SignUp-Container">
          <form onSubmit={handleSubmit} className="SignUp-Form">
            <h1 className="SignUp-Form-Title">Register</h1>

            <input
              type="text"
              placeholder="Enter Fullname"
              name="fullName"
              onChange={handleChange}
              className="email_phone-Input"
            />
            <input
              type="text"
              placeholder="Enter personID"
              name="personID"
              onChange={handleChange}
              className="password-Input"
            />
            <input
              type="text"
              placeholder="Enter Phone Number"
              name="phoneNumber"
              onChange={handleChange}
              className="repassword-Input"
            />
            <input
              type="text"
              placeholder="Enter Birthday"
              name="dob"
              onChange={handleChange}
              className="repassword-Input"
            />

            <input
              type="text"
              placeholder="Enter Address"
              onChange={handleChange}
              name="address"
              className="repassword-Input"
            />

            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              onChange={handleChange}
              className="repassword-Input"
            />
            <input
              type="text"
              placeholder="Enter Nation"
              name="nation"
              onChange={handleChange}
              className="repassword-Input"
            />
            <input
              type="text"
              placeholder="Enter Nationality"
              name="nationality"
              onChange={handleChange}
              className="repassword-Input"
            />
            <input
              type="text"
              placeholder="Enter Gender"
              name="sex"
              onChange={handleChange}
              className="repassword-Input"
            />
            <input
              type="text"
              placeholder="Enter Password"
              name="password"
              onChange={handleChange}
              className="repassword-Input"
            />
            <input
              type="text"
              placeholder="Re-enter Password"
              name="rePassword"
              onChange={handleChange}
              className="repassword-Input"
            />

            <input
              type="text"
              placeholder="Enter Role"
              name="roles"
              onChange={handleChange}
              className="repassword-Input"
            />

            <button type="submit" className="register-Btn">
              <b>Register</b>
            </button>

            <ul className="SignUp-Outlines">
              <li>Password contains 8 characters</li>
              <li>Password contains at least 1 uppercase character</li>
              <li>Password contains at least 1 numeric character</li>
            </ul>
          </form>
        </div>

        <img src={SignUpLogo} alt="sign up logo" className="SignUp-Logo" />
      </section>
    </>
  );
}

export default SignUp1;
