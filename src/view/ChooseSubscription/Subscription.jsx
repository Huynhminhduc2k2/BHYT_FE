import React, { useState } from 'react';
import "./Subscription.css"

const Subscription = () => {
  return (
    <div className="pricing-plans">
      <div className="plan">
        <h2>Basic</h2>
        <p className="price">$10<span>/month</span></p>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
        <button>Subscribe</button>
      </div>

      <div className="plan popular">
        <span className="popular-badge">Popular</span>
        <h2>Pro</h2>
        <p className="price">$40<span>/6 months</span></p>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
        </ul>
        <button>Subscribe</button>
      </div>

      <div className="plan">
        <h2>Premium</h2>
        <p className="price">$100<span>/year</span></p>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
          <li>Feature 5</li>
        </ul>
        <button>Subscribe</button>
      </div>
    </div>
  );
};


export default Subscription;