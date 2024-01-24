import React, { useEffect, useState } from 'react';
import {
  FaCartArrowDown,
  FaUserAlt,
  FaSafari,
  FaTasks,
  FaCar,
} from 'react-icons/fa';
import DataRow from './RowContent';

function ContentMainAdmin() {
  const [insuranceList, setInsuranceList] = useState([]);

  useEffect(() => {
    async function getInsurances() {
      const token = localStorage.getItem('token');
      try {
        if (token) {
          const options = {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          };

          const res = await fetch(
            'https://localhost:7067/v1/api/Insurance/all',
            options,
          );
          const data = await res.json();

          setInsuranceList(data);

          if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
          }
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    getInsurances();
  }, []);

  const insurances = insuranceList.map((item) => <DataRow {...item} />);

  return (
    <div className="d-flex home">
      <div className="d-flex sidebar flex-column flex-shrink-0 bg-dark">
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

      <div className="content container">
        <div className="content--Summary row gap-3 mt-2 mb-2">
          <div
            className="text-white col bg-success d-flex
                    justify-content-around rounded align-items-center py-3"
          >
            <p>Total Insurances</p>
            {insuranceList.length}
            <FaCartArrowDown />
          </div>
          <div
            className="text-white col bg-danger d-flex
                    justify-content-around rounded align-items-center py-3"
          >
            <p>Total Customers</p>
            {insuranceList.length}
            <FaCartArrowDown />
          </div>
          <div
            className="text-white col bg-warning d-flex
                    justify-content-around rounded align-items-center py-3"
          >
            <p>Total Incomes</p>
            {insuranceList.length}
            <FaCartArrowDown />
          </div>
          <div
            className="text-white col bg-primary d-flex
                    justify-content-around rounded align-items-center py-3"
          >
            <p>Total Payments</p>
            {insuranceList.length}
            <FaCartArrowDown />
          </div>
        </div>

        <div className="d-flex justify-content-between mt-3">
          <h2 className="insurance--search--title">Insurances</h2>

          <div className="d-flex gap-2 insurance--search">
            <input
              type="text"
              placeholder="Searching"
              className="insurance--search--input"
            />
            <button type="submit" className="btn btn-success">
              {' '}
              Search{' '}
            </button>

            <button className="btn btn-secondary text-white">+ Add</button>
          </div>
        </div>
        <table class="table w-100">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                InsuranceID
              </th>
              <th scope="col" className="text-center">
                UserID
              </th>
              <th scope="col" className="text-center">
                Type
              </th>
              <th scope="col" className="text-center">
                Status
              </th>
              <th scope="col" className="text-center">
                PremiumAmount
              </th>
              <th scope="col" className="text-center">
                StartDate
              </th>
              <th scope="col" className="text-center">
                EndDate
              </th>
              <th scope="col" className="text-center">
                LastPaymentDate
              </th>
              <th scope="col" className="text-center">
                IsAutoRenewal
              </th>
              {/* <th scope="col" className="text-center">
                CreatedBy
              </th>
              <th scope="col" className="text-center">
                UpdatedBy
              </th> */}
              <th scope="col" className="text-center">
                Manage
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {insuranceList.length > 0 && { insurances }} */}
            {/* <DataRow id= {5} type="hello"/> */}
            {insurances}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContentMainAdmin;
