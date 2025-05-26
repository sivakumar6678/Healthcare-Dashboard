import React from 'react';

const Header = () => (
  <header className="header">
    <div className="logo">MediTrack</div>
    <div className="search-bar">
      <span>🔍</span>
      <input 
        type="text" 
        placeholder="Search..." 
        style={{ 
          border: 'none', 
          background: 'transparent', 
          outline: 'none',
          width: '100%',
          marginLeft: '10px'
        }} 
      />
    </div>
    <div className="profile-area">
      <span>🔔</span>
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
      <span>Dr. Smith</span>
      <button>+</button>
    </div>
  </header>
);

export default Header;
