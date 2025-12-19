import React, { useState } from 'react';
import './DashboardPage.css';
import Header from '../components/Header';
import Calendar from '../components/Calendar';

const DashboardPage = () => {
  const currentProgram = {
    name: 'Intermediate: Силовой Тренинг',
    startDate: '2024-11-01',
    duration: 12,
    progress: 6,
    days: 5
  };

  const userStats = {
    age: 28,
    weight: 75,
    height: 180,
    bmr: 1700,
    tdee: 2550,
    protein: 150,
    carbs: 320,
    fats: 85
  };

  const getCalories = () => {
    return Math.round(userStats.tdee * 1.2);
  };

  return (
    <div className="dashboard-page">
      <Header />

      <main className="dashboard-main">
        <section className="dashboard-header">
          <h1>Твой Прогресс</h1>
          <p>Отслеживай свои тренировки и прогресс</p>
        </section>

        <div className="dashboard-grid">
          {/* Current Program */}
          <section className="dashboard-card program-card-section">
            <h2>Текущая программа</h2>
            <div className="current-program">
              <div className="program-title">{currentProgram.name}</div>
              <div className="progress-info">
                <span>Прогресс: {currentProgram.progress}/{currentProgram.duration} недель</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${(currentProgram.progress / currentProgram.duration) * 100}%` }}
                ></div>
              </div>
              <div className="program-details">
                <div className="detail-item">
                  <span className="detail-icon">📅</span>
                  <span>Начало: 01 ноября 2024</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">⏱️</span>
                  <span>{currentProgram.days} дней в неделю</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📊</span>
                  <span>{currentProgram.duration} недель всего</span>
                </div>
              </div>
            </div>
          </section>

          {/* Calendar */}
          <section className="dashboard-card calendar-section">
            <h2>Календарь тренировок</h2>
            <Calendar />
          </section>

          {/* Nutrition Stats */}
          <section className="dashboard-card nutrition-section">
            <h2>Макронутриенты</h2>
            <div className="nutrition-summary">
              <p className="nutrition-label">Ежедневные нормы</p>
              <div className="macros-grid">
                <div className="macro-item">
                  <div className="macro-label">Калории</div>
                  <div className="macro-value">{getCalories()}</div>
                  <div className="macro-unit">ккал/день</div>
                </div>
                <div className="macro-item">
                  <div className="macro-label">Белки</div>
                  <div className="macro-value">{userStats.protein}</div>
                  <div className="macro-unit">г/день</div>
                </div>
                <div className="macro-item">
                  <div className="macro-label">Углеводы</div>
                  <div className="macro-value">{userStats.carbs}</div>
                  <div className="macro-unit">г/день</div>
                </div>
                <div className="macro-item">
                  <div className="macro-label">Жиры</div>
                  <div className="macro-value">{userStats.fats}</div>
                  <div className="macro-unit">г/день</div>
                </div>
              </div>
            </div>

            <div className="nutrition-chart">
              <div className="chart-title">Распределение БЖУ</div>
              <div className="pie-chart">
                <svg viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#4ecca3" strokeWidth="40" 
                    strokeDasharray={`${(userStats.protein / (userStats.protein + userStats.carbs + userStats.fats)) * 502.65} 502.65`}
                    transform="rotate(-90 100 100)"
                  />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#ffa702" strokeWidth="40"
                    strokeDasharray={`${(userStats.carbs / (userStats.protein + userStats.carbs + userStats.fats)) * 502.65} 502.65`}
                    strokeDashoffset={`-${(userStats.protein / (userStats.protein + userStats.carbs + userStats.fats)) * 502.65}`}
                    transform="rotate(-90 100 100)"
                  />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#ff6b35" strokeWidth="40"
                    strokeDasharray={`${(userStats.fats / (userStats.protein + userStats.carbs + userStats.fats)) * 502.65} 502.65`}
                    strokeDashoffset={`-${((userStats.protein + userStats.carbs) / (userStats.protein + userStats.carbs + userStats.fats)) * 502.65}`}
                    transform="rotate(-90 100 100)"
                  />
                  <text x="100" y="110" textAnchor="middle" fontSize="20" fontWeight="bold" fill="var(--text-primary)">БЖУ</text>
                </svg>
              </div>
              <div className="legend">
                <div className="legend-item">
                  <span className="legend-color" style={{ backgroundColor: '#4ecca3' }}></span>
                  <span>Белки</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color" style={{ backgroundColor: '#ffa702' }}></span>
                  <span>Углеводы</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color" style={{ backgroundColor: '#ff6b35' }}></span>
                  <span>Жиры</span>
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="dashboard-card stats-section">
            <h2>Твои параметры</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-icon">📏</span>
                <div className="stat-content">
                  <div className="stat-label">Рост</div>
                  <div className="stat-value">{userStats.height} см</div>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-icon">⚖️</span>
                <div className="stat-content">
                  <div className="stat-label">Вес</div>
                  <div className="stat-value">{userStats.weight} кг</div>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-icon">🎂</span>
                <div className="stat-content">
                  <div className="stat-label">Возраст</div>
                  <div className="stat-value">{userStats.age} лет</div>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-icon">🔥</span>
                <div className="stat-content">
                  <div className="stat-label">БМР</div>
                  <div className="stat-value">{userStats.bmr} ккал</div>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-icon">💪</span>
                <div className="stat-content">
                  <div className="stat-label">TDEE</div>
                  <div className="stat-value">{userStats.tdee} ккал</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
