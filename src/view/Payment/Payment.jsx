import React, { useState } from 'react';
import "./Payment.css";
function Payment() {
    const [cardInfo, setCardInfo] = useState({
        name: '',
        cardNumber: '',
        expri: '',
        CVC: '',
      });
      const handleInputChange = (e) => {
        const { id, value } = e.target;
        setCardInfo({
          ...cardInfo,
          [id]: value,
        });
      };

    return (
        <div className="payment-form">
          <h2>Payment Details</h2>
          <form>
            
            <input type="text" id="name" value={cardInfo.name} onChange={handleInputChange} placeholder="Card holder Name" />
            <input type="text" id="cardNumber" value={cardInfo.cardNumber} onChange={handleInputChange} placeholder="Card Number" />
            <input type="text" id="expri" value={cardInfo.expri} onChange={handleInputChange} placeholder="Expriration Date" />
            <input type="text" id="CVC" value={cardInfo.CVC} onChange={handleInputChange} placeholder="CVC" />  
            <select className="card-type">
              <option value="" disabled selected hidden>
                Card Type
              </option>
              <option value="visa">Visa</option>
              <option value="mastercard">Mastercard</option>
              <option value="amex">American Express</option>
            </select>
            <button>Pay Now</button>
          </form>
        </div>
      );
    };
    
    const OrderRecap = () => {
      return (
        <div className="order-recap">
          <h2>Order Recap</h2>
          <div className="order-details">
            <p>Product: Example Product</p>
            <p>Price: $19.99</p>
            <p>Quantity: 1</p>
          </div>
          <hr />
          <div className="order-details">
            <p>Total:</p>
            <p className="total">$19.99</p>
          </div>
        </div>
      );
    };
    
    const PaymentAndOrder = () => {
      return (
        <div className='PaymentandOrder'>
          <Payment />
          <OrderRecap />
        </div>
      );
    };
    
export default PaymentAndOrder;