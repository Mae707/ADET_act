function Dashboard() {
  const systemData = {
    gasLevel: 72, // Use numbers for easier logic
    temperature: "38°C",
    wasteLevel: "Full",
    status: "Active"
  };

  const alerts = [
    { text: "Gas production normal", type: "success" },
    { text: "Temperature stable", type: "success" },
    { text: "Waste level nearing capacity", type: "warning" }
  ];

  return (
    <div className="dashboard-wrapper">
      <nav className="top-bar">
            <div className="logo-group">
                <div className="logo">BIOGAS <span>MONITOR</span></div>
                <div className="timestamp">Updated: {new Date().toLocaleTimeString()}</div>
            </div>

            <div className="status-container">
                {/* The Pulsing Dot */}
                <span className="pulse-dot"></span>
                <span className="status-text">SYSTEM {systemData.status.toUpperCase()}</span>
                
                <div className="connectivity-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21l-12-18h24z" /> {/* Simple signal triangle */}
                </svg>
                <span>Live</span>
                </div>
            </div>
        </nav>

      <main className="content">
        {/* Metric Row */}
        <section className="metrics-grid">
          <div className="stat-card">
             <span className="icon">🔥</span>
             <p>Gas Level</p>
             <h2>{systemData.gasLevel}%</h2>
             <div className="gauge-bg">
                <div className="gauge-fill" style={{width: `${systemData.gasLevel}%`}}></div>
             </div>
          </div>

          <div className="stat-card">
             <span className="icon">🌡️</span>
             <p>Temperature</p>
             <h2>{systemData.temperature}</h2>
          </div>

          <div className="stat-card warning-border">
             <span className="icon">⚠️</span>
             <p>Waste Level</p>
             <h2 className={systemData.wasteLevel === "Full" ? "text-danger" : "text-success"}>
                {systemData.wasteLevel}
            </h2>
          </div>
        </section>

        {/* Alerts Section */}
        <section className="alerts-container">
          <h3>Recent Notifications</h3>
          {alerts.map((alert, i) => (
            <div key={i} className={`alert-card ${alert.type}`}>
              {alert.text}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
export default Dashboard;
