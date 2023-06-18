import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

library.add(faCheckSquare, faVolumeUp);

const Position = () => {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/');
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
                    <p>Waar positioneer jij jezelf aan de hand van de informatie die je hebt gekregen?</p>
                </div>
                

                {/* Voeg de volgende code toe voor de afbeelding */}
                <div className="image-container">
                    <img src="/images/map.png" alt="Full View" className="full-view-image" />
                </div>

                <button onClick={handleStartClick}>Verder</button>
            </div>
        </div>
    );
};

export default Position;
