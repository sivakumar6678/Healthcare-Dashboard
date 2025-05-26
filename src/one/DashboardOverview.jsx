import React from 'react';

const DashboardOverview = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="overview">
      <h1>Dashboard Overview</h1>
      <p>Welcome back, Dr. Smith!</p>
      <p style={{ fontSize: '14px', color: '#888', marginTop: '10px' }}>{currentDate}</p>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        marginTop: '20px'
      }}>
        <div style={{ 
          background: '#f0f2f5', 
          padding: '15px', 
          borderRadius: '8px',
          textAlign: 'center',
          width: '48%'
        }}>
          <div style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>Total Patients</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#3b5998' }}>125</div>
        </div>
        <div style={{ 
          background: '#f0f2f5', 
          padding: '15px', 
          borderRadius: '8px',
          textAlign: 'center',
          width: '48%'
        }}>
          <div style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>Appointments</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#3b5998' }}>25</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
