import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Management.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderMainUser from '../MainPage/components/HeaderMainUser';
import ContentMainUser from '../MainPage/components/ContentMainUser';

import { Button } from '@chakra-ui/react';
const SubscriptionComponent = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [data, setData] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('Token not found. Please log in.');
          return;
        }

        const response = await axios.get('https://localhost:7067/api/User/GetCurrentUser', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserInfo(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to fetch user data.');
      }
    };

    getCurrentUser();
  }, []);

  useEffect(() => {
    // Call handleGetSubscription when userInfo changes
    if (userInfo) {
      handleGetSubscription();
    }
  }, [userInfo]);

  const handleGetSubscription = async () => {
    try {
      const response = await axios.get(`https://localhost:7067/v2/api/Payment/GetSubscription?email=${userInfo.email}`);
      setSubscriptions(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching subscription data:', error);
      setError('Failed to fetch subscription data.');
    }
  };

  const handleCancelSubscription = async (subscriptionId) => {
    try {
      const token = localStorage.getItem('token');

      const response = await axios.post(
        'https://localhost:7067/v2/api/Payment/CancelSubscription',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          params: { subscriptionId: subscriptionId },
        }
      );
      console.log(response.data);
      handleGetSubscription();
    } catch (error) {
      console.error('Error canceling subscription:', error.response || error);
    }
  };

  return (
    <div className="subscription-container">
      <div className="Mainpage">
        <HeaderMainUser />
        <ContentMainUser />
      </div>
      <h2>Subscription Information</h2>
      <div className="subscription-details">
        {subscriptions.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Insurance Plan</th>
                <th>Status</th>
                <th>Start</th>
                <th>End</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((subscription) => (
                <tr key={subscription.subscriptionId}>
                  <td>
                    {subscription.items.map((item, index) => (
                      <React.Fragment key={index}>
                        {item.result.subscriptionName}
                        {index !== subscription.items.length - 1 && ', '}
                      </React.Fragment>
                    ))}
                  </td>
                  <td>{subscription.status}</td>
                  <td>{subscription.currentPeriodStart}</td>
                  <td>{subscription.currentPeriodEnd}</td>
                  <td>
                    <Button onClick={() => handleCancelSubscription(subscription.subscriptionId)}>
                      Cancel
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>{error || 'No subscriptions found.'}</p>
        )}
      </div>
    </div>
  );
}
export default SubscriptionComponent;