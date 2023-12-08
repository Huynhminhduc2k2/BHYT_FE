import React, { useState } from 'react';
import "./RegisForm.css"

const InsuranceRegistrationForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    insuranceType: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the form data (e.g., send to server)
    console.log('Form Data:', formData);
    // Reset form fields after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      insuranceType: '',
    });
  };

  return (
    <div className="InsuRegisForm">
      <h2>Insurance Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <br />
        <label>
          CMND ID:
          <input
            type="ID"
            name="CMNDID"
            value={formData.CMNDID}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Insurance Type:
          <select
            name="insuranceType"
            value={formData.insuranceType}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="health">Health Insurance</option>
            <option value="auto">Auto Insurance</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <br />
        
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InsuranceRegistrationForm;