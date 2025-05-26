import React from 'react';
import navLinks from '../data/navLinks';

const Sidebar = () => (
  <aside className="sidebar">
    <h2>MediTrack</h2>
    
    <ul>
      {navLinks.map((link, index) => (
        <li key={link.name} className={index === 0 ? 'active' : ''}>
          <span>{link.icon}</span>
          <span>{link.name}</span>
        </li>
      ))}
    </ul>
    
    <div style={{ marginTop: '50px', textAlign: 'center' }}>
      <button style={{ 
        background: '#4267b2', 
        color: 'white', 
        border: 'none', 
        padding: '8px 15px', 
        borderRadius: '4px',
        cursor: 'pointer',
        width: '80%'
      }}>
        Help Center
      </button>
    </div>
  </aside>
);

export default Sidebar;
