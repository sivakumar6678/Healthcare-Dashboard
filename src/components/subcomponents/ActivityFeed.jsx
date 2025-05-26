import React from 'react';
const ActivityFeed = () => {
  const activityData = [
    { day: 'Mon', values: [30, 50, 20] },
    { day: 'Tues', values: [40, 60, 30] },
    { day: 'Wed', values: [20, 40, 10] },
    { day: 'Thurs', values: [60, 70, 40] },
    { day: 'Fri', values: [50, 60, 25] },
    { day: 'Sat', values: [70, 80, 50] },
    { day: 'Sun', values: [30, 45, 15] },
  ];

  return (
    <div className="activity-feed-container card-style">
      <div className="activity-feed-header">
        <h3 className="activity-feed-title">Activity</h3>
        <p className="activity-feed-summary">3 appointments on this week</p>
      </div>
      <div className="activity-bars-chart">
        {activityData.map(data => (
          <div key={data.day} className="activity-day-column">
            <div className="activity-bars-group">
              {data.values.map((value, index) => (
                <div
                  key={index}
                  className={`activity-bar bar-${index + 1}`}
                  style={{ height: `${value}%` }}
                ></div>
              ))}
            </div>
            <p className="activity-day-label">{data.day}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
