import React, { useState, Image } from 'react';
import './HomeScreen.css';


const HomeScreen = () => {
    return (
        <body>
            <div id="container">
                <div id="menu">

                 
                    <ul>
                        <li><span className="menu-icon"></span>Home</li>
                        <li><span className="menu-icon"></span>Tutorial</li>
                        <li><span className="menu-icon"></span>Divisies</li>
                    </ul>
                </div>
                <div id="content">
                    <h1>Welkom</h1>
                    <p>Welkom bij de training van crisismanagement en terreur. Hier zullen we gaan oefenen met het doorlopen van high risk situaties en de risico’s, valkuilen en obstakels die hierbij komen kijken. Start de cursus, of volg een tutorial voor een uitleg van de cursus.</p>

                    <h1 class="cursuss">Cursussen</h1>
                    <h3>Cursus Crisismanagement en terreur</h3>
                    <p>Training over Crisismanagement en terreur.</p>

                    <button>Start</button>
                </div>
            </div>
        </body>
    );
};

export default HomeScreen;
