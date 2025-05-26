import React from 'react';
import healthStatus from '../../data/healthStatus';

// Function to render the appropriate icon based on health status type
const renderHealthIcon = (type) => {
  switch(type) {
    case 'Lungs':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.081 20C7.693 20 8.9 18.665 8.9 17.073V10.5C8.9 10.5 13.5 9.5 13.5 6V3.5C13.5 2.672 12.828 2 12 2C11.172 2 10.5 2.672 10.5 3.5V9M17.919 20C16.307 20 15.1 18.665 15.1 17.073V10.5C15.1 10.5 10.5 9.5 10.5 6" stroke="#6A7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'Teeth':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6A7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="#6A7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9H9.01" stroke="#6A7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 9H15.01" stroke="#6A7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'Bone':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 14.5L5.5 17.5C4.83696 18.163 4.45928 19.0565 4.45928 19.9875C4.45928 20.9185 4.83696 21.812 5.5 22.475C6.16304 23.138 7.05653 23.5157 7.9875 23.5157C8.91847 23.5157 9.81196 23.138 10.475 22.475L13.5 19.5" stroke="#6A7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.5 19.5L19.5 13.5" stroke="#6A7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.5 14.5L14.5 8.5" stroke="#6A7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.5 8.5L17.5 5.5C18.163 4.83696 19.0565 4.45928 19.9875 4.45928C20.9185 4.45928 21.812 4.83696 22.475 5.5C23.138 6.16304 23.5157 7.05653 23.5157 7.9875C23.5157 8.91847 23.138 9.81196 22.475 10.475L19.5 13.5" stroke="#6A7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.5 8.5C1.4 7.4 1.4 5.6 2.5 4.5C3.6 3.4 5.4 3.4 6.5 4.5L9.5 7.5" stroke="#6A7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.5 9.5L4.5 12.5C3.4 13.6 1.6 13.6 0.5 12.5C-0.6 11.4 -0.6 9.6 0.5 8.5L3.5 5.5" stroke="#6A7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#6A7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
  }
};

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards-list">
      {healthStatus.map((status, index) => (
        <div key={index} className="health-status-item">
          <div className="health-status-icon-placeholder">
            {renderHealthIcon(status.name)}
          </div>
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
