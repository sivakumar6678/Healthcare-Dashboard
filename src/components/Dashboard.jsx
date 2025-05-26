import React from 'react';
import DashboardOverview from './subcomponents/DashboardOverview';
import AnatomySection from './subcomponents/AnatomySection';
import HealthStatusCards from './subcomponents/HealthStatusCards';
import CalendarView from './subcomponents/CalendarView';
import UpcomingSchedule from './subcomponents/UpcomingSchedule';
import ActivityFeed from './subcomponents/ActivityFeed';

const Dashboard = () => {
  return (
    <main className="dashboard-main-container">
      <div className="dashboard-header-section">
        <h2 className="dashboard-title-text">Dashboard</h2>
        <div className="dashboard-filter-options">
          {/* This could be a dropdown or buttons */}
          <span>This Week</span>
          <span className="filter-arrow-placeholder">▼</span>
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
