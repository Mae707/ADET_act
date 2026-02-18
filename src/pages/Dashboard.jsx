import React, { useState, useEffect } from 'react';
import { FaThermometerHalf, FaGasPump, FaTachometerAlt } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';
import MetricCard from '../components/MetricCard';
import SensorChart from '../components/SensorChart';
import NotificationPanel from '../components/NotificationPanel';

const Dashboard = () => {
  // 1. Initialize State with starting values
  const [readings, setReadings] = useState({
    temperature: 35.0,
    humidity: 60,
    gas: 72,
    pressure: 1013 // Adjusted to realistic millibar (hPa) baseline
  });

  // 2. Helper function to simulate realistic sensor drift
  // It takes the current value, adds a small random change, and keeps it within min/max bounds
  const simulateDrift = (current, min, max, volatility, isInteger = false) => {
    const change = (Math.random() - 0.5) * volatility; 
    let newValue = current + change;
    
    // Clamp values so they don't go out of realistic bounds
    if (newValue > max) newValue = max;
    if (newValue < min) newValue = min;

    return isInteger ? Math.round(newValue) : parseFloat(newValue.toFixed(1));
  };

  // 3. Effect Hook to update data every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setReadings((prev) => ({
        temperature: simulateDrift(prev.temperature, 28, 42, 0.8), // Fluctuate +/- 0.4 deg
        humidity: simulateDrift(prev.humidity, 40, 90, 3, true),   // Fluctuate +/- 1.5%
        gas: simulateDrift(prev.gas, 10, 95, 4, true),             // Fluctuate +/- 2%
        pressure: simulateDrift(prev.pressure, 980, 1050, 2, true) // Fluctuate +/- 1 mbar
      }));
    }, 2000); // Update every 2000ms (2 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // 4. Map state data to the metric configuration
  // We reconstruct the array on every render with the latest 'readings'
  const metrics = [
    { 
      title: "Temperature", 
      value: readings.temperature, 
      unit: "°C", 
      icon: <FaThermometerHalf />, 
      theme: "red" 
    },
    { 
      title: "Humidity", 
      value: readings.humidity, 
      unit: "%", 
      icon: <WiHumidity style={{ fontSize: '1.6em' }} />, 
      theme: "blue" 
    },
    { 
      title: "Gas Level", 
      value: readings.gas, 
      unit: "%", 
      icon: <FaGasPump />, 
      theme: "green" 
    },
    { 
      title: "Pressure", 
      value: readings.pressure, 
      unit: "mbar", 
      icon: <FaTachometerAlt />, 
      theme: "gray" 
    }
  ];

  return (
    <div className="dashboard-content">
      {/* Status Banner */}
      <div className="status-banner">
        <span className="status-dot live-pulse"></span>
        System Status: <strong>Normal - Live</strong>
      </div>

      {/* Metric Cards Grid */}
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Bottom Section split */}
      <div className="bottom-section grid-split">
        {/* Pass data to chart if it accepts props, otherwise it stays static */}
        <SensorChart data={readings} /> 
        <NotificationPanel />
      </div>
    </div>
  );
};
export default Dashboard;
