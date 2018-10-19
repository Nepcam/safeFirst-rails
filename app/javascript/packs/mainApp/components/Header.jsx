import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbarcolour">
      <div className="container">
        <div className="navbar-brand navbar-start">
          <h1 className="title is-1">safeFirst</h1>
        </div>
        <div className="navbar-menu navbar-end is-active">
          <Link to="/dashboard" className="navbar-item is-size-4">Dashboard</Link>
          <Link to="/dailymeeting" className="navbar-item is-size-4">Daily Meeting</Link>
          <Link to="/hsmeeting" className="navbar-item is-size-4">H&S Meeting</Link>
          <Link to="/incidents" className="navbar-item is-size-4">Incidents</Link>
        </div>
      </div>
    </nav>
  )
};

export default Header;
