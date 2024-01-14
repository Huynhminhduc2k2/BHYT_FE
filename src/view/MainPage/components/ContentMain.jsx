import React from 'react';
import {
  FaCartArrowDown,
  FaUserAlt,
  FaSafari,
  FaTasks,
  FaCar,
} from 'react-icons/fa';
import DataRow from './RowContent';

function ContentMain() {
  // Nhận data truyền từ PostgreSQL (DBeaver) ở đây

  return (
    <div className="d-flex home">
      <div className="d-flex sidebar flex-column flex-shrink-0  bg-dark">
        <ul className="nav nav-pills flex-column mb-auto px-0 mt-4">
          <li className="nav-item ">
            <a href="" className="nav-link text-white active">
              <FaSafari /> <span className="ms-2">Dashboard</span>
            </a>
          </li>
          <li className="nav-item ">
            <a href="" className="nav-link text-white">
              <FaCartArrowDown /> <span className="ms-2">Payments</span>
            </a>
          </li>
          <li className="nav-item ">
            <a href="" className="nav-link text-white">
              <FaUserAlt /> <span className="ms-2">Customers</span>
            </a>
          </li>
          <li className="nav-item ">
            <a href="" className="nav-link text-white">
              <FaTasks /> <span className="ms-2">Report</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="content container mt-3">
        <div className="row">
          <div
            className="col-md-3 text-white col bg-success d-flex 
                    justify-content-around px-1 py-3 rounded"
          >
            <p>Total Insurances</p>
            <FaCartArrowDown />
          </div>
          <div
            className="col-md-3 text-white col bg-danger d-flex 
                    justify-content-around px-1 py-3 rounded"
          >
            <p>Total Customers</p>
            <FaCartArrowDown />
          </div>
          <div
            className="col-md-3 text-white col bg-warning d-flex 
                    justify-content-around px-1 py-3 rounded"
          >
            <p>Total Incomes</p>
            <FaCartArrowDown />
          </div>
          <div
            className="col-md-3 text-white col bg-primary d-flex 
                    justify-content-around px-1 py-3 rounded"
          >
            <p>Total Payments</p>
            <FaCartArrowDown />
          </div>
        </div>

        <div className="d-flex justify-content-between mt-3">
          <h2>Insurances</h2>

          <div className="d-flex gap-2 search ">
            <input
              type="text"
              placeholder="Searching"
              className="search--input"
            />
            <button type="submit" className="btn btn-success">
              {' '}
              Search{' '}
            </button>
          </div>

          <button className="btn btn-success">+ Add</button>
        </div>
        <table class="table w-100">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Customer</th>
              <th scope="col">Due</th>
              <th scope="col">Manage</th>
            </tr>
          </thead>
          <tbody>
            <DataRow
              no={1}
              name="Bảo hiểm nhân thọ"
              customer="Nhân"
              due="Expired"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContentMain;
