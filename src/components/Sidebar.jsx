import React from 'react';
import {navLinksData, footerNavLinksData} from '../data/navLinks';

const Sidebar = () => {
  const activeLinkName = 'Dashboard';
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        Healthcare.
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navLinksData.map(link => (
            <li key={link.id} className={link.name === activeLinkName ? 'nav-item active' : 'nav-item'}>
              <a href={link.path}>
                <span className="nav-icon">{link.icon}</span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        {footerNavLinksData.map(link => (
             <a key={link.id} href={link.path} className="nav-item">
                <span className="nav-icon">{link.icon}</span>
                {link.name}
            </a>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
