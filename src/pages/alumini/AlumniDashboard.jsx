import React from 'react';
import AlumniSidebar from './AlumniSidebar';
import './AlumniDashboard.css'; // Import the CSS file

const AlumniDashboard = () => {
  const stats = [
    { label: 'Students Mentored', value: 6 },
    { label: 'Scholarships Offered', value: 2 },
    { label: 'Pending Requests', value: 4 },
  ];

  const requests = [
    { name: 'Anjali R. (B.Tech 2024)', type: 'Requested Mentorship', action: 'View' },
    { name: 'Rahul D. (MBA 2023)', type: 'Scholarship Inquiry', action: 'Respond' },
  ];

  return (
    <div className="dashboard-container">
      <AlumniSidebar />
      <div className="dashboard-content">
        <h2 className="dashboard-title">
          Welcome, Alumni <span role="img" aria-label="sparkle">🌟</span>
        </h2>

        <div className="dashboard-stats">
          {stats.map((stat, idx) => (
            <div key={idx} className="dashboard-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <h3 className="requests-heading">Student Requests</h3>
        <div className="requests-container">
          {requests.map((req, idx) => (
            <div key={idx} className="request-item">
              <div>
                <strong>{req.name}</strong>
                <div>{req.type}</div>
              </div>
              <button className="action-button">{req.action}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniDashboard;
