import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Management.css';
import { Button } from '@chakra-ui/react';
const SubscriptionComponent = () => {
  const [customerId, setCustomerId] = useState('');
  const [subscriptions, setSubscriptions] = useState([]);

  const handleCustomerIdChange = (e) => {
    setCustomerId(e.target.value);
  };

  const handleGetSubscription = async () => {
    try {
      const response = await axios.get(`https://localhost:7067/v2/api/Payment/GetSubscription/${customerId}`);
      setSubscriptions(response.data);
    } catch (error) {
      console.error('Error fetching subscription data:', error);
    }
  };

  useEffect(() => {
    // Fetch initial data or perform other actions on component mount if needed
  }, []);

  return (
    <div className="subscription-container">
      <h2>Subscription Information</h2>
      <div className="input-container">
        <label htmlFor="customerId">Customer ID:</label>
        <input
          type="text"
          id="customerId"
          value={customerId}
          onChange={handleCustomerIdChange}
          placeholder="Enter Customer ID"
        />
        <Button onClick={handleGetSubscription}>Get Subscription</Button>
      </div>

      <div className="subscription-details">
        {subscriptions.length > 0 ? (
          <ul>
            {subscriptions.map((subscription) => (
              <li key={subscription.SubscriptionId}>
                <strong>Subscription ID:</strong> {subscription.SubscriptionId} | 
                <strong> Status:</strong> {subscription.Status} | 
                <strong> Price ID:</strong> {subscription.PriceId} | 
                <strong> Start:</strong> {subscription.CurrentPeriodStart} | 
                <strong> End:</strong> {subscription.CurrentPeriodEnd}
              </li>
            ))}
          </ul>
        ) : (
          <p>No subscriptions found.</p>
        )}
      </div>
    </div>
  );
};

export default SubscriptionComponent;