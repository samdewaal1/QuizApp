import React, { useState } from 'react';
import './MapScreen.css';
import { NavLink } from 'react-router-dom';
import { SideBar } from './SideBar';
const MapScreen = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  const handleMapClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setCirclePosition({ x, y });
  };

  const handleSaveCircle = () => {
    // Save circlePosition to database or local storage
    console.log('Circle position saved:', circlePosition);
  };

  return (
    <div className="map-screen">
       <SideBar />
       <div className="map-container" >
      <div className="map-screen__header">
      <h2 className="map-screen__title">Situatie 1</h2>
      <p className="map-screen__instructions">
        Klik op de kaart om je positie te bepalen <br /> Waar positioneer jij jezelf aan de hand van de informatie die je hebt gekregen?
        <br></br> <b>Divisie nummer: </b><b>3.42</b>
      </p>
      </div>
      <div className="map-screen__map-container">
        <img
        src="/images/map.png"
        alt="Map"
          className="map-screen__map-image"
          onClick={handleMapClick}
        />
        <div
          className="map-screen__circle"
          style={{
            left: circlePosition.x,
            top: circlePosition.y,
          }}
        />
      </div>
      <button className="map-screen__save-button" onClick={handleSaveCircle}>
          Verzend locatie
      </button>
    </div>
    </div>
  );
};

export default MapScreen;