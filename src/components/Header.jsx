import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faPlus } from '@fortawesome/free-solid-svg-icons';
import avatar from '../assets/avatar.webp';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        <FontAwesomeIcon icon={faBell} className="notification-icon" />
        </div>
      </div>
      <div className="header-right">
        <div className="user-avatar"> <img src={avatar} alt="" className='avatar' /> </div>
        <button className="add-new-button">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </header>
  );
};

export default Header;
