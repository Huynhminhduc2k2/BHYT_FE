import React from 'react';
import './App.css';
import SignIn from './view/SignIn';
import SignUp1 from './view/SignUp/SignUp1';
import SignUp2 from './view/SignUp/SignUp2';
import MainPage from './view/MainPage';
import { userState, useState } from 'react';
import InsuranceRegistrationForm from './view/InsuranceRegisForm/RegisForm';
import Subscription from './view/ChooseSubscription/Subscription';
import Payment from './view/Payment/Payment';
import UserProfile from './view/Profile/Profile';
import { ChakraProvider } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { ReactDOM } from 'react';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<MainPage />} default />
          <Route path="/signin" element={<SignIn />} default />
          <Route path="/signup" element={<SignUp1 />} default />
          <Route path="/signupVerify" element={<SignUp2 />} default />
          <Route path="/insuregis" element={<InsuranceRegistrationForm />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
