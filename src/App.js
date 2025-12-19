import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import AITrainerPage from './pages/AITrainerPage';
import ProfilePage from './pages/ProfilePage';
import ProgramPage from './pages/ProgramPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Сразу устанавливаем пользователя как авторизованного
    const user = localStorage.getItem('user');
    if (!user) {
      localStorage.setItem('user', JSON.stringify({
        email: 'demo@example.com',
        name: 'Пользователь',
        isAuthenticated: true
      }));
    }
    setIsAuthenticated(true);
    setLoading(false);
  }, []);

  const ProtectedRoute = ({ children }) => {
    if (loading) {
      return (
        <div className="loading-screen">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Загрузка...</p>
          </div>
        </div>
      );
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/program"
          element={
            <ProtectedRoute>
              <ProgramPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ai-trainer"
          element={
            <ProtectedRoute>
              <AITrainerPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
