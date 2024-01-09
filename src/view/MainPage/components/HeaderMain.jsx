import React from 'react';
import HealthLogo from '../../../assets/logos/HealthInsurance.png';

function HeaderMain() {
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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderMain;
