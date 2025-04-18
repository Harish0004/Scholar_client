
import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"; 

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Student Panel</h2>
      <ul>
        <li><NavLink to="/studdash" activeClassName="active">Dashboard</NavLink></li>
        <li><NavLink to="/scholarships" activeClassName="active">Available Scholarships</NavLink></li>
        <li><NavLink to="/applications" activeClassName="active">My Applications</NavLink></li>
        <li><NavLink to="/alumniconnect" activeClassName="active">Connect with Alumni</NavLink></li>
        <li><NavLink to="/profile" activeClassName="active">Profile</NavLink></li>
        <li><NavLink to="/logout">Logout</NavLink></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
