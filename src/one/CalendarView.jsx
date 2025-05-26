import React from 'react';

const CalendarView = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();
  
  // Generate days for the current week
  const generateWeekDays = () => {
    const days = [];
    const startOfWeek = new Date(currentDate);
    const day = currentDate.getDay();
    startOfWeek.setDate(currentDate.getDate() - day);
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      days.push({
        date: date.getDate(),
        day: date.toLocaleString('default', { weekday: 'short' }),
        isToday: date.getDate() === currentDay && 
                 date.getMonth() === currentDate.getMonth() &&
                 date.getFullYear() === currentDate.getFullYear()
      });
    }
    
    return days;
  };
  
  const weekDays = generateWeekDays();
  
  return (
    <div className="calendar-view">
      <h2>Calendar</h2>
      
      <div style={{ 
        fontSize: '16px', 
        fontWeight: 'bold', 
        marginBottom: '15px',
        marginTop: '10px'
      }}>
        {currentMonth} {currentYear}
      </div>
      
      <div className="calendar">
        {weekDays.map((day, index) => (
          <div 
            key={index} 
            className={`calendar-day ${day.isToday ? 'active' : ''}`}
          >
            <div>{day.day}</div>
            <div style={{ 
              fontSize: '18px', 
              fontWeight: 'bold', 
              marginTop: '5px' 
            }}>
              {day.date}
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ 
        marginTop: '20px', 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h3 style={{ fontSize: '16px' }}>Today's Schedule</h3>
        <button style={{ 
          background: 'transparent', 
          border: 'none',
          color: '#3b5998',
          cursor: 'pointer',
          fontSize: '14px'
        }}>
          View All
        </button>
      </div>
      
      <div style={{ marginTop: '10px' }}>
        <div style={{ 
          display: 'flex', 
          padding: '10px', 
          background: '#f0f2f5',
          borderRadius: '8px',
          marginBottom: '10px'
        }}>
          <div style={{ 
            width: '3px', 
            background: '#3b5998', 
            marginRight: '10px'
          }}></div>
          <div>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Dental Checkup</div>
            <div style={{ fontSize: '13px', color: '#666' }}>9:00 AM - 10:00 AM</div>
          </div>
        </div>
        
        <div style={{ 
          display: 'flex', 
          padding: '10px', 
          background: '#f0f2f5',
          borderRadius: '8px'
        }}>
          <div style={{ 
            width: '3px', 
            background: '#4CAF50', 
            marginRight: '10px'
          }}></div>
          <div>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>General Consultation</div>
            <div style={{ fontSize: '13px', color: '#666' }}>3:00 PM - 4:00 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
