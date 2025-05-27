const Header = () => {
  const userName = "Dr. Kevin";
  const userAvatarUrl = "https://placehold.co/36x36/E2E8F0/4A5568?text=DK"; 
  return (
    <header className="app-header">
      <div className="header-search">
        <span className="search-icon">🔍</span>
        Search
      </div>
      <div className="header-month-navigation">
        <button className="month-nav-arrow">&lt;</button>
        <span className="current-month-year">October 2021</span>
        <button className="month-nav-arrow">&gt;</button>
      </div>
      <div className="header-user-controls">
        <span className="notification-icon">🔔</span>
        <img src={userAvatarUrl} alt="User Avatar" className="user-avatar" />
        <span className="user-name">{userName}</span>
        <button className="add-new-button">+</button>
      </div>
    </header>
  );
};

export default Header;