import React from 'react';

const MetricCard = ({ title, value, unit, icon, theme }) => {
  return (
    <div className="metric-card card-shadow">
      <h3 className="metric-title">{title}</h3>
      <div className="metric-body">
        <div className={`icon-wrapper theme-${theme}`}>
          {icon}
        </div>
        <div className="metric-value-container">
          <span className="metric-value">{value}</span>
          <span className="metric-unit">{unit}</span>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;