import React from 'react';
import appointments from '../../data/appointments';

const UpcomingSchedule = () => {
  return (
    <div className="content-card upcoming-schedule-container">
      <h3 className="upcoming-schedule-title">Upcoming Schedule</h3>
      
      {appointments.map((group, index) => (
        <div key={index} className="schedule-day-group">
          <h4 className="schedule-day-title">{group.day}</h4>
          <div className="schedule-items-container">
            {group.items.map((item, idx) => (
              <div key={idx} className={`schedule-item ${item.bgColor}`}>
                <div className="schedule-item-details">
                  <p className="schedule-item-name">{item.name}</p>
                  <p className="schedule-item-time">{item.time}</p>
                </div>
                <div className="schedule-item-icon">{item.iconPlaceholder}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
