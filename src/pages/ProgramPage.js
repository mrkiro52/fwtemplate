import React, { useState } from 'react';
import './ProgramPage.css';
import Header from '../components/Header';

const ProgramPage = () => {
  const [program, setProgram] = useState({
    id: 1,
    title: 'Intermediate: Силовой Тренинг',
    description: 'Развивайте мышечную массу и силу с помощью прогрессивного силового тренинга.',
    duration: '60 мин',
    days: 5,
    completedExercises: 12,
    totalExercises: 45,
    startDate: '2024-12-01',
    endDate: '2024-12-31',
  });

  const [trainingSessions, setTrainingSessions] = useState([
    {
      id: 1,
      day: 'День 1',
      name: 'Грудь и Трицепс',
      status: 'completed', // completed, in-progress, not-started
      completedExercises: 8,
      totalExercises: 8,
      videoUrl: null,
      exercises: [
        {
          id: 1,
          name: 'Жим штанги лежа',
          sets: 4,
          reps: '8-10',
          rest: '90-120 сек',
          completed: true,
          video: '🎬'
        },
        {
          id: 2,
          name: 'Разводка гантелей',
          sets: 3,
          reps: '10-12',
          rest: '60 сек',
          completed: true,
          video: '🎬'
        },
        {
          id: 3,
          name: 'Отжимания на брусьях',
          sets: 3,
          reps: '8-10',
          rest: '90 сек',
          completed: true,
          video: '🎬'
        },
        {
          id: 4,
          name: 'Жим узким хватом',
          sets: 3,
          reps: '10-12',
          rest: '60 сек',
          completed: true,
          video: '🎬'
        },
        {
          id: 5,
          name: 'Тяга блока к груди',
          sets: 3,
          reps: '12-15',
          rest: '45 сек',
          completed: true,
          video: '🎬'
        },
        {
          id: 6,
          name: 'Разгибание рук с гантелью',
          sets: 3,
          reps: '12-15',
          rest: '45 сек',
          completed: true,
          video: '🎬'
        },
        {
          id: 7,
          name: 'Отжимания от пола',
          sets: 3,
          reps: '15-20',
          rest: '30 сек',
          completed: true,
          video: '🎬'
        },
        {
          id: 8,
          name: 'Растяжка',
          sets: 1,
          reps: '10 мин',
          rest: '-',
          completed: true,
          video: '🎬'
        },
      ]
    },
    {
      id: 2,
      day: 'День 2',
      name: 'Спина и Бицепс',
      status: 'in-progress',
      completedExercises: 4,
      totalExercises: 8,
      videoUrl: null,
      exercises: [
        {
          id: 1,
          name: 'Подтягивания широким хватом',
          sets: 4,
          reps: '6-8',
          rest: '120 сек',
          completed: true,
          video: '🎬'
        },
        {
          id: 2,
          name: 'Тяга штанги в наклоне',
          sets: 4,
          reps: '8-10',
          rest: '90-120 сек',
          completed: true,
          video: '🎬'
        },
        {
          id: 3,
          name: 'Становая тяга',
          sets: 3,
          reps: '6-8',
          rest: '120 сек',
          completed: true,
          video: '🎬'
        },
        {
          id: 4,
          name: 'Тяга Т-грифа',
          sets: 3,
          reps: '10-12',
          rest: '90 сек',
          completed: true,
          video: '🎬'
        },
        {
          id: 5,
          name: 'Подъем штанги на бицепс',
          sets: 3,
          reps: '8-10',
          rest: '60 сек',
          completed: false,
          video: '🎬'
        },
        {
          id: 6,
          name: 'Молоток с гантелями',
          sets: 3,
          reps: '10-12',
          rest: '60 сек',
          completed: false,
          video: '🎬'
        },
        {
          id: 7,
          name: 'Подъем гантелей на бицепс',
          sets: 3,
          reps: '12-15',
          rest: '45 сек',
          completed: false,
          video: '🎬'
        },
        {
          id: 8,
          name: 'Растяжка',
          sets: 1,
          reps: '10 мин',
          rest: '-',
          completed: false,
          video: '🎬'
        },
      ]
    },
    {
      id: 3,
      day: 'День 3',
      name: 'Ноги',
      status: 'not-started',
      completedExercises: 0,
      totalExercises: 8,
      videoUrl: null,
      exercises: [
        {
          id: 1,
          name: 'Приседания со штангой',
          sets: 4,
          reps: '8-10',
          rest: '120-150 сек',
          completed: false,
          video: '🎬'
        },
        {
          id: 2,
          name: 'Жим ногами в тренажере',
          sets: 3,
          reps: '10-12',
          rest: '90 сек',
          completed: false,
          video: '🎬'
        },
        {
          id: 3,
          name: 'Разгибание ног',
          sets: 3,
          reps: '12-15',
          rest: '60 сек',
          completed: false,
          video: '🎬'
        },
        {
          id: 4,
          name: 'Сгибание ног лежа',
          sets: 3,
          reps: '10-12',
          rest: '60 сек',
          completed: false,
          video: '🎬'
        },
        {
          id: 5,
          name: 'Болгарские приседания',
          sets: 3,
          reps: '10-12',
          rest: '60 сек',
          completed: false,
          video: '🎬'
        },
        {
          id: 6,
          name: 'Мертвая тяга',
          sets: 3,
          reps: '10-12',
          rest: '60 сек',
          completed: false,
          video: '🎬'
        },
        {
          id: 7,
          name: 'Подъем на носки',
          sets: 4,
          reps: '15-20',
          rest: '45 сек',
          completed: false,
          video: '🎬'
        },
        {
          id: 8,
          name: 'Растяжка',
          sets: 1,
          reps: '10 мин',
          rest: '-',
          completed: false,
          video: '🎬'
        },
      ]
    },
    {
      id: 4,
      day: 'День 4',
      name: 'Плечи',
      status: 'not-started',
      completedExercises: 0,
      totalExercises: 7,
      videoUrl: null,
      exercises: [
        {
          id: 1,
          name: 'Жим штанги сидя',
          sets: 4,
          reps: '8-10',
          rest: '90-120 сек',
          completed: false,
          video: '🎬'
        },
        {
          id: 2,
          name: 'Разводка гантелей в стороны',
          sets: 3,
          reps: '12-15',
          rest: '60 сек',
          completed: false,
          video: '🎬'
        },
        {
          id: 3,
          name: 'Тяга штанги к подбородку',
          sets: 3,
          reps: '10-12',
          rest: '60 сек',
          completed: false,
          video: '🎬'
        },
        {
          id: 4,
          name: 'Разводка гантелей в наклоне',
          sets: 3,
          reps: '12-15',
          rest: '60 сек',
          completed: false,
          video: '🎬'
        },
        {
          id: 5,
          name: 'Жим в тренажере Смита',
          sets: 3,
          reps: '10-12',
          rest: '60 сек',
          completed: false,
          video: '🎬'
        },
        {
          id: 6,
          name: 'Подъем гантели в сторону',
          sets: 3,
          reps: '12-15',
          rest: '45 сек',
          completed: false,
          video: '🎬'
        },
        {
          id: 7,
          name: 'Растяжка',
          sets: 1,
          reps: '10 мин',
          rest: '-',
          completed: false,
          video: '🎬'
        },
      ]
    },
    {
      id: 5,
      day: 'День 5',
      name: 'Кардио и Пресс',
      status: 'not-started',
      completedExercises: 0,
      totalExercises: 6,
      videoUrl: null,
      exercises: [
        {
          id: 1,
          name: 'Бег на беговой дорожке',
          sets: 1,
          reps: '20-30 мин',
          rest: '-',
          completed: false,
          video: '🎬'
        },
        {
          id: 2,
          name: 'Скакалка',
          sets: 3,
          reps: '2 мин',
          rest: '60 сек',
          completed: false,
          video: '🎬'
        },
        {
          id: 3,
          name: 'Скручивания на скамье',
          sets: 3,
          reps: '15-20',
          rest: '45 сек',
          completed: false,
          video: '🎬'
        },
        {
          id: 4,
          name: 'Подъем ног в висе',
          sets: 3,
          reps: '12-15',
          rest: '60 сек',
          completed: false,
          video: '🎬'
        },
        {
          id: 5,
          name: 'Планка',
          sets: 3,
          reps: '60-90 сек',
          rest: '60 сек',
          completed: false,
          video: '🎬'
        },
        {
          id: 6,
          name: 'Растяжка',
          sets: 1,
          reps: '10 мин',
          rest: '-',
          completed: false,
          video: '🎬'
        },
      ]
    },
  ]);

  const toggleExerciseCompletion = (sessionId, exerciseId) => {
    setTrainingSessions(prev => prev.map(session => {
      if (session.id === sessionId) {
        return {
          ...session,
          exercises: session.exercises.map(ex => {
            if (ex.id === exerciseId) {
              return { ...ex, completed: !ex.completed };
            }
            return ex;
          }),
          completedExercises: session.exercises.filter(ex => {
            if (ex.id === exerciseId) {
              return !ex.completed;
            }
            return ex.completed;
          }).length
        };
      }
      return session;
    }));

    // Обновляем общий прогресс
    const newTotalCompleted = trainingSessions.reduce((sum, session) => {
      return sum + session.exercises.filter(ex => ex.completed).length;
    }, 0);
    
    setProgram(prev => ({
      ...prev,
      completedExercises: newTotalCompleted + 1
    }));
  };

  const getStatusBadge = (status) => {
    const statuses = {
      completed: { text: 'Завершено', icon: '✓', color: 'status-completed' },
      'in-progress': { text: 'В процессе', icon: '⏱', color: 'status-in-progress' },
      'not-started': { text: 'Не начато', icon: '○', color: 'status-not-started' }
    };
    return statuses[status] || statuses['not-started'];
  };

  const progressPercentage = (program.completedExercises / program.totalExercises) * 100;

  return (
    <div className="program-page">
      <Header />
      
      <main className="program-main">
        <div className="program-header">
          <div className="program-info">
            <h1>{program.title}</h1>
            <p>{program.description}</p>
            <div className="program-stats">
              <div className="stat-item">
                <span className="stat-label">Время тренировки:</span>
                <span className="stat-value">{program.duration}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Дней в программе:</span>
                <span className="stat-value">{program.days}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Период:</span>
                <span className="stat-value">01 Дек - 31 Дек</span>
              </div>
            </div>
          </div>

          <div className="progress-section">
            <h3>Общий прогресс</h3>
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className="progress-text">
                {program.completedExercises} из {program.totalExercises} упражнений ({Math.round(progressPercentage)}%)
              </p>
            </div>
          </div>
        </div>

        <section className="training-sessions">
          <h2>План тренировок</h2>
          <div className="sessions-grid">
            {trainingSessions.map(session => {
              const status = getStatusBadge(session.status);
              const sessionProgress = (session.completedExercises / session.totalExercises) * 100;

              return (
                <div key={session.id} className={`session-card ${session.status}`}>
                  <div className="session-header">
                    <div className="session-title">
                      <h3>{session.day}</h3>
                      <p>{session.name}</p>
                    </div>
                    <div className={`session-status ${status.color}`}>
                      <span className="status-icon">{status.icon}</span>
                      <span className="status-text">{status.text}</span>
                    </div>
                  </div>

                  <div className="session-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${sessionProgress}%` }}
                      ></div>
                    </div>
                    <p className="progress-text">
                      {session.completedExercises}/{session.totalExercises} упражнений
                    </p>
                  </div>

                  <div className="exercises-list">
                    {session.exercises.map(exercise => (
                      <div 
                        key={exercise.id} 
                        className={`exercise-item ${exercise.completed ? 'completed' : ''}`}
                      >
                        <button
                          className="exercise-checkbox"
                          onClick={() => toggleExerciseCompletion(session.id, exercise.id)}
                          title={exercise.completed ? 'Отметить как не выполнено' : 'Отметить как выполнено'}
                        >
                          {exercise.completed ? '✓' : '○'}
                        </button>
                        
                        <div className="exercise-info">
                          <div className="exercise-name">{exercise.name}</div>
                          <div className="exercise-details">
                            <span>{exercise.sets} подход{exercise.sets !== 1 ? 'ов' : ''} × {exercise.reps}</span>
                            <span>Отдых: {exercise.rest}</span>
                          </div>
                        </div>

                        <button className="exercise-video" title="Смотреть видео">
                          {exercise.video}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProgramPage;
