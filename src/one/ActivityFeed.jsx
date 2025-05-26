import React from 'react';

const ActivityFeed = () => (
  <div className="activity-feed">
    <h2>Recent Activity</h2>
    
    <div className="activity-item">
      <div className="activity-title">Blood Pressure Check</div>
      <div className="activity-time">Today, 10:30 AM</div>
    </div>
    
    <div className="activity-item">
      <div className="activity-title">Medication Reminder</div>
      <div className="activity-time">Today, 8:00 AM</div>
    </div>
    
    <div className="activity-item">
      <div className="activity-title">Appointment Scheduled</div>
      <div className="activity-time">Yesterday, 2:15 PM</div>
    </div>
    
    <div className="activity-item">
      <div className="activity-title">Lab Results Updated</div>
      <div className="activity-time">Yesterday, 9:45 AM</div>
    </div>
    
    <div style={{ textAlign: 'center', marginTop: '15px' }}>
      <button style={{ 
        background: 'transparent', 
        border: '1px solid #3b5998', 
        color: '#3b5998', 
        padding: '8px 15px', 
        borderRadius: '4px',
        fontSize: '13px',
        cursor: 'pointer'
      }}>
        View All Activities
      </button>
    </div>
  </div>
);

export default ActivityFeed;
