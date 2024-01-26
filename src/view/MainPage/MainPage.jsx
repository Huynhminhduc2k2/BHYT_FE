import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPage.css';
import HeaderMainAdmin from './components/HeaderMainAdmin.jsx';
import ContentMainAdmin from './components/ContentMainAdmin.jsx';
import ContentMainUser from './components/ContentMainUser.jsx';
import HeaderMainUser from './components/HeaderMainUser.jsx';

export const isAdmin = localStorage.getItem('role') === 'ADMIN' ? true : false;

function MainPage() {
  const [navPage, setNavPage] = React.useState('');

  function toggleNavPage(name) {
    // console.log(name);
    setNavPage(name);
  }

  // console.log(navPage);

  return (
    <div className="Mainpage">
      {isAdmin ? (
        <div>
          <HeaderMainAdmin page={toggleNavPage} />
          <ContentMainAdmin setNav={navPage} />
        </div>
      ) : (
        <div>
          <HeaderMainUser page={toggleNavPage} />
          <ContentMainUser setNav={navPage} />
        </div>
      )}
    </div>
  );
}

export default MainPage;
