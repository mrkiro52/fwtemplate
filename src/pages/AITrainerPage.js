import React, { useState } from 'react';
import './AITrainerPage.css';
import Header from '../components/Header';

const AITrainerPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      text: 'Привет! 👋 Я твой личный AI фитнес тренер. Я помогу тебе с выбором упражнений, советами по питанию и мотивацией на твоём пути к достижению целей. Что ты хочешь узнать?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const mockAIResponses = [
    'Отличный вопрос! Позвольте мне дать вам детальный ответ на основе вашей программы тренировок.',
    'Я рекомендую выполнять это упражнение 3 раза в неделю для оптимального результата.',
    'Убедитесь, что вы потребляете достаточно белка для восстановления мышц. Примерно 1.6-2.2 грамма на килограмм веса тела.',
    'Отличная работа на последней тренировке! Вижу, что вы прогрессируете. Продолжайте в том же духе! 💪',
    'Для достижения лучших результатов, не забывайте о растяжке после тренировок и достаточном сне (7-9 часов).',
    'Попробуйте увеличить интенсивность упражнений постепенно. Это поможет избежать травм и обеспечит лучший прогресс.',
  ];

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputValue
    };

    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      const randomResponse = mockAIResponses[Math.floor(Math.random() * mockAIResponses.length)];
      const aiMessage = {
        id: messages.length + 2,
        type: 'ai',
        text: randomResponse
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="ai-trainer-page">
      <Header />

      <main className="ai-trainer-main">
        <section className="ai-trainer-header">
          <div className="header-content">
            <h1>AI Фитнес Тренер 🤖</h1>
            <p>Получай персональные советы и рекомендации от искусственного интеллекта</p>
          </div>
          <div className="header-visual">
            <div className="ai-avatar">🤖</div>
          </div>
        </section>

        <div className="ai-trainer-container">
          <div className="chat-messages">
            <div className="messages-wrapper">
              {messages.map((message) => (
                <div key={message.id} className={`message ${message.type}`}>
                  <div className="message-avatar">
                    {message.type === 'ai' ? '🤖' : '👤'}
                  </div>
                  <div className="message-content">
                    <div className="message-text">{message.text}</div>
                    <span className="message-time">
                      {new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="message ai">
                  <div className="message-avatar">🤖</div>
                  <div className="message-content">
                    <div className="loading-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <form className="chat-input-area" onSubmit={handleSendMessage}>
            <div className="input-wrapper">
              <input
                type="text"
                className="chat-input"
                placeholder="Задай вопрос своему AI тренеру..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isLoading}
              />
              <button
                type="submit"
                className="btn-send"
                disabled={isLoading || !inputValue.trim()}
                title="Отправить сообщение"
              >
                ➤
              </button>
            </div>
            <div className="input-hints">
              <span className="hint-label">Примеры вопросов:</span>
              <div className="hint-buttons">
                <button
                  type="button"
                  className="hint-btn"
                  onClick={() => {
                    setInputValue('Какие упражнения лучше всего для набора мышечной массы?');
                  }}
                >
                  Упражнения для мышц
                </button>
                <button
                  type="button"
                  className="hint-btn"
                  onClick={() => {
                    setInputValue('Какой должна быть моя суточная норма калорий?');
                  }}
                >
                  Калории и БЖУ
                </button>
                <button
                  type="button"
                  className="hint-btn"
                  onClick={() => {
                    setInputValue('Как правильно восстанавливаться после тренировок?');
                  }}
                >
                  Восстановление
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AITrainerPage;
