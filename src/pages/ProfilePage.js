import React, { useState } from 'react';
import './ProfilePage.css';
import Header from '../components/Header';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Иван Петров',
    email: 'ivan@example.com',
    phone: '+7 (999) 123-45-67',
    age: 28,
    height: 180,
    weight: 75,
    gender: 'male',
    goal: 'muscle_gain',
    activity: 'moderate',
    bio: 'Фитнес энтузиаст, стремящийся к здоровому образу жизни'
  });

  const [formData, setFormData] = useState(profileData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setProfileData(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profileData);
    setIsEditing(false);
  };

  const calculateBMI = () => {
    const heightInMeters = profileData.height / 100;
    return (profileData.weight / (heightInMeters * heightInMeters)).toFixed(1);
  };

  const getBMICategory = () => {
    const bmi = parseFloat(calculateBMI());
    if (bmi < 18.5) return 'Недостаточный вес';
    if (bmi < 25) return 'Нормальный вес';
    if (bmi < 30) return 'Избыточный вес';
    return 'Ожирение';
  };

  const getGoalLabel = (goal) => {
    const goals = {
      weight_loss: 'Похудение',
      muscle_gain: 'Набор мышечной массы',
      strength: 'Увеличение силы',
      endurance: 'Развитие выносливости'
    };
    return goals[goal] || goal;
  };

  const getActivityLabel = (activity) => {
    const activities = {
      sedentary: 'Малоподвижный образ жизни',
      light: 'Легкая активность',
      moderate: 'Умеренная активность',
      active: 'Активный образ жизни',
      very_active: 'Очень активный'
    };
    return activities[activity] || activity;
  };

  return (
    <div className="profile-page">
      <Header />

      <main className="profile-main">
        <section className="profile-header">
          <div className="profile-hero">
            <div className="profile-avatar">👤</div>
            <div className="profile-info">
              <h1>{profileData.name}</h1>
              <p>{profileData.email}</p>
            </div>
          </div>
        </section>

        <div className="profile-container">
          {/* Main Profile Card */}
          <div className="profile-card">
            <div className="card-header">
              <h2>Информация профиля</h2>
              {!isEditing && (
                <button
                  className="btn btn-secondary btn-small"
                  onClick={() => setIsEditing(true)}
                >
                  ✎ Редактировать
                </button>
              )}
            </div>

            {!isEditing ? (
              <div className="profile-view">
                <div className="profile-section">
                  <h3>Личные данные</h3>
                  <div className="data-grid">
                    <div className="data-item">
                      <label>Имя</label>
                      <value>{profileData.name}</value>
                    </div>
                    <div className="data-item">
                      <label>Email</label>
                      <value>{profileData.email}</value>
                    </div>
                    <div className="data-item">
                      <label>Телефон</label>
                      <value>{profileData.phone}</value>
                    </div>
                    <div className="data-item">
                      <label>Возраст</label>
                      <value>{profileData.age} лет</value>
                    </div>
                  </div>
                </div>

                <div className="profile-section">
                  <h3>Параметры тела</h3>
                  <div className="data-grid">
                    <div className="data-item">
                      <label>Рост</label>
                      <value>{profileData.height} см</value>
                    </div>
                    <div className="data-item">
                      <label>Вес</label>
                      <value>{profileData.weight} кг</value>
                    </div>
                    <div className="data-item">
                      <label>Пол</label>
                      <value>{profileData.gender === 'male' ? 'Мужской' : 'Женский'}</value>
                    </div>
                    <div className="data-item">
                      <label>BMI</label>
                      <value className="bmi-value">{calculateBMI()}</value>
                    </div>
                  </div>
                  <p className="bmi-category">Статус: <strong>{getBMICategory()}</strong></p>
                </div>

                <div className="profile-section">
                  <h3>Фитнес цели</h3>
                  <div className="data-grid">
                    <div className="data-item">
                      <label>Основная цель</label>
                      <value>{getGoalLabel(profileData.goal)}</value>
                    </div>
                    <div className="data-item">
                      <label>Уровень активности</label>
                      <value>{getActivityLabel(profileData.activity)}</value>
                    </div>
                  </div>
                </div>

                <div className="profile-section">
                  <h3>О себе</h3>
                  <p className="bio">{profileData.bio}</p>
                </div>
              </div>
            ) : (
              <form className="profile-form">
                <div className="form-section">
                  <h3>Личные данные</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Имя</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Телефон</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Возраст</label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        min="1"
                        max="120"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Параметры тела</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Рост (см)</label>
                      <input
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        min="100"
                        max="250"
                      />
                    </div>
                    <div className="form-group">
                      <label>Вес (кг)</label>
                      <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        min="20"
                        max="500"
                        step="0.1"
                      />
                    </div>
                    <div className="form-group">
                      <label>Пол</label>
                      <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="male">Мужской</option>
                        <option value="female">Женский</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Фитнес цели</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Основная цель</label>
                      <select name="goal" value={formData.goal} onChange={handleChange}>
                        <option value="weight_loss">Похудение</option>
                        <option value="muscle_gain">Набор мышечной массы</option>
                        <option value="strength">Увеличение силы</option>
                        <option value="endurance">Развитие выносливости</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Уровень активности</label>
                      <select name="activity" value={formData.activity} onChange={handleChange}>
                        <option value="sedentary">Малоподвижный образ жизни</option>
                        <option value="light">Легкая активность</option>
                        <option value="moderate">Умеренная активность</option>
                        <option value="active">Активный образ жизни</option>
                        <option value="very_active">Очень активный</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3>О себе</h3>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Расскажи о себе..."
                  />
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSave}
                  >
                    💾 Сохранить изменения
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={handleCancel}
                  >
                    ✕ Отменить
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Stats Cards */}
          <div className="profile-stats">
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <div className="stat-details">
                <div className="stat-label">Текущая цель</div>
                <div className="stat-value">{getGoalLabel(profileData.goal)}</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-details">
                <div className="stat-label">Активность</div>
                <div className="stat-value">{getActivityLabel(profileData.activity)}</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-details">
                <div className="stat-label">BMI</div>
                <div className="stat-value">{calculateBMI()}</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-details">
                <div className="stat-label">Программ завершено</div>
                <div className="stat-value">3</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
