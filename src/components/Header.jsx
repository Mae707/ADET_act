import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <h1 className="page-title">GasGuard: Biogas Monitoring Dashboard</h1>
      <div className="user-profile">
        <FaUserCircle className="user-icon" />
import { useEffect, useState } from "react";

function Header() {
  const [latency, setLatency] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 40) + 10);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="app-top-header">
      <div className="project-info">
        <span className="project-name">SYSTEMS_CORE_V1</span>
        <span className="divider">|</span>
        <span className="project-lab">Frontend Project 2026</span>
        <span className="divider">|</span>
        <span className="status-tag">NODE_STABLE</span>
      </div>

      <div className="user-profile">
        <div className="connection-speed">{latency}ms</div>
        <span>Admin User</span>
        <div className="user-avatar"></div>
      </div>
    </header>
  );
};

export default Header;
