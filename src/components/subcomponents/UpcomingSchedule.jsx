import React from 'react';
import appointments from '../../data/appointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => (
  <div className="upcoming-schedule">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
      <h2>Upcoming Appointments</h2>
      <button style={{ 
        background: '#1890ff', 
        color: 'white', 
        border: 'none', 
        padding: '8px 15px', 
        borderRadius: '8px',
        fontSize: '14px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
      }}>
        <span>+</span> New Appointment
      </button>
    </div>
    
    {appointments.map(app => (
      <SimpleAppointmentCard key={app.id} appointment={app} />
    ))}
  </div>
);

export default UpcomingSchedule;
