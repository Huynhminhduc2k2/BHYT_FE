import React, { useEffect, useState } from 'react';
import {
  FaCartArrowDown,
  FaUserAlt,
  FaSafari,
  FaTasks,
  FaCar,
} from 'react-icons/fa';
import DataRow from './RowContent';
import axios from 'axios';

function ContentMainAdmin() {
  const [seeDetail, setSeeDetail] = React.useState(false);

  const [insurance, setInsurance] = React.useState({});

  const [actionType, setActionType] = React.useState('');

  function outDetail() {
    setSeeDetail(!seeDetail);
  }

  async function toggleDetail(id, actionType) {
    setSeeDetail(!seeDetail);
    try {
      const token = localStorage.getItem('token');

      //console.log(id);
      //console.log(actionType);

      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        params: {
          insuranceID: id, // Add the insuranceID to the params object
        },
      };

      const response = await axios.get('/Insurance/detail', options);

      if (!response) {
        console.error('Empty response received');
        return;
      }

      setInsurance(response.data.insuranceResp); // Set the response.data to the state

      setActionType(actionType);
    } catch (error) {
      console.error('Detail failed', error.response?.data);

      if (
        error.response?.status === 400 &&
        error.response?.data?.title ===
          'One or more validation errors occurred.'
      ) {
        // Xử lý lỗi validation
        console.error('Validation errors:', error.response.data.errors);
      }

      alert('Detail failed: ' + (error.response?.data || 'Unknown error'));
    }
  }

  const [insuranceList, setInsuranceList] = useState([]);

  console.log(actionType);

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
  }, [seeDetail]);

  const insurances = insuranceList.map((item) => (
    <DataRow
      {...item}
      // on={() => {
      //   toggleDetail(item.insuranceID);
      // }}
      on={toggleDetail}
    />
  ));

  const [isAddingInsurance, setIsAddingInsurance] = useState(false);

  function toggleAddInsurance() {
    setIsAddingInsurance(!isAddingInsurance);
  }

  const [formData, setFormData] = useState({
    insuranceType: '',
  });

  function handleChangeAdd(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const options = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await axios.post('/Insurance/register', formData, options);

        if (!res) {
          console.error('Empty response received');
          return;
        }

        alert('Add successful');
      }
    } catch (error) {
      console.error('Error: ', error);

      console.error('Add failed', error.res?.data);

      if (
        error.res?.status === 400 &&
        error.res?.data?.title === 'One or more validation errors occurred.'
      ) {
        // Xử lý lỗi validation
        console.error('Validation errors:', error.res.data.errors);
      }

      alert('Add failed: ' + (error.res?.data || 'Invalid insurance type'));
    }
  }

  const [upForm, setUpForm] = React.useState({
    insuranceID: '',
    userID: '',
    insuranceType: '',
    status: '',
  });

  function handleUpdate(event) {
    const { name, value } = event.target;
    setUpForm((prevUpForm) => ({
      ...prevUpForm,
      insuranceID: insurance.insuranceID,
      userID: insurance.userID,
      [name]: value,
    }));
  }

  async function handleUpForm(e) {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');

      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.post('/Insurance/edit', upForm, options);

      if (!response) {
        console.error('Empty response received');
        return;
      }

      alert('Update success');
    } catch (error) {
      console.error('Detail failed', error.response?.data);

      if (
        error.response?.status === 400 &&
        error.response?.data?.title ===
          'One or more validation errors occurred.'
      ) {
        // Xử lý lỗi validation
        console.error('Validation errors:', error.response.data.errors);
      }

      alert('Update failed: ' + (error.response?.data || 'Unknown error'));
    }
  }

  const isUp = actionType === 'U' && seeDetail ? true : false;
  const isRead = actionType === 'R' && seeDetail ? true : false;

  return (
    <div className="d-flex home">
      {isRead && (
        <div className="overlay">
          <div className="overlay-content">
            <h4>InsuranceID:</h4>
            <p>{insurance.insuranceID}</p>
            <h4>UserID:</h4>
            <p>{insurance.userID}</p>
            <h4>Type:</h4>
            <p>{insurance.type}</p>
            <h4>Status:</h4>
            <p>{insurance.status}</p>
            <h4>PremiumAmount:</h4>
            <p>{insurance.premiumAmount}</p>
            <h4>StartDate:</h4>
            <p>{insurance.startDate}</p>
            <h4>EndDate:</h4>
            <p>{insurance.endDate}</p>
            <h4>LastPaymentDate:</h4>
            <p>{insurance.lastPaymentDate}</p>
            <h4>IsAutoRenewal:</h4>
            <p>{insurance.isAutoRenewal}</p>
            <h4>CreatedBy:</h4>
            <p>{insurance.createdBy}</p>
            <h4>UpdatedBy:</h4>
            <p>{insurance.updatedBy}</p>
            <h4>CreatedAt:</h4>
            <p>{insurance.createdAt}</p>
            <h4>UpdateAt:</h4>
            <p>{insurance.updateAt}</p>
            <button
              className="btn btn-secondary insurance--add--btn"
              onClick={outDetail}
            >
              Back
            </button>
          </div>
        </div>
      )}
      {isUp && (
        <div className="overlay">
          <div className="overlay-content-up">
            <h2>{`Update Insurance ${insurance.insuranceID} (${insurance.type})`}</h2>
            <form onSubmit={handleUpForm}>
              <h4>InsuranceID:</h4>
              <p>{insurance.insuranceID}</p>
              <h4>UserID:</h4>
              <p>{insurance.userID}</p>
              <h4>Type:</h4>
              <input
                type="text"
                placeholder="Type insurance type"
                value={upForm.insuranceType}
                onChange={handleUpdate}
                name="insuranceType"
              />
              <h4>Status:</h4>
              <input
                type="text"
                placeholder="Type status"
                value={upForm.status}
                onChange={handleUpdate}
                name="status"
              />
              <button
                type="submit"
                className="btn btn-primary insurance--add--btn"
              >
                Save
              </button>
              <button
                className="btn btn-secondary insurance--add--btn"
                onClick={outDetail}
              >
                Back
              </button>
            </form>
          </div>
        </div>
      )}

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

            {isAddingInsurance && (
              <form onSubmit={handleSubmit} className="insurance--add--form">
                <input
                  type="text"
                  placeholder="Type Insurance Type"
                  className="insurance--search--input"
                  onChange={handleChangeAdd}
                  value={formData.insuranceType}
                  name="insuranceType"
                />

                <button
                  type="submit"
                  className="btn btn-primary insurance--add--btn"
                >
                  Create
                </button>
              </form>
            )}

            <button
              className="btn btn-secondary text-white"
              onClick={toggleAddInsurance}
            >
              {isAddingInsurance ? 'Cancel' : '+ Add'}
            </button>
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
              <th scope="col" className="text-center">
                Manage
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {insuranceList.length > 0 && { insurances }} */}
            {/* <DataRow id={5} type="hello" seeDetail={props.overLay} /> */}
            {insurances}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContentMainAdmin;
