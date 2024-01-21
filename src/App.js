import React from 'react';
import { userState, useState } from 'react';

import './App.css';
import SignIn from './view/SignIn/SignIn';
import SignUp1 from './view/SignUp/SignUp1';
import SignUp2 from './view/SignUp/SignUp2';
import MainPage from './view/MainPage/MainPage';
import InsuranceRegistrationForm from './view/InsuranceRegisForm/RegisForm';
import Subscription from './view/ChooseSubscription/Subscription';
import Payment from './view/Payment/Payment';
import UserProfile from './view/Profile/Profile';
import UserRequestForm from './view/RequestPaymentForm/UserRequestForm';
import Management from './view/Management/Management';
import { ChakraProvider } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

function App() {
  return (
    <>
      {
        <Router>
          <Routes>
            <Route path="/home" element={<MainPage />} />
            <Route path="/" element={<SignIn />} default />
            <Route path="/signup" element={<SignUp1 />} />
            <Route path="/signupVerify" element={<SignUp2 />} />
            <Route path="/insuregis" element={<InsuranceRegistrationForm />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/management" element={<Management />} />
          </Routes>
        </Router>
      }
    </>
  );
}

export default App;
