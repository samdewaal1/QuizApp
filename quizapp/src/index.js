import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import Situation from './Situation';
import Position from './Position';
import MapScreen from './MapScreen';
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/mapscreen" element={<MapScreen />} />
      <Route path="/situation" element={<Situation />} />
      <Route path="/position" element={<Position />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
