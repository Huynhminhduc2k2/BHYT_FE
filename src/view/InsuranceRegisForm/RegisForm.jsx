import React, { useState } from 'react';
import "./RegisForm.css"

export default function InsuranceRegistrationForm () {
  const [step, setStep] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    CMND:'',
    health:'',
    dob: '',
   // default value
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };
  const handleBack = () => {
    setStep(step - 1);
  };


  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="registration-form">
            <h2>Step 1: Personal Information</h2>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" />
            <label htmlFor="phone">Phone Number</label>
            <input type="phone" id="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter your phone number" />
            <label htmlFor="CMND">Phone Number</label>
            <input type="CMND" id="CMND" value={formData.phone} onChange={handleInputChange} placeholder="Enter your CMND" />
            
            {/* Other fields */}
            <button onClick={handleNext}>Next</button>
          </div>
        );
      case 2:
        return (
          <div className="registration-form">
            <h2>Step 2: Your Personal Health</h2>
            <label htmlFor="health">Health Issue</label>
            <input type="health" id="health" value={formData.health} onChange={handleInputChange} placeholder="Enter your health issue" />
            <label htmlFor="insurance-type">Insurance Type</label>
            <select id="insurance-type" value={formData.insuranceType} onChange={handleInputChange}>
              <option value="health">Health Insurance</option>
              <option value="auto">Auto Insurance</option>
              <option value="life">Life Insurance</option>
            </select>

            {/* Other fields */}
            <button onClick={handleNext}>Next</button>
            <button onClick={handleBack}>Back</button>
          </div>
        );
      case 3:
        return (
          <div className="registration-form">
            <h2>Step 3: Term of use</h2>
            <label htmlFor="terms">
              <input type="checkbox" id="agreedTerms" checked={formData.agreedTerms} onChange={handleInputChange} />
             I agree to the <a href="/terms-of-use" target="_blank" rel="noopener noreferrer">Terms of Use</a>.
            </label>
            <button onClick={handleNext}>Submit</button>
            <button onClick={handleBack}>Back</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      {renderStep()}
    </div>
  );
};

