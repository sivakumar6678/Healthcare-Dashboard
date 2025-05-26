import React from 'react';

// Function to render the appropriate icon based on appointment type
const renderAppointmentIcon = (type) => {
  switch(type) {
    case 'Dentist':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#5a6ac0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="#5a6ac0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9H9.01" stroke="#5a6ac0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 9H15.01" stroke="#5a6ac0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'Physiotherapy':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 6.5C7.88071 6.5 9 5.38071 9 4C9 2.61929 7.88071 1.5 6.5 1.5C5.11929 1.5 4 2.61929 4 4C4 5.38071 5.11929 6.5 6.5 6.5Z" stroke="#5a6ac0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.5 6.5V13.5L14.5 17.5V22.5" stroke="#5a6ac0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.5 17.5L19.5 15.5" stroke="#5a6ac0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.5 13.5L1.5 11.5" stroke="#5a6ac0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

const SimpleAppointmentCard = ({ type, time, doctor, bgColor }) => {
  return (
    <div className={`simple-appointment-card-item ${bgColor}`}>
      <div className="appointment-card-icon">
        {renderAppointmentIcon(type)}
      </div>
      <div className="appointment-card-details">
        <p className="appointment-card-type">{type}</p>
        <p className="appointment-card-time">{time}</p>
        <p className="appointment-card-doctor">{doctor}</p>
      </div>
      <div className="appointment-card-options-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#9babc5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="#9babc5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="#9babc5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
