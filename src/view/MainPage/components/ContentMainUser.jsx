import React, { useEffect, useState } from 'react';
import Contact from '../../Contact/Contact';
import {
  FaCartArrowDown,
  FaUserAlt,
  FaSafari,
  FaTasks,
  FaCar,
} from 'react-icons/fa';
import DataRow from './RowContent';

function ContentMainUser(props) {
  return (
    <div className="d-flex home">
      <div className="d-flex sidebar flex-column flex-shrink-0 bg-dark">
        <ul className="nav nav-pills flex-column mb-auto px-0 mt-4">
          <li className="nav-item ">
            <a href="" className="nav-link text-white active">
              <FaSafari /> <span className="ms-2">Profile</span>
            </a>
          </li>
          <li className="nav-item ">
            <a href="" className="nav-link text-white">
              <FaCartArrowDown />{' '}
              <span className="ms-2">Insurance Requests</span>
            </a>
          </li>
          <li className="nav-item ">
            <a href="" className="nav-link text-white">
              <FaUserAlt /> <span className="ms-2">Payment Information</span>
            </a>
          </li>
          <li className="nav-item ">
            <a href="" className="nav-link text-white">
              <FaTasks /> <span className="ms-2">Subscription</span>
            </a>
          </li>
          <li className="nav-item ">
            <a href="" className="nav-link text-white">
              <FaTasks /> <span className="ms-2">...</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContentMainUser;
