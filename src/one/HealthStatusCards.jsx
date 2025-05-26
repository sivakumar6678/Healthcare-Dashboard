import React from 'react';
import healthStatus from '../../data/healthStatus';

const getStatusClass = (status) => {
  switch(status.toLowerCase()) {
    case 'normal':
      return 'status-normal';
    case 'elevated':
      return 'status-elevated';
    case 'low':
      return 'status-low';
    default:
      return '';
  }
};

const getStatusIcon = (status) => {
  switch(status.toLowerCase()) {
    case 'normal':
      return '✅';
    case 'elevated':
      return '⚠️';
    case 'low':
      return '❗';
    default:
      return '❓';
  }
};

const HealthStatusCards = () => (
  <div className="status-cards">
    {healthStatus.map(item => (
      <div key={item.name} className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>{item.name}</h3>
          <span>{getStatusIcon(item.status)}</span>
        </div>
        <p className={getStatusClass(item.status)}>
          {item.value}
          <span style={{ 
            fontSize: '14px', 
            marginLeft: '5px',
            color: '#666'
          }}>
            ({item.status})
          </span>
        </p>
        <small>{item.date}</small>
      </div>
    ))}
  </div>
);

export default HealthStatusCards;
