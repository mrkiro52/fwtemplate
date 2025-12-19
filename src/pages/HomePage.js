import React, { useState } from 'react';
import './HomePage.css';
import Header from '../components/Header';
import ProgramCard from '../components/ProgramCard';

const HomePage = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');

  // Mock data для программ тренировок
  const programs = [
    {
      id: 1,
      title: 'Начинающий: Основы Фитнеса',
      image: '🏋️',
      description: 'Идеальная программа для новичков. Научитесь правильной технике выполнения упражнений.',
      level: 'Beginner',
      duration: '45 мин',
      days: 4,
      forWho: 'Новичков без опыта',
      color: '#4ecca3'
    },
    {
      id: 2,
      title: 'Intermediate: Силовой Тренинг',
      image: '💪',
      description: 'Развивайте мышечную массу и силу с помощью прогрессивного силового тренинга.',
      level: 'Intermediate',
      duration: '60 мин',
      days: 5,
      forWho: 'Имеющих опыт 3+ месяца',
      color: '#ff6b35'
    },
    {
      id: 3,
      title: 'Advanced: Кроссфит',
      image: '⚡',
      description: 'Интенсивные функциональные тренировки для развития выносливости и силы.',
      level: 'Advanced',
      duration: '75 мин',
      days: 6,
      forWho: 'Опытных спортсменов',
      color: '#ff4757'
    },
    {
      id: 4,
      title: 'Жиросжигание: HIIT',
      image: '🔥',
      description: 'Высокоинтенсивные интервальные тренировки для быстрого сжигания жира.',
      level: 'Intermediate',
      duration: '40 мин',
      days: 5,
      forWho: 'Для похудения',
      color: '#ffa502'
    },
    {
      id: 5,
      title: 'Йога и Гибкость',
      image: '🧘',
      description: 'Восстановительная программа для улучшения гибкости и снижения стресса.',
      level: 'Beginner',
      duration: '50 мин',
      days: 4,
      forWho: 'Всем уровней подготовки',
      color: '#9370db'
    },
    {
      id: 6,
      title: 'Марафон: Выносливость',
      image: '🏃',
      description: 'Комплексная программа для улучшения сердечно-сосудистой системы.',
      level: 'Advanced',
      duration: '90 мин',
      days: 5,
      forWho: 'Для подготовки к марафонам',
      color: '#1abc9c'
    },
  ];

  const filteredPrograms = selectedLevel === 'all' 
    ? programs 
    : programs.filter(p => p.level === selectedLevel);

  return (
    <div className="home-page">
      <Header />
      
      <main className="home-main">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Трансформируй Своё Тело</h1>
            <p>Выбери программу тренировок, которая подходит именно тебе</p>
          </div>
          <div className="hero-visual">
            <div className="hero-circle hero-circle-1">💪</div>
          </div>
        </section>

        <section className="filters-section">
          <h2>Программы по уровню подготовки</h2>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${selectedLevel === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedLevel('all')}
            >
              Все программы
            </button>
            <button
              className={`filter-btn ${selectedLevel === 'Beginner' ? 'active' : ''}`}
              onClick={() => setSelectedLevel('Beginner')}
            >
              Начинающие
            </button>
            <button
              className={`filter-btn ${selectedLevel === 'Intermediate' ? 'active' : ''}`}
              onClick={() => setSelectedLevel('Intermediate')}
            >
              Средний уровень
            </button>
            <button
              className={`filter-btn ${selectedLevel === 'Advanced' ? 'active' : ''}`}
              onClick={() => setSelectedLevel('Advanced')}
            >
              Продвинутые
            </button>
          </div>
        </section>

        <section className="programs-section">
          <div className="programs-grid">
            {filteredPrograms.map(program => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
