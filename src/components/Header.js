import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const menuItems = [
    { label: 'Главная', path: '/home' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Программа', path: '/program' },
    { label: 'AI Тренер', path: '/ai-trainer' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/home" className="header-logo">
          <span className="logo-icon">💪</span>
          <span className="logo-text">FitExample</span>
        </Link>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="nav-item"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button 
            className="btn-icon" 
            title="Профиль"
            onClick={() => navigate('/profile')}
          >
            👤
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
