import React from 'react';
import { NavLink } from 'react-router-dom';

const AlumniSidebar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/aluminidash' },
    { name: 'Student Requests', path: '/requests' },
    { name: 'My Scholarships', path: '/alumni/scholarships' },
    { name: 'Mentoring', path: '/alumni/mentoring' },
    { name: 'Profile', path: '/alumni/profile' },
    { name: 'Logout', path: '/logout' },
  ];

  return (
    <div style={{ width: '250px', backgroundColor: '#1f2937', height: '100vh', color: '#fff', padding: '2rem 1rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Alumni Panel</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name} style={{ marginBottom: '1rem' }}>
            <NavLink 
              to={item.path}
              style={({ isActive }) => ({
                padding: '0.5rem 1rem',
                display: 'block',
                backgroundColor: isActive ? '#374151' : 'transparent',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#fff'
              })}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlumniSidebar;
