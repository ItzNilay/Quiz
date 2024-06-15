// src/components/QuizApp.jsx

import React, { useState } from 'react';
import MutualFundsQuiz from './MutualFundsQuiz';
import './QuizApp.css';

const QuizApp = () => {
  const [currentQuiz, setCurrentQuiz] = useState(null);

  const handleStartQuiz = (quizType) => {
    setCurrentQuiz(quizType);
  };

  const renderQuiz = () => {
    switch (currentQuiz) {
      case 'mutual-funds':
        return <MutualFundsQuiz />;
      // Add cases for other quizzes here if needed
      default:
        return null;
    }
  };

  return (
    <div className="quiz-container">
      {!currentQuiz ? (
        <>
          <div className="quiz-box" onClick={() => handleStartQuiz('mutual-funds')}>
            <h2>Mutual Funds</h2>
            <p>Test your knowledge about mutual funds.</p>
            <button className="start-quiz-button">Start Quiz</button>
          </div>
          <div className="quiz-box" onClick={() => handleStartQuiz('home-loans')}>
            <h2>Home Loans</h2>
            <p>Test your knowledge about home loans.</p>
            <button className="start-quiz-button">Start Quiz</button>
          </div>
          <div className="quiz-box" onClick={() => handleStartQuiz('stocks')}>
            <h2>Stocks</h2>
            <p>Test your knowledge about stocks.</p>
            <button className="start-quiz-button">Start Quiz</button>
          </div>
        </>
      ) : (
        renderQuiz()
      )}
    </div>
  );
};

export default QuizApp;
