import React from 'react';
import AnatomySection from './subcomponents/AnatomySection';
import CalendarView from './subcomponents/CalendarView';
import UpcomingSchedule from './subcomponents/UpcomingSchedule';
import ActivityFeed from './subcomponents/ActivityFeed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  return (
    <main className="dashboard-main-content">
      <div className="dashboard-header-section">
        <h2 className="dashboard-title-text">Dashboard</h2>
        <div className="dashboard-filter-options">
          <span>This Week</span>
          <FontAwesomeIcon icon={faChevronDown} className="filter-arrow" />
        </div>
      </div>
      <div className="dashboard-layout-grid">
        <section className="dashboard-left-column">
          <AnatomySection />
          <ActivityFeed />
        </section>
        <section className="dashboard-right-column">
          <CalendarView />
          <UpcomingSchedule />
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
