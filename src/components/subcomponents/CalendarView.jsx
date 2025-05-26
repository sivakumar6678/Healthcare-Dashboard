import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const CalendarView = () => {
  // Dummy data for calendar days
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const dates = [
    { date: 20, appointments: ["10:00", "11:00"] },
    { date: 21, appointments: ["08:00", "09:00"] },
    { date: 22, appointments: ["12:00", "13:00"] },
    { date: 23, appointments: ["10:00", "11:00"], isHighlighted: true },
    { date: 24, appointments: ["14:00", "16:00"] },
    { date: 25, appointments: ["12:00", "14:00"] },
    { date: 26, appointments: ["09:00", "10:00"] },
  ];

  return (
    <div className="calendar-view-container card-style">
      <div className="calendar-header-controls">
        <span className="calendar-month-year-text">May 2025</span>
        <div className="calendar-navigation-buttons">
          <button className="calendar-nav-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#7a8fa8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="calendar-nav-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#7a8fa8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <table className="calendar-table-main">
        <thead>
          <tr>
            {days.map(day => <th key={day}>{day}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            {dates.map(d => (
              <td key={d.date} className={`calendar-day-cell ${d.isHighlighted ? 'highlighted-day' : ''}`}>
                <div className="date-number">{d.date}</div>
                <div className="appointments-on-day">
                  {d.appointments.map((time, i) => (
                    <div key={i} className={`appointment-time-slot ${d.isHighlighted && i === 0 ? 'highlighted-appointment' : ''}`}>{time}</div>
                  ))}
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <div className="calendar-bottom-appointments">
        <SimpleAppointmentCard 
            type="Dentist"
            time="10:00-11:00"
            doctor="Dr. Cameron Williamson"
            bgColor="light-purple-bg"
        />
        <SimpleAppointmentCard 
            type="Physiotherapy"
            time="11:00-12:00"
            doctor="Dr. Kevin Jones"
            bgColor="light-gray-bg"
        />
      </div>
    </div>
  );
};

export default CalendarView;
