import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
        <img
        src="/images/logo.png"
        alt="Logo"
        className="sidebar__logo"
        />
      <h2 className="sidebar__header">Sidebar</h2>
      <ul className="sidebar__list">
        <li className="sidebar__item">
            <p>test</p>
        </li>
        <li className="sidebar__item">
        <p>test</p>
        </li>
        <li className="sidebar__item">
        <p>test</p>
        </li>
      </ul>
    </div>
  );
};

export { SideBar };