import React from 'react';
import './App.css';
import SignIn from './view/SignIn';
import SignUp1 from './view/SignUp/SignUp1';
import SignUp2 from './view/SignUp/SignUp2';
import MainPage from './view/MainPage';
import { userState, useState } from 'react';
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
          <Route path="/signup" element={<SignUp1 />} default />
          <Route path="/signin" element={<SignIn/>} default />
          </Routes>
      </Router>
    </>
  );
}

export default App;
