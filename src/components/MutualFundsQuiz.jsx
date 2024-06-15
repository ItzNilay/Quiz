import React, { useState } from 'react';
import './MutualFundsQuiz.css';

const questions = [
  {
    question: 'Who establishes the Mutual Fund in India?',
    options: ['Securities Exchange Board of India', 'Asset Management Company', 'Sponsor', 'Shareholders'],
    answer: 'Sponsor',
    explanation: 'The correct answer is: Sponsors establish mutual funds in India by contributing the initial capital.'
  },
  {
    question: 'In India, AMC must be registered with____________.',
    options: ['Company’s Act, 2013', 'No registration required', 'Securities Exchange Board of India', 'Reserve Bank of India'],
    answer: 'Securities Exchange Board of India',
    explanation: 'The correct answer is: In India, Asset Management Companies (AMCs) must be registered with the Securities Exchange Board of India (SEBI).'
  },
  {
    question: '___________ is a type of investment vehicle consisting of a portfolio of stocks, bonds, or other securities.',
    options: ['Government Securities', 'Mutual Funds', 'Derivatives', 'Shares'],
    answer: 'Mutual Funds',
    explanation: 'The correct answer is: Mutual Funds are investment vehicles that consist of a diversified portfolio of stocks, bonds, or other securities.'
  },
  {
    question: 'The First player of the Mutual fund industry was______________.',
    options: ['ICICI MF', 'UTI MF', 'SBI MF', 'LIC MF'],
    answer: 'UTI MF',
    explanation: 'The correct answer is: UTI Mutual Fund was the first player in the mutual fund industry.'
  },
  {
    question: 'UTI mutual fund was set up in the Year _______________.',
    options: ['1963', '1986', '1956', '1947'],
    answer: '1963',
    explanation: 'The correct answer is: UTI Mutual Fund was set up in the year 1963.'
  }
];

const MutualFundsQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const correct = option === questions[currentQuestionIndex].answer;
    setIsCorrect(correct);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setSelectedOption(null);
    setIsCorrect(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <div className="question-box">
        <h2>{currentQuestion.question}</h2>
        <ul>
          {currentQuestion.options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className={
                selectedOption === option
                  ? isCorrect
                    ? 'selected correct'
                    : 'selected incorrect'
                  : ''
              }
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      {showAnswer && (
        <div className="answer-box">
          <p>{currentQuestion.explanation}</p>
          {currentQuestionIndex < questions.length - 1 ? (
            <button onClick={handleNextQuestion}>Next Question</button>
          ) : (
            <p>Quiz Complete!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MutualFundsQuiz;
