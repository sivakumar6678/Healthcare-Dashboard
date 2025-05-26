import React from 'react';
import appointments from '../../data/appointments';

// Function to render the appropriate icon based on appointment type
const renderAppointmentIcon = (type) => {
  switch(type) {
    case 'Health checkup':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#6A7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'Dentist':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#5a6ac0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="#5a6ac0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9H9.01" stroke="#5a6ac0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 9H15.01" stroke="#5a6ac0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'Cardiologist':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61Z" stroke="#6A7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'Physiotherapy':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 6.5C7.88071 6.5 9 5.38071 9 4C9 2.61929 7.88071 1.5 6.5 1.5C5.11929 1.5 4 2.61929 4 4C4 5.38071 5.11929 6.5 6.5 6.5Z" stroke="#5a6ac0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.5 6.5V13.5L14.5 17.5V22.5" stroke="#5a6ac0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.5 17.5L19.5 15.5" stroke="#5a6ac0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.5 13.5L1.5 11.5" stroke="#5a6ac0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#6A7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
  }
};

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule-container card-style">
      <div className="upcoming-schedule-header">
        <h3 className="upcoming-schedule-title">The Upcoming Schedule</h3>
        <a href="#" className="upcoming-schedule-details-link">Details →</a>
      </div>
      {appointments.map((group, index) => (
        <div key={index} className="schedule-day-group">
          <p className="schedule-day-text">{group.day}</p>
          <div className="schedule-appointments-list">
            {group.items.map((item, idx) => (
              <div key={idx} className={`schedule-appointment-item ${item.bgColor || 'default-schedule-bg'}`}>
                <div className="schedule-item-info">
                  <p className="schedule-item-name">{item.name}</p>
                  <p className="schedule-item-time">{item.time}</p>
                </div>
                <div className="schedule-item-icon-placeholder">
                  {renderAppointmentIcon(item.name)}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
