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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>Dashboard Overview</h1>
          <p>Welcome back, Dr. Kevin!</p>
          <p style={{ fontSize: '14px', color: '#888', marginTop: '10px' }}>{currentDate}</p>
        </div>
        
        <div style={{ 
          display: 'flex', 
          gap: '15px' 
        }}>
          <div style={{ 
            background: '#f5f6fa', 
            padding: '15px', 
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '120px'
          }}>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>Patients</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1890ff' }}>125</div>
          </div>
          <div style={{ 
            background: '#f5f6fa', 
            padding: '15px', 
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '120px'
          }}>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>Appointments</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#52c41a' }}>25</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
