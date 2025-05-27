import React from 'react';
import healthStatus from '../../data/healthStatus';
import bodyanotomy from '../../assets/body-anotomy.png';

const AnatomySection = () => {
  return (
    <div className="content-card anatomy-section-container">
      <div className="anatomy-image-placeholder">
        <img 
          src={bodyanotomy} 
          alt="Anatomy Model" 
          className="anatomy-actual-image"
        />
        <span className="anatomy-label healthy-leg-label">🦵 Healthy Leg</span>
        <span className="anatomy-label healthy-heart-label">❤️ Healthy Heart</span>
      </div>
      <div className="health-status-cards-list">
        {healthStatus.map(item => (
          <div key={item.id} className="health-status-item">
            <div className="health-status-icon-placeholder">
              <img src={item.icon} alt={item.organ} className="organ-icon" />
              <h4 className="health-status-name">{item.organ}</h4>
            </div>
            <div className="health-status-info">
              <p className="health-status-date">{item.date}</p>
            </div>
            <div className="health-status-progress-bar-container">
              <div 
                className="health-status-progress-bar" 
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
