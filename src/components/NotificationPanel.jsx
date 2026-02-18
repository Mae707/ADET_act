import React from 'react';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const notifications = [
  { type: 'success', message: 'Gas production normal', time: '2:30 PM' },
  { type: 'success', message: 'Temperature stable', time: '1:15 PM' },
  { type: 'warning', message: 'Waste level nearing capacity', time: '10:45 AM' },
];

const NotificationPanel = () => {
  return (
    <div className="notification-panel card-shadow">
      <h3 className="panel-title">Recent Notifications</h3>
      <div className="notification-list">
        {notifications.map((notif, index) => (
          <div key={index} className={`notification-item ${notif.type}`}>
            <div className="notif-icon">
              {notif.type === 'success' ? <FaCheckCircle /> : <FaExclamationTriangle />}
            </div>
            <div className="notif-content">
              <p className="notif-message">{notif.message}</p>
              <span className="notif-time">{notif.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPanel;