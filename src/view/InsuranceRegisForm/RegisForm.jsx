import React, { useState } from 'react';
import "./RegisForm.css"
import  axios, { AxiosError }  from 'axios';
import { API_URL } from '../API_Config';
import { useToast } from '@chakra-ui/react';
import { Button, ButtonGroup,Stack } from '@chakra-ui/react'

export default function InsuranceRegistrationForm () {
  // const [step, setStep] = useState("");
  const [formData, setFormData] = useState({
    fullName: '',
    personID: '',
    phoneNumber: '',
    dob: '',
    address:'',
    email:'',
    nation: '',
    nationality:'',
    sex:'',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post( '/Insurance/register', formData);

      if (!response) {
        console.error('Empty Insurance');
        return;
      }

      console.log('Subbmit successsfully', response.data);

      toast({
        title: 'Submit successfully',
        isClosable: true,
        description: 'We have received your submission',
        status: 'success'
      })
    } catch (error) {
      console.error('Subbmit failed', error.response?.data);

      if (
        error.response?.status === 400 &&
        error.response?.data?.title ===
          'One or more validation errors occurred.'
      ) {
        // Xử lý lỗi validation
        console.error('Validation errors:', error.response.data.errors);

      }

      toast({
        title: 'Error',
        isClosable: true,
        description: `Error: ${error instanceof AxiosError ? 'Validate Failed' : error.message}`,
        status: 'error'
      })

     // alert('Verify failed: ' + (error.response?.data || 'Unknown error'));
    }
  };


  // const handleNext = () => {
  //   setStep(step + 1);
  // };
  // const handleBack = () => {
  //   setStep(step - 1);
  // };


  // const renderStep = () => {
   // switch (step) {
       //case 1:
        return (
          <div className="form-container">
          <div className="registration-form">
            <h2>Personal Information</h2>

            <label htmlFor="text">Full Name</label>
            <input type="text" id="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Enter your full name" />


            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" />


            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phoneNumber" value={formData.phone} onChange={handleInputChange} placeholder="Enter your phone number" />


            <label htmlFor="phone">Person ID</label>
            <input type="text" id="personID" value={formData.personID} onChange={handleInputChange} placeholder="Enter your Person ID" />

            <label htmlFor="phone">Date of birth</label>
            <input type="date" id="dob" value={formData.dob} onChange={handleInputChange} placeholder="Enter your date of birth" />  


            <label htmlFor="phone">Address</label>
            <input type="text" id="address" value={formData.address} onChange={handleInputChange} placeholder="Enter your address" />  
            
            <label htmlFor="phone">Nation</label>
            <input type="text" id="nation" value={formData.nation} onChange={handleInputChange} placeholder="Enter your nation" />  

            <label htmlFor="phone">Nationality</label>
            <input type="text" id="nationality" value={formData.nationality} onChange={handleInputChange} placeholder="Enter your nationality" />  

            <label htmlFor="phone">Sex</label>
            <input type="text" id="sex" value={formData.sex} onChange={handleInputChange} placeholder="Enter your sex" />  



            {/* Other fields */}
            <Stack direction='row' spacing={4}>

            <Button 
           
            onClick={handleSubmit} >Submit</Button>
            </Stack>
          </div>
          </div>
        );
    //   case 2:
    //     return (
    //       <div className="registration-form">
    //         <h2>Step 2: Your Personal Health</h2>
    //         <label htmlFor="health">Health Issue</label>
    //         <input type="health" id="health" value={formData.health} onChange={handleInputChange} placeholder="Enter your health issue" />
    //         <label htmlFor="insurance-type">Insurance Type</label>
    //         <select id="insurance-type" value={formData.insuranceType} onChange={handleInputChange}>
    //           <option value="health">Health Insurance</option>
    //           <option value="auto">Auto Insurance</option>
    //           <option value="life">Life Insurance</option>
    //         </select>

    //         {/* Other fields */}
    //         <button onClick={handleNext}>Next</button>
    //         <button onClick={handleBack}>Back</button>
    //       </div>
    //     );
    //   case 3:
    //     return (
    //       <div className="registration-form">
    //         <h2>Step 3: Term of use</h2>
    //         <label htmlFor="terms">
    //           <input type="checkbox" id="agreedTerms" checked={formData.agreedTerms} onChange={handleInputChange} />
    //          I agree to the <a href="/terms-of-use" target="_blank" rel="noopener noreferrer">Terms of Use</a>.
    //         </label>
    //         <button onClick={handleNext}>Submit</button>
    //         <button onClick={handleBack}>Back</button>
    //       </div>
    //     );
    //   default:
    //     return null;
    // }
  };

  // return (
  //   <div className="form-container">
  //     {renderStep()}
  //   </div>
  // );
//};

