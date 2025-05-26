import React from 'react';
import appointments from '../../data/appointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => (
  <div className="upcoming-schedule">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
      <h2>Upcoming Appointments</h2>
      <button style={{ 
        background: '#3b5998', 
        color: 'white', 
        border: 'none', 
        padding: '5px 10px', 
        borderRadius: '4px',
        fontSize: '13px',
        cursor: 'pointer'
      }}>
        + New
      </button>
    </div>
    
    {appointments.map(app => (
      <SimpleAppointmentCard key={app.id} appointment={app} />
    ))}
  </div>
);

export default UpcomingSchedule;
