function AlertCard({ alert }) {
  return (
    <div className={`alert-card ${alert.type}`}>
      {alert.text}
    </div>
  );
}

export default AlertCard;
