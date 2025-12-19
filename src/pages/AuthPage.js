import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Сразу переходим на home без проверок
    localStorage.setItem('user', JSON.stringify({
      email: formData.email || 'demo@example.com',
      name: formData.name || 'Пользователь',
      isAuthenticated: true
    }));

    navigate('/home');
  };

  return (
    <div className="auth-container">
      <div className="auth-background">
        <div className="auth-gradient"></div>
      </div>
      
      <div className="auth-content">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-logo">
              <div className="logo-icon">💪</div>
              <h1>FitExample</h1>
            </div>
            <p className="auth-subtitle">Твой персональный фитнес тренер</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-tabs">
              <button
                type="button"
                className={`form-tab ${isLogin ? 'active' : ''}`}
                onClick={() => setIsLogin(true)}
              >
                Вход
              </button>
              <button
                type="button"
                className={`form-tab ${!isLogin ? 'active' : ''}`}
                onClick={() => setIsLogin(false)}
              >
                Регистрация
              </button>
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Введите ваше имя"
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
              />
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Подтвердите пароль</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                />
              </div>
            )}

            <button type="submit" className="btn btn-primary btn-large">
              {isLogin ? 'Войти' : 'Создать аккаунт'}
            </button>
          </form>

          <div className="auth-footer">
            <p className="auth-footer-text">
              {isLogin ? 'Впервые здесь? ' : 'Уже есть аккаунт? '}
              <button
                type="button"
                className="auth-toggle-btn"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setFormData({ email: '', password: '', name: '', confirmPassword: '' });
                }}
              >
                {isLogin ? 'Зарегистрироваться' : 'Войти'}
              </button>
            </p>
          </div>
        </div>

        <div className="auth-feature-list">
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <span>Персональные программы</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📊</span>
            <span>Отслеживание прогресса</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🤖</span>
            <span>AI тренер</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📈</span>
            <span>Калории и БЖУ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
