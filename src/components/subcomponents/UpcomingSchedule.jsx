import React from 'react';
import appointments from '../../data/appointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => {
  return (
    <div className="content-card appointments-list-card">
      <h2 className="card-title">The Upcoming Schedule</h2>
      {appointments.map(group => (
        <div key={group.dayGroup} className="appointments-day-group">
          <h3 className="day-group-title">{group.dayGroup}</h3>
          <div className="appointments-items-container">
            {group.appointments.map(apt => (
              <div key={apt.id} className={`appointment-item ${apt.cardClass}`}>
                <span className="appointment-item-icon">{apt.icon}</span>
                <div className="appointment-item-details">
                  <p className="appointment-item-title">{apt.title}</p>
                  <p className="appointment-item-time">{apt.time}</p>
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
