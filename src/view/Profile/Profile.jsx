import React from 'react';
import './Profile.css';

const UserProfile = () => {
    const user = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      age: 30,
      city: 'New York',
      avatar: 'https://via.placeholder.com/150', 
    };
  
    return (
      <div className="user-profile">
        <div className="user-options">
          <ul>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#billing">Billing</a></li>
            <li><a href="#plan">Plan</a></li>
            {/* Add more options as needed */}
          </ul>
        </div>
        <div className="user-details">
          <img src={user.avatar} alt="User Avatar" className="avatar" />
          <h2>User Profile</h2>
          <div>
            <label>Name:</label>
            <p>{user.name}</p>
            <label>Email:</label>
            <p>{user.email}</p>
            <label>Age:</label>
            <p>{user.age}</p>
            <label>City:</label>
            <p>{user.city}</p>
          </div>
          <button className="button">Edit Profile</button>
        </div>
      </div>
    );
  };
  
  export default UserProfile;