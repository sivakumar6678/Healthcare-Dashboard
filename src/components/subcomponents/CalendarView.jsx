import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const CalendarView = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = [
    { date: 20, appointments: ["10:00", "11:00", "12:00"] },
    { date: 21, appointments: ["08:00", "09:00", "10:00"] },
    { date: 22, appointments: ["12:00", "13:00", "14:00"] },
    { date: 23, appointments: ["10:00", "11:00", "13:00"], isHighlighted: true },
    { date: 24, appointments: ["14:00", "16:00", "17:00"] },
    { date: 25, appointments: ["12:00", "14:00", "15:00"] },
    { date: 26, appointments: ["09:00", "10:00", "11:00"] },
  ];

  return (
    <div className="content-card calendar-view-container">
      <div className="calendar-header-controls">
        <span className="calendar-month-year-text">May 2025</span>
        <div className="calendar-navigation-buttons">
          <button className="calendar-nav-button">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="calendar-nav-button">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      <table className="calendar-days-grid">
        <thead>
          <tr>
            {days.map(day => (
              <th key={day} className="day-name">{day}</th>
            ))}
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
            icon="🦷"
            bgColor="light-purple-bg"
        />
        <SimpleAppointmentCard 
            type="Physiotherapy"
            time="11:00-12:00"
            doctor="Dr. Kevin Jones"
            icon="💪"
            bgColor="light-gray-bg"
        />
      </div>
    </div>
  );
};

export default CalendarView;
