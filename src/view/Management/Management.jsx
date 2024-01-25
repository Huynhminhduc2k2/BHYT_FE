import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Management.css';
import { Button } from '@chakra-ui/react';
const SubscriptionComponent = () => {
  const [email, setEmail] = useState('');
  const [subscriptionDetails, setSubscriptionDetails] = useState(null);
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    async function GetCurrentUser() {
      const token = localStorage.getItem('token');
      try {
        if (token) {
          const options = {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          };

          const res = await fetch(
            'https://localhost:7067/api/User/GetCurrentUser',
            options,
          );
          const data = await res.json();

          setUserInfo(data);

          if (!res.ok) {
            throw new Error(Error: ${res,.status});
          }
        
      } catch (error) {
        console.error('Error:', error);
      }
    }

    GetCurrentUser();
  }, []);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const getSubscription = async () => {
    try {
      const response = await fetch(`https://localhost:7067/v2/api/Payment/GetSubscription?email=${userInfo.email}`);
      const data = await response.json();

      if (response.ok) {
        setSubscriptionDetails(data);
        setError(null);
      } else {
        setSubscriptionDetails(null);
        setError(data.message || 'An error occurred');
      }
    } catch (error) {
      setSubscriptionDetails(null);
      setError('An error occurred while fetching data');
    }
  };

  return (
    <div>
      <h1>Subscription Information</h1>
     
      <button onClick={getSubscription}>Get Subscription</button>

      {subscriptionDetails && (
        <div>
          <h2>Subscription Details</h2>
          <p>Subscription ID: {subscriptionDetails.subscriptionId}</p>
          <p>Status: {subscriptionDetails.status}</p>
          <p>Price ID: {subscriptionDetails.PriceId}</p>
          <p>Current Period Start: {subscriptionDetails.currentPeriodStart}</p>
          <p>Current Period End: {subscriptionDetails.currentPeriodEnd}</p>
        </div>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default SubscriptionComponent;