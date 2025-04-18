import Sidebar from './SideBar';
import './AvailableScholarships.css';

const scholarships = [
  {
    title: 'TechSpark Fellowship',
    description: 'Up to ₹50,000 for final year CS/IT students.',
    deadline: 'April 30',
  },
  {
    title: 'Women in STEM Grant',
    description: '₹70,000 grant for women pursuing STEM.',
    deadline: 'May 10',
  },
  {
    title: 'Alumni Support Fund',
    description: 'Special alumni-funded scholarship. Amount varies.',
    deadline: 'May 20',
  },
];

const AvailableScholarships = () => {
  return (
    <div className="page-container">
      <Sidebar />
      <div className="content">
        <h1>Available Scholarships</h1>

        <div className="filters">
          <input type="text" placeholder="Search scholarships..." />
          <select>
            <option>All Categories</option>
          </select>
          <select>
            <option>Sort By</option>
          </select>
        </div>

        <div className="scholarship-list">
          {scholarships.map((item, index) => (
            <div key={index} className="scholarship-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p><strong>Deadline:</strong> {item.deadline}</p>
              <div className="card-buttons">
                <button className="apply-btn">Apply</button>
                <button className="details-btn">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableScholarships;
