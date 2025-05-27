import React from 'react';

const SimpleAppointmentCard = ({ type, time, doctor, icon, bgColor }) => {
  return (
    <div className={`simple-appointment-card-item ${bgColor}`}>
      <div className="appointment-card-details">
        <p className="appointment-card-type">{type}</p>
        <p className="appointment-card-time">{time}</p>
        <p className="appointment-card-doctor">{doctor}</p>
      </div>
      <div className="appointment-card-icon">{icon}</div>
    </div>
  );
};
export default SimpleAppointmentCard;
