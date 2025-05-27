import React from 'react';
import AnatomySection from './subcomponents/AnatomySection';
import CalendarView from './subcomponents/CalendarView';
import UpcomingSchedule from './subcomponents/UpcomingSchedule';
import ActivityFeed from './subcomponents/ActivityFeed';

const DashboardTitle = ({ mainTitle, subTitle }) => {
  return (
    <div className="dashboard-title-container">
      <h1 className="dashboard-main-title">{mainTitle}</h1>
      {subTitle && <span className="dashboard-subtitle">{subTitle}</span>}
    </div>
  );
};

const Dashboard = () => {
  return (
    <main className="dashboard-main-content">
      <DashboardTitle mainTitle="Dashboard" subTitle="This Week" />
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
