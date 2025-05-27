import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
const calendarAppointments = {
  '27': { type: 'dentist', title: 'Dentist', time: '09:00-11:00', doctor: 'Dr. Cameron Williamson', icon: '🦷' },
  '29': { type: 'physiotherapy', title: 'Physiotherapy Appointment', time: '11:00-12:00', doctor: 'Dr. Kevin Djones', icon: '💪' }
};
const CalendarView = () => {
  const weekDaysForCalendar = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const daysOfMonthForCalendar = [
    { date: 25, timeSlots: ['10:00', '11:00', '12:00'] },
    { date: 26, timeSlots: ['08:00', '09:00', '10:00'] },
    { date: 27, timeSlots: ['12:00', '13:00'], appointmentKey: '27' }, 
    { date: 28, timeSlots: ['10:00', '11:00'] },
    { date: 29, timeSlots: ['14:00', '16:00'], appointmentKey: '29' }, 
    { date: 30, timeSlots: ['12:00', '14:00', '15:00'] },
    { date: 31, timeSlots: ['09:00', '10:00', '11:00'] },
  ];

  return (
    <div className="content-card calendar-grid-card">
      <div className="calendar-weekdays-header">
        {weekDaysForCalendar.map(dayName => (
          <div key={dayName} className="weekday-name">{dayName}</div>
        ))}
      </div>
      <div className="calendar-days-grid">
        {daysOfMonthForCalendar.map(dayData => {
          const appointment = dayData.appointmentKey ? calendarAppointments[dayData.appointmentKey] : null;
          let cellClass = "calendar-day-cell";
          if (appointment) {
            cellClass += ` appointment-day-${appointment.type}`;
          }
          if ([27,29,30,31].includes(dayData.date)){
            cellClass += " prominent-day";
          }

          return (
            <div key={dayData.date} className={cellClass}>
              <span className="day-date-number">{dayData.date}</span>
              <div className="day-time-slots">
                {dayData.timeSlots.map(time => (
                  <span key={time} className="time-slot">{time}</span>
                ))}
              </div>
              {appointment && (
                <div className={`calendar-appointment-block type-${appointment.type}`}>
                  <p className="appointment-block-title">{appointment.title.split(' ')[0]}</p>
                  <p className="appointment-block-time">{appointment.time.split('-')[0]}</p>
                  {appointment.type === 'dentist' && <p className="appointment-block-doctor">{appointment.doctor}</p>}
                  {appointment.type === 'physiotherapy' && <p className="appointment-block-doctor">{appointment.doctor}</p>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CalendarView;
