import React, { useState } from 'react';
import './MapScreen.css';

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
      <h2 className="map-screen__title">Circle Map</h2>
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
        Save Circle
      </button>
    </div>
  );
};

export default MapScreen;