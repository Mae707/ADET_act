import React from 'react';
import { FaHome, FaServer, FaChartBar, FaBell, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: <FaHome />, active: true },
    { name: 'Devices', icon: <FaServer /> },
    { name: 'Analytics', icon: <FaChartBar /> },
    { name: 'Alerts', icon: <FaBell /> },
    { name: 'Settings', icon: <FaCog /> },
  ];

  return (
    <div className="sidebar">
      <div className="brand">
        <h2 className="brand-text">GasGuard</h2>
      </div>
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className={`menu-item ${item.active ? 'active' : ''}`}>
            <span className="menu-icon">{item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;