import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPage.css';
import HeaderMain from './components/HeaderMain.jsx';
import ContentMain from './components/ContentMain.jsx';

function MainPage() {
  return (
    <div>
        <HeaderMain />
        <ContentMain />
    </div>
  );
}

export default MainPage;
