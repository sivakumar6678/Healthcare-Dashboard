import React from 'react';

const ActivityFeed = () => {
  const activityData = [
    { day: 'Mon', values: [60, 45, 30, 20, 10] },
    { day: 'Tue', values: [80, 55, 40, 25, 15] },
    { day: 'Wed', values: [50, 35, 25, 15, 10] },
    { day: 'Thu', values: [90, 70, 50, 30, 20] },
    { day: 'Fri', values: [75, 60, 40, 25, 15] },
    { day: 'Sat', values: [55, 40, 30, 20, 10] },
    { day: 'Sun', values: [40, 25, 15, 10, 5] },
  ];
  
  const maxBarHeight = 120; 
  const maxValue = 100; 

  return (
    <div className="content-card activity-feed-container">
      
      <div className="activity-bars-chart">
        {activityData.map((data, index) => (
          <div key={index} className="activity-day-column">
            <div className="activity-bars-container">
              {data.values.map((value, i) => (
                <div 
                  key={i} 
                  className={`activity-bar bar-${i+1}`} 
                  style={{ 
                    height: `${(value / maxValue) * maxBarHeight}px`,
                  }}
                ></div>
              ))}
            </div>
            <div className="activity-day-label">{data.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
