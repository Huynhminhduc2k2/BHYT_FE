import React, { useState } from 'react';
import SignUpLogo from '../../assets/logos/HealthInsurance.png';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../API_Config';
import './SignUp.css';
import axios from 'axios';

function SignUp2() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    code: '',
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
      const response = await axios.post(API_URL + '/registryVerify', formData);

      if (!response) {
        console.error('Empty response received');
        return;
      }

      console.log('Verify successful', response.data);

      navigate('/signin');

      alert('Verify successful');
    } catch (error) {
      console.error('Verify failed', error.response?.data);

      if (
        error.response?.status === 400 &&
        error.response?.data?.title ===
          'One or more validation errors occurred.'
      ) {
        // Xử lý lỗi validation
        console.error('Validation errors:', error.response.data.errors);
      }

      alert('Verify failed: ' + (error.response?.data || 'Unknown error'));
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
              placeholder="Enter Code"
              name="code"
              onChange={handleChange}
              className="code-Input"
            />

            <div className="SignUp-Form-Outlines">
              <p>Code is valid for 2 minutes.</p>
              <p>Resend code after 1 minute</p>
            </div>

            <button type="submit" className="verify-Btn">
              <b>Verify</b>
            </button>
          </form>
        </div>

        <img src={SignUpLogo} alt="sign up logo" className="SignUp-Logo" />
      </section>
    </>
  );
}

export default SignUp2;
