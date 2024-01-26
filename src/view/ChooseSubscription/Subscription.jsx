import React, { useState } from 'react';
import './Subscription.css';
import { Button } from '@chakra-ui/react';
import HeaderMainUser from '../MainPage/components/HeaderMainUser';
import ContentMainUser from '../MainPage/components/ContentMainUser';
const Subscription = () => {
  const SubRequest = (
    <div className="pricing-plans">
      <div className="plan">
        <h2>Basic</h2>
        <p className="price">
          A$5.99<span>/month</span>
        </p>
        <ul>
          <li>Emergency Room Coverage</li>
          <li>Hospitalization</li>
          <li>Outpatient Care</li>
        </ul>

        <form
          action="https://localhost:7067/v2/api/Payment/Basic"
          method="POST"
        >
          <Button type="submit" colorScheme="green">
            Buy Now
          </Button>
        </form>
      </div>
      <div className="plan popular">
        <h2>Advance</h2>
        <p className="price">
          A$6.99<span>/month</span>
        </p>
        <ul>
          <li>All of the Basic</li>
          <li>Specialist Consultations</li>
          <li>Diagnostic Tests</li>
          <li>Mental Health Services</li>
        </ul>
        <form
          action="https://localhost:7067/v2/api/Payment/Advance"
          method="POST"
        >
          <Button type="submit" colorScheme="green">
            Buy Now
          </Button>
        </form>
      </div>

      <div className="plan">
        <h2>Premium</h2>
        <p className="price">
          A$9.99<span>/month</span>
        </p>
        <ul>
          <li>All of the Advance</li>
          <li>Comprehensive Hospital Coverage</li>
          <li>Specialized Treatments</li>
          <li>Extensive Prescription Drug Benefits</li>
          <li>International Coverage</li>
        </ul>
        <form
          action="https://localhost:7067/v2/api/Payment/Premium"
          method="POST"
        >
          <Button type="submit" colorScheme="green">
            Buy Now
          </Button>
        </form>
      </div>
    </div>
  );
  return (
    <div className="Mainpage">
      <HeaderMainUser />
      <ContentMainUser setSubRequestPage={SubRequest} />
    </div>
  );
};

export default Subscription;
