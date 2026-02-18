import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { time: '00:00', Temperature: 35, Humidity: 60, 'Gas Level': 65 },
  { time: '03:00', Temperature: 33, Humidity: 55, 'Gas Level': 72 },
  { time: '06:00', Temperature: 30, Humidity: 62, 'Gas Level': 75 },
  { time: '09:00', Temperature: 31, Humidity: 68, 'Gas Level': 67 },
  { time: '12:00', Temperature: 38, Humidity: 70, 'Gas Level': 68 },
  { time: '15:00', Temperature: 33, Humidity: 63, 'Gas Level': 73 },
  { time: '18:00', Temperature: 36, Humidity: 64, 'Gas Level': 69 },
  { time: '21:00', Temperature: 36, Humidity: 57, 'Gas Level': 74 },
];

const SensorChart = () => {
  return (
    <div className="chart-container card-shadow">
      <h3 className="panel-title">Sensor Readings History (Last 24h)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
          <XAxis dataKey="time" tick={{ fill: '#666', fontSize: 12 }} tickLine={false} axisLine={{ stroke: '#eee' }} />
          <YAxis domain={[0, 100]} tick={{ fill: '#666', fontSize: 12 }} tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }} />
          <Legend verticalAlign="top" height={36} iconType="rect" wrapperStyle={{ fontSize: 12, paddingBottom: '10px' }} />
          <Line type="monotone" dataKey="Temperature" stroke="#E74C3C" strokeWidth={3} dot={{ r: 4 }} name="Temperature (°C)" />
          <Line type="monotone" dataKey="Humidity" stroke="#3498DB" strokeWidth={3} dot={{ r: 4 }} name="Humidity (%)" />
          <Line type="monotone" dataKey="Gas Level" stroke="#2ECC71" strokeWidth={3} dot={{ r: 4 }} name="Gas Level (%)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SensorChart;