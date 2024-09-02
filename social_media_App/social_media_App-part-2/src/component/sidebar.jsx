import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button 
        onClick={toggleSidebar} 
        className="btn btn-primary sbb"
        style={{ 
          marginBottom: "10px",
          backgroundColor: "#007bff",  // Default button color
          borderColor: "#007bff",      // Default border color
          transition: "background-color 0.3s ease" // Smooth transition
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#0056b3"; // Hover color
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#007bff"; // Reset to default
        }}
      >
        {isOpen ? 'Close ' : 'Open '}
      </button>
      
      <div className={`d-flex flex-column flex-shrink-0 p-3 sb ${isOpen ? '' : 'collapsed'}`} 
        style={{ 
          width: isOpen ? '180px' : '60px', 
          transition: 'width 0.3s', 
          backdropFilter: 'blur(10px)', // Glass effect
          background: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background for glass effect
          borderRadius: '10px', // Rounded corners
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
          border: '1px solid rgba(255, 255, 255, 0.2)', // Border
        }}
      >
        <a href="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-black text-decoration-none">
          <svg className="bi pe-none me-2" width="20" height="22"><use xlinkHref="#bootstrap"></use></svg>
          <span className={`fs-4 fw-bold ${isOpen ? '' : 'd-none'}`}>Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link 
              to="/" 
              className="nav-link text-black fw-bold" 
              aria-current="page"
              style={{ 
                transition: "background 0.3s ease, color 0.3s ease", // Smooth transition for hover
                borderRadius: '5px', // Rounded corners for links
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "linear-gradient(45deg, #ff6f00, #ff8e53)"; // Gradient hover effect
                e.currentTarget.style.color = "white"; // Change text color on hover
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent"; // Reset to default
                e.currentTarget.style.color = "black"; // Reset text color
              }}
            >
              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
              <span className={isOpen ? '' : 'd-none'}>Home</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/creatpost" 
              className="nav-link text-black fw-bold"
              style={{ 
                transition: "background 0.3s ease, color 0.3s ease", // Smooth transition for hover
                borderRadius: '5px', // Rounded corners for links
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "linear-gradient(45deg, #ff6f00, #ff8e53)"; // Gradient hover effect
                e.currentTarget.style.color = "white"; // Change text color on hover
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent"; // Reset to default
                e.currentTarget.style.color = "black"; // Reset text color
              }}
            >
              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
              <span className={isOpen ? '' : 'd-none'}>Create Post</span>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a 
            href="#" 
            className="d-flex align-items-center text-black fw-bold text-decoration-none dropdown-toggle" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
            style={{ 
              transition: "background 0.3s ease, color 0.3s ease", // Smooth transition for hover
              borderRadius: '5px', // Rounded corners for dropdown
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "linear-gradient(45deg, #ff6f00, #ff8e53)"; // Gradient hover effect
              e.currentTarget.style.color = "white"; // Change text color on hover
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent"; // Reset to default
              e.currentTarget.style.color = "black"; // Reset text color
            }}
          >
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"></img>
            <strong className={isOpen ? '' : 'd-none'}>mdo</strong>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
