import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPage.css';
import HeaderMainAdmin from './components/HeaderMainAdmin.jsx';
import ContentMainAdmin from './components/ContentMainAdmin.jsx';
import ContentMainUser from './components/ContentMainUser.jsx';
import HeaderMainUser from './components/HeaderMainUser.jsx';

export const isAdmin = localStorage.getItem('role') === 'ADMIN' ? true : false;

function MainPage() {

  return (
    <div className="Mainpage">
      {isAdmin ? (
        <div>
          <HeaderMainAdmin />
          <ContentMainAdmin />
        </div>
      ) : (
        <div>
          <HeaderMainUser />
          <ContentMainUser />
        </div>
      )}
    </div>
  );
}

export default MainPage;
