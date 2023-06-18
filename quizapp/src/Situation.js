import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

library.add(faCheckSquare, faVolumeUp);

const Situation = () => {

    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/position');
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
            <div id="content" className="content-container">
                <h1>Situatie 1</h1>
                <div className="description">
                    <p>Luister naar de situatie op de tabletop.</p>
                    <p>Jouw divisie: 12.34</p>
                </div>

                <div>
                {/* Hier wordt het volumepictogram weergegeven */}
                <FontAwesomeIcon icon="volume-up" className="volume-icon" />
                </div>

                <button onClick={handleStartClick}>Verder</button>
            </div>
        </div>
    );
};

export default Situation;
