import React, { useState } from 'react';

function LandingPage() {
  const [gameCode, setGameCode] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Check if game code is valid
    // Redirect to game page if it is
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter game code:
        <input type="text" value={gameCode} onChange={event => setGameCode(event.target.value)} />
      </label>
      <button type="submit">Join game</button>
    </form>
  );
}

function GamePage() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const questions = [
    {
      question: 'What is the capital of France?',
      choices: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris'
    },
    {
      question: 'What is the largest planet in our solar system?',
      choices: ['Jupiter', 'Saturn', 'Neptune', 'Uranus'],
      correctAnswer: 'Jupiter'
    },
    // Add more questions here
  ];

  function handleAnswerSubmit(answer) {
    const question = questions[questionIndex];
    if (answer === question.correctAnswer) {
      setScore(score + 1);
    }
    setQuestionIndex(questionIndex + 1);
  }

  if (questionIndex >= questions.length) {
    return (
      <div>
        <p>Final score: {score}</p>
        <button onClick={() => window.location.reload()}>Play again</button>
      </div>
    );
  }

  const question = questions[questionIndex];
  return (
    <div>
      <p>{question.question}</p>
      {question.choices.map(choice => (
        <button key={choice} onClick={() => handleAnswerSubmit(choice)}>{choice}</button>
      ))}
      <p>Score: {score}</p>
    </div>
  
  );
      

}

function App() {
  return (
    <div>
      <LandingPage />
      <GamePage />
    </div>
  );
}

export default App;
