import React from 'react';

const SimpleAppointmentCard = ({ appointment }) => (
  <div className="appointment-card">
    <div className="appointment-title">{appointment.title}</div>
    <div className="appointment-time">{appointment.time}</div>
    <div className="appointment-doctor">{appointment.doctor}</div>
  </div>
);

export default SimpleAppointmentCard;
