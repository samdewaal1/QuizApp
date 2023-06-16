import React from 'react';
import { useNavigate  } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleDeelnemerClick = () => {
    navigate('/register');
  };

  return (
    <div className="home">
      <h1 className="home__title">Docent of Deelnemer?</h1>
      <div className="home__button-container">
        <button className="home__button home__button--docent">Docent</button>
        <button className="home__button home__button--deelnemer" onClick={handleDeelnemerClick}>
          Deelnemer
        </button>
      </div>
    </div>
  );
};


export default Home;