const Header = () => {
  return (
    <header className="header-main">
      <div className="header-logo-section">
        <h1 className="logo-text">Healthcare.</h1>
      </div>
      <div className="header-search-section">
        {/* Using text for icon */}
        <span className="search-icon-placeholder">Q</span>
        <input type="text" placeholder="Search" className="search-input-field" />
      </div>
      <div className="header-actions-section">
        {/* Using text for icons */}
        <span className="action-icon-placeholder">🔔</span>
        <span className="action-icon-placeholder user-avatar-placeholder"></span>
        <button className="add-new-button">+</button>
      </div>
    </header>
  );
};
export default Header;