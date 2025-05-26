import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
const CalendarView = () => {
  // Dummy data for calendar days
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const dates = [
    { date: 25, appointments: ["10:00", "11:00", "12:00"] },
    { date: 26, appointments: ["08:00", "09:00", "10:00"], isHighlighted: true },
    { date: 27, appointments: ["12:00", "13:00"] },
    { date: 28, appointments: ["10:00", "11:00"], isHighlighted: true },
    { date: 29, appointments: ["14:00", "16:00"] },
    { date: 30, appointments: ["12:00", "14:00", "15:00"], isHighlighted: true },
    { date: 31, appointments: ["09:00", "10:00", "11:00"], isHighlighted: true },
  ];

  return (
    <div className="calendar-view-container card-style">
      <div className="calendar-header-controls">
        <span className="calendar-month-year-text">October 2021</span>
        <div className="calendar-navigation-buttons">
          <button className="calendar-nav-button">{"<"}</button>
          <button className="calendar-nav-button">{">"}</button>
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
                    <div key={i} className={`appointment-time-slot ${d.isHighlighted ? 'highlighted-appointment' : ''}`}>{time}</div>
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
            time="09:00-11:00"
            doctor="Dr. Cameron Williamson"
            icon="🦷"
            bgColor="light-purple-bg"
        />
        <SimpleAppointmentCard 
            type="Physiotherapy Appointment"
            time="11:00-12:00"
            doctor="Dr. Kevin Djones"
            icon="💪"
            bgColor="light-gray-bg"
        />
      </div>
    </div>
  );
};

export default CalendarView;
