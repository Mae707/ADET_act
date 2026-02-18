import React from "react";

function StatCard({ icon, label, value, gauge, type }) {
  return (
    <div className={`stat-card ${type || ""}`}>
      <span className="icon">{icon}</span>
      <p>{label}</p>
      <h2 className={type === "danger" ? "text-danger" : ""}>{value}</h2>

      {gauge !== undefined && (
        <div className="gauge-bg">
          <div
            className="gauge-fill"
            style={{ width: `${gauge}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default React.memo(StatCard);
