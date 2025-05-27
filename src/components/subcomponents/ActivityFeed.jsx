import React from 'react';
const ActivityFeed = () => {
  const activityDataForChart = [
    { day: 'Mon', value: 30, colorClass: 'bar-color-1' },
    { day: 'Tue', value: 65, colorClass: 'bar-color-2' },
    { day: 'Wed', value: 40, colorClass: 'bar-color-1' },
    { day: 'Thu', value: 85, colorClass: 'bar-color-2' },
    { day: 'Fri', value: 50, colorClass: 'bar-color-1' },
    { day: 'Sat', value: 70, colorClass: 'bar-color-2' },
    { day: 'Sun', value: 25, colorClass: 'bar-color-1' },
  ];
  const maxBarHeight = 80; 

  return (
    <div className="content-card activity-chart-card">
      <div className="activity-chart-header">
        <h2 className="card-title">Activity</h2>
        <span className="activity-summary-text">3 appointments this week</span>
      </div>
      <div className="activity-chart-bars-area">
        {activityDataForChart.map(item => (
          <div key={item.day} className="chart-bar-group">
            <div 
              className={`chart-bar ${item.colorClass}`}
              style={{ height: `${(item.value / 100) * maxBarHeight}px` }}
            ></div>
            <span className="chart-bar-label">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ActivityFeed;
