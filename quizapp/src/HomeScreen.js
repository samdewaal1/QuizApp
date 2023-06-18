import React from 'react';
import './HomeScreen.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
library.add(faCheckSquare);

const HomeScreen = () => {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/situation');
    };


    return (
        <div id="container">
            <div id="menu">
                <FontAwesomeIcon icon="fa-sharp fa-solid fa-user" />
                <ul>
                    <li><span className="menu-icon"></span>Home</li>
                    <li><span className="menu-icon"></span>Tutorial</li>
                    <li><span className="menu-icon"></span>Divisies</li>
                </ul>
            </div>
            <div id="content">
                <h1>Welkom</h1>
                <div className="description">
                    <p>Welkom bij de training van crisismanagement en terreur. Hier zullen we gaan oefenen met het doorlopen van high risk situaties en de risico’s, valkuilen en obstakels die hierbij komen kijken. Start de cursus, of volg een tutorial voor een uitleg van de cursus.</p>
                </div>
                <h1 className="cursus">Cursussen</h1>
                <h3>Cursus Crisismanagement en terreur</h3>
                <p>Training over Crisismanagement en terreur.</p>

                <div className="input-container">
                    <p>Eenheid Nummer</p>
                    <input type="text" placeholder="Bijvoorbeeld 41.02.1" />
                </div>

                <button onClick={handleStartClick}>Start</button>
            </div>
        </div>
    );
};

export default HomeScreen;
