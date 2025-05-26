import React from 'react';
import navLinks from '../data/navLinks';

const Sidebar = () => {
  const activeLink = "Dashboard"; // Example of an active link

  return (
    <aside className="sidebar-navigation">
      <nav className="sidebar-menu">
        <ul>
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`sidebar-menu-item ${link.name === activeLink ? 'active' : ''}`}
            >
              {/* Placeholder for icon */}
              <span className="menu-icon-placeholder">{link.iconPlaceholder || '●'}</span>
              <a href={link.path} className="menu-link-text">{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-bottom-link">
         {/* Placeholder for icon */}
        <span className="menu-icon-placeholder">⚙️</span>
        <a href="/settings" className="menu-link-text">Setting</a>
      </div>
    </aside>
  );
};

export default Sidebar;
