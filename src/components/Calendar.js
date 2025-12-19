import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Mock data for training days
  const trainingDays = {
    3: 'rest',      // Friday - Rest
    5: 'trained',   // Sunday - Trained
    8: 'rest',      // Wednesday - Rest
    10: 'trained',  // Friday - Trained
    12: 'trained',  // Sunday - Trained
    15: 'upcoming', // Wednesday - Upcoming
    18: 'trained',  // Saturday - Trained
    20: 'upcoming', // Monday - Upcoming
    22: 'upcoming', // Wednesday - Upcoming
    25: 'trained',  // Saturday - Trained
    28: 'upcoming', // Tuesday - Upcoming
  };

  const monthName = currentDate.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' });
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const getStatus = (day) => {
    if (!day) return null;
    return trainingDays[day] || 'empty';
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'trained':
        return '✓';
      case 'rest':
        return 'REST';
      case 'upcoming':
        return '●';
      default:
        return '';
    }
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth} className="calendar-nav-btn">←</button>
        <h3>{monthName}</h3>
        <button onClick={handleNextMonth} className="calendar-nav-btn">→</button>
      </div>

      <div className="calendar-weekdays">
        <div>Пн</div>
        <div>Вт</div>
        <div>Ср</div>
        <div>Чт</div>
        <div>Пт</div>
        <div>Сб</div>
        <div>Вс</div>
      </div>

      <div className="calendar-days">
        {days.map((day, index) => {
          const status = getStatus(day);
          const icon = getStatusIcon(status);

          return (
            <div
              key={index}
              className={`calendar-day ${status} ${status ? 'has-status' : 'empty-day'}`}
            >
              {day && (
                <>
                  <span className="day-number">{day}</span>
                  {status && <span className="day-icon">{icon}</span>}
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="calendar-legend">
        <div className="legend-item trained">
          <span className="legend-indicator">✓</span>
          <span>Тренировка</span>
        </div>
        <div className="legend-item rest">
          <span className="legend-indicator">R</span>
          <span>Отдых</span>
        </div>
        <div className="legend-item upcoming">
          <span className="legend-indicator">●</span>
          <span>Предстоит</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
