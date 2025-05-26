import React from 'react';
import AnatomySection from './subcomponents/AnatomySection';
import CalendarView from './subcomponents/CalendarView';
import UpcomingSchedule from './subcomponents/UpcomingSchedule';
import ActivityFeed from './subcomponents/ActivityFeed';

const Dashboard = () => {
  return (
    <main className="dashboard-main-container">
      <div className="dashboard-header-section">
        <h2 className="dashboard-title-text">Dashboard</h2>
        <div className="dashboard-filter-options">
          <span>This Week</span>
          <span className="filter-arrow-placeholder">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="#7a8fa8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>

      <div className="dashboard-grid-layout">
        <div className="dashboard-grid-left">
          <AnatomySection />
          <ActivityFeed />
        </div>
        <div className="dashboard-grid-right">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
