import React from 'react';
import HealthStatusCards from './HealthStatusCards';
import bodyanotomy from  '../../assets/body-anotomy.png';
import healthStatus from  '../../data/healthStatus' ;

const AnatomySection = () => {
  return (
    <div className="content-card anatomy-display-card">
      <div className="anatomy-image-section">
        <div className="anatomy-image-placeholder">
            <img 
                src={bodyanotomy}
                alt="Human Anatomy" 
                className="anatomy-actual-image"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x280/E9F2FF/4A5568?text=Anatomy+Model"; }}
            />
            <div className="anatomy-callout heart">Healthy Heart</div>
            <div className="anatomy-callout lung">Healthy Lung</div>
        </div>
      </div>
      <div className="anatomy-details-section">
        {healthStatus.map(item => (
          <div key={item.id} className="health-status-item">
            <span className="health-item-icon">{item.icon}</span>
            <div className="health-item-info">
              <p className="health-item-organ">{item.organ}</p>
              <p className="health-item-date">{item.date}</p>
            </div>
            <div className="health-item-progress-bar-container">
              <div 
                className="health-item-progress-bar" 
                style={{ width: `${item.progress}%`, backgroundColor: item.progressBarColor }}
              ></div>
            </div>
          </div>
        ))}
        <a href="#" className="details-link">Details →</a>
      </div>
    </div>
  );
};

export default AnatomySection;
