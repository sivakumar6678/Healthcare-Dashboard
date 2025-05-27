import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faHistory,
  faCalendarAlt,
  faUserMd,
  faChartBar,
  faComments,
  faQuestionCircle,
  faCog
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="health">Health</span><span className="care">care</span>.
      </div>
      <div className="sidebar-section">General</div>
      <ul className="sidebar-menu">
        <li className="nav-item active">
          <a >
            <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
            <span className="nav-text">Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a >
            <FontAwesomeIcon icon={faHistory} className="nav-icon" />
            <span className="nav-text">History</span>
          </a>
        </li>
        <li className="nav-item">
          <a >
            <FontAwesomeIcon icon={faCalendarAlt} className="nav-icon" />
            <span className="nav-text">Calendar</span>
          </a>
        </li>
        <li className="nav-item">
          <a >
            <FontAwesomeIcon icon={faUserMd} className="nav-icon" />
            <span className="nav-text">Appointments</span>
          </a>
        </li>
        <li className="nav-item">
          <a >
            <FontAwesomeIcon icon={faChartBar} className="nav-icon" />
            <span className="nav-text">Statistics</span>
          </a>
        </li>
      </ul>
      <div className="sidebar-section">Blog</div>
      <ul className="sidebar-menu">
        <li className="nav-item">
          <a >
            <FontAwesomeIcon icon={faComments} className="nav-icon" />
            <span className="nav-text">Chat</span>
          </a>
        </li>
        <li className="nav-item">
          <a >
            <FontAwesomeIcon icon={faQuestionCircle} className="nav-icon" />
            <span className="nav-text">Support</span>
          </a>
        </li>
      </ul>
      <div className="sidebar-footer">
        <a  className="nav-item">
          <FontAwesomeIcon icon={faCog} className="nav-icon" />
          <span className="nav-text">Settings</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
