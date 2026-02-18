import { useEffect, useState } from "react";
import StatCard from "../components/Statcard";
import AlertCard from "../components/Alertcard";

function Dashboard() {
  const [systemData, setSystemData] = useState({
    gasLevel: 72,
    temperature: 38,
    wasteLevel: "Full",
    status: "Active"
  });

  const [timestamp, setTimestamp] = useState(
    new Date().toLocaleTimeString()
  );

  const [alerts, setAlerts] = useState([
    { id: 1, text: "Gas production normal", type: "success" },
    { id: 2, text: "Temperature stable", type: "success" },
    { id: 3, text: "Waste level nearing capacity", type: "warning" }
  ]);

  // Live clock
  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Auto alert when waste full
  useEffect(() => {
    if (systemData.wasteLevel === "Full") {
      setAlerts(prev => [
        ...prev,
        {
          id: Date.now(),
          text: "Waste tank FULL - Immediate action required",
          type: "danger"
        }
      ]);
    }
  }, [systemData.wasteLevel]);

  return (
    <div className="dashboard-wrapper">
      <nav className="top-bar">
        <div className="logo-group">
          <div className="logo">
            BIOGAS <span>MONITOR</span>
          </div>
          <div className="timestamp">Updated: {timestamp}</div>
        </div>

        <div className="status-container">
          <span className="pulse-dot"></span>
          <span className="status-text">
            SYSTEM {systemData.status.toUpperCase()}
          </span>
          <div className="connectivity-icon">
            <span>Live</span>
          </div>
        </div>
      </nav>

      <main className="content">
        <section className="metrics-grid">
          <StatCard
            icon="🔥"
            label="Gas Level"
            value={`${systemData.gasLevel}%`}
            gauge={systemData.gasLevel}
          />

          <StatCard
            icon="🌡️"
            label="Temperature"
            value={`${systemData.temperature}°C`}
          />

          <StatCard
            icon="⚠️"
            label="Waste Level"
            value={systemData.wasteLevel}
            type={systemData.wasteLevel === "Full" ? "danger" : "success"}
          />
        </section>

        <section className="alerts-container">
          <h3>Recent Notifications</h3>
          {alerts.map(alert => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
