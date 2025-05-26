import React from 'react';
import healthStatus from '../../data/healthStatus';

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards-list">
      {healthStatus.map((status, index) => (
        <div key={index} className="health-status-item">
          <div className="health-status-icon-placeholder">{status.iconPlaceholder || '🦷'}</div>
          <div className="health-status-info">
            <p className="health-status-name">{status.name}</p>
            <p className="health-status-date">{status.date}</p>
          </div>
          <div className="health-status-progress-bar-container">
            <div 
              className="health-status-progress-bar" 
              style={{ width: status.progress }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
