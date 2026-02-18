import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <h1 className="page-title">GasGuard: Biogas Monitoring Dashboard</h1>
      <div className="user-profile">
        <FaUserCircle className="user-icon" />
      </div>
    </header>
  );
};

export default Header;