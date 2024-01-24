import React from 'react';
import HealthLogo from '../../../assets/logos/HealthInsurance.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../API_Config';
import { isAdmin } from '../MainPage';

function HeaderMainAdmin() {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        // Token is missing, handle the scenario accordingly
        console.error('No token found. Logout aborted.');
        return;
      }

      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          credentials: 'include',
        },
      };

      const response = await axios.post(`${API_URL}/Logout`, '', options);

      console.log(response);

      console.log('Logout successful', response.data);

      // Clear the token from local storage after successful logout
      localStorage.removeItem('token');
      localStorage.removeItem('role');

      // Redirect or navigate to the desired page after logout
      navigate('/');

      // Show a success message to the user
      alert('Logout successful');
    } catch (error) {
      console.error('Logout failed', error.response?.data);

      if (error.response?.status === 401) {
        // Handle 401 error, for example, redirect to the login page
        console.log('User is not authenticated. Redirecting to login page.');
        navigate('/login');
        return;
      }

      if (
        error.response?.status === 400 &&
        error.response?.data?.title ===
          'One or more validation errors occurred.'
      ) {
        // Handle validation errors
        console.error('Validation errors:', error.response.data.errors);
      }

      // Show an error message to the user for other cases
      alert('Logout failed: ' + (error.response?.data || 'Unknown error'));
    }
  }

  return (
    <div className="header">
      <div className="d-flex justify-content-evenly ">
        <div className="d-flex align-items-center ">
          <h1>Insurance Admin Page</h1>
        </div>
        <div>
          <img src={HealthLogo} alt="Health logo" />
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarm"
            aria-controls="navbarm"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbarm"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <a className="nav-link text-white" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-white" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-white" href="#">
                  About
                </a>
              </li>
              <li className="nav-item mx-2">
                <button
                  className="nav-link text-white"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderMainAdmin;
