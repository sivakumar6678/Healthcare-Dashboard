import React from 'react';
import HealthStatusCards from './HealthStatusCards';
import bodyanotomy from  '../../assets/body-anotomy.png';

const AnatomySection = () => {
  return (
    <div className="anatomy-section-container card-style">
      <div className="anatomy-image-placeholder">
        <img 
          src={bodyanotomy} 
          alt="Anatomy Model" 
          className="anatomy-actual-image"
        />
        <span className="anatomy-label healthy-leg-label">Healthy Leg</span>
        <span className="anatomy-label healthy-heart-label">Healthy Heart</span>
      </div>
      <HealthStatusCards />
    </div>
  );
};

export default AnatomySection;
