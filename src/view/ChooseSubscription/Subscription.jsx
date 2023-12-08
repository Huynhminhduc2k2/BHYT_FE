import React, { useState } from 'react';
import "./Subscription.css"
const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Define subscription plans
  const subscriptionPlans = [
    { id: 1, name: 'Basic', price: '$9.99/month', features: ['Feature 1', 'Feature 2'] },
    { id: 2, name: 'Standard', price: '$19.99/month', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { id: 3, name: 'Premium', price: '$29.99/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
  ];

  // Function to handle plan selection
  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div>
      <h2>Choose Your Subscription Plan</h2>
      <div className="subscription-plans">
        {subscriptionPlans.map((plan) => (
          <div key={plan.id} className={`plan ${selectedPlan === plan ? 'selected' : ''}`}>
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button onClick={() => handlePlanSelect(plan)}>
              {selectedPlan === plan ? 'Selected' : 'Select'}
            </button>
          </div>
        ))}
      </div>
      {selectedPlan && (
        <div className="selected-plan-details">
          <h3>Selected Plan: {selectedPlan.name}</h3>
          <p>Price: {selectedPlan.price}</p>
          <p>Features:</p>
          <ul>
            {selectedPlan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button>Subscribe</button>
        </div>
      )}
    </div>
  );
};

export default Subscription;