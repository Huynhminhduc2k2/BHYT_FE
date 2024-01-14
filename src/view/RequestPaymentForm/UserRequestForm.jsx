import { React, useState } from 'react';
import data from './dataServices';
import Service from './Service';
import './UserRequestForm.css';

export default function UserRequestForm() {
  const services = data.map((item) => {
    return <Service item={item} />;
  });

  const [userChoice, setUserChoice] = useState('');

  const handleServiceChange = (event) => {
    setUserChoice(event.target.value);
  };

  return (
    <div>
      <hr />
      <h1 className="requestForm--title">Request Payment Form</h1>
      <hr />
      <form action="/home" method="post" className="requestForm--container">
        <div className="requestForm--info">
          <h3>Full name:</h3>
          <input type="text" placeholder="Type your full name" />
          <h3>Age:</h3>
          <input type="text" placeholder="Type your age" />
          <h3>Phone:</h3>
          <input type="text" placeholder="Type your phone" />
          <h3>Address:</h3>
          <input type="text" placeholder="Type your address" />
          <h3>Email:</h3>
          <input type="text" placeholder="Type your email" />
          <h3>Type of service:</h3>
          <select
            id="services"
            name="services"
            onChange={handleServiceChange}
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="0">Car Insurance</option>
            <option value="1">Health Insurance</option>
            <option value="2">Pet Insurance</option>
            <option value="3">Life Insurance</option>
          </select>
          <input className='btn btn-success' type="submit" value="Request" />
        </div>
        <section>{services[userChoice]}</section>
      </form>
    </div>
  );
}
