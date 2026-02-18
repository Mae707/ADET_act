import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  const [latency, setLatency] = useState(24);

  // simulate connection latency
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 40) + 10);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <h1 className="page-title">GasGuard: Biogas Monitoring Dashboard</h1>

      <div className="project-info">
        <span>SYSTEMS_CORE_V1</span>
        <span> | </span>
        <span>Frontend Project 2026</span>
        <span> | </span>
        <span>NODE_STABLE</span>
      </div>

      <div className="user-profile">
        <div className="connection-speed">{latency}ms</div>
        <FaUserCircle />
        <span>Admin User</span>
      </div>
    </header>
  );
}

export default Header;
