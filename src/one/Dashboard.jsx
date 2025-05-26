import React from 'react';
import DashboardOverview from './subcomponents/DashboardOverview';
import AnatomySection from './subcomponents/AnatomySection';
import HealthStatusCards from './subcomponents/HealthStatusCards';
import CalendarView from './subcomponents/CalendarView';
import UpcomingSchedule from './subcomponents/UpcomingSchedule';
import ActivityFeed from './subcomponents/ActivityFeed';

const Dashboard = () => (
  <div className="dashboard-main">
    <DashboardOverview />
    <div className="dashboard-content">
      <AnatomySection />
      <HealthStatusCards />
    </div>
    <CalendarView />
    <UpcomingSchedule />
    <ActivityFeed />
  </div>
);

export default Dashboard;
