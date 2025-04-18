import React from 'react';
import AlumniSidebar from './AlumniSidebar';
import './IncomingRequests.css';

const IncomingRequests = () => {
  const requests = [
    {
      from: 'Akshaya',
      message: 'Hi! I’d love your guidance on higher studies abroad.',
      date: '17-Apr-2025',
      status: 'Pending',
    },
    {
      from: 'PRJ',
      message: 'Can you share tips about tech interviews at Amazon?',
      date: '15-Apr-2025',
      status: 'Pending',
    },
  ];

  return (
    <div className="requests-layout">
      <AlumniSidebar />
      <div className="requests-main">
        <h2 className="requests-title">Incoming Student Requests</h2>
        {requests.map((req, idx) => (
          <div className="request-card" key={idx}>
            <div className="request-header">
              <div className="request-from"><strong>From:</strong> {req.from}</div>
              <span className="request-status">{req.status}</span>
            </div>
            <div className="request-message">
              <strong>Message:</strong> {req.message}
            </div>
            <div className="request-date">Date: {req.date}</div>
            <div className="request-actions">
              <button className="btn-accept">Accept</button>
              <button className="btn-reject">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncomingRequests;
