import React from 'react';
import Sidebar from './SideBar';

const StudentProfile = () => {
  // Static profile data (replace with dynamic fetch later)
  const profile = {
    name: 'Rohan Kumar',
    email: 'rohan.kumar@student.edu',
    regNo: '21CSE123',
    phone: '+91 9876543210',
    branch: 'Computer Science',
    year: '3rd Year',
    cgpa: 8.5,
    bio: 'Highly motivated student interested in software development and AI. Actively seeking internship and scholarship opportunities.',
    photo: 'https://via.placeholder.com/100x100?text=Profile'
  };

  return (
    <div style={{ display: 'flex',width:'100vw',color:'black' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '2rem', backgroundColor: '#f8fafc' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>My Profile</h2>
        <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '10px', display: 'flex', gap: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <img src={profile.photo} alt="Profile Picture" style={{ width: '100px', borderRadius: '50%' }} />
            <h3 style={{ marginTop: '1rem' }}>{profile.name}</h3>
            <p>{profile.email}</p>
            <p>Reg No: {profile.regNo}</p>
            <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#3498db', color: '#fff', border: 'none', borderRadius: '5px' }}>
              Edit Profile
            </button>
          </div>
          <div style={{ flex: 2, borderLeft: '1px solid #eee', paddingLeft: '2rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <h4>Contact Info</h4>
              <hr />
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Phone:</strong> {profile.phone}</p>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <h4>Academic Info</h4>
              <hr />
              <p><strong>Branch:</strong> {profile.branch}</p>
              <p><strong>Year:</strong> {profile.year}</p>
              <p><strong>CGPA:</strong> {profile.cgpa}</p>
            </div>
            <div>
              <h4>Bio</h4>
              <hr />
              <p>{profile.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
