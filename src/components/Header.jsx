function Header() {
  return (
    <header className="app-top-header">
      <div className="project-info">
        <span className="project-name">SYSTEMS_CORE_V1</span>
        <span className="divider">|</span>
        <span className="project-lab">Frontend Project 2026</span>
        <span className="divider">|</span>
        <span className="status-tag">NODE_STABLE</span>
      </div>
      
      <div className="user-profile">
        <div className="connection-speed">24ms</div>
        <span>Admin User</span>
        <div className="user-avatar"></div>
      </div>
    </header>
  );
}

export default Header;