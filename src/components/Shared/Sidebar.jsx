import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar-list">
        <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>Dashboard</NavLink></li>
        <li><NavLink to="/users" className={({ isActive }) => isActive ? "active" : ""}>Users</NavLink></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
