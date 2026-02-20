import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";
import logo from "./assets/logo.png";
import { HiOutlineUserCircle } from "react-icons/hi";

import {
  FaChartBar,
  FaRocket,
  FaPlay,
  FaUserCog,
  FaLaptop,
  FaBullhorn,
  FaUserGraduate,
  FaBriefcase,
  FaCoins
} from "react-icons/fa";

function Welcome() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const roles = [
    { title: "Business Owner", desc: "Manage and grow your business online", icon: <FaChartBar /> },
    { title: "Aspiring Entrepreneur", desc: "Start and learn how to build your business", icon: <FaRocket /> },
    { title: "Content Creator", desc: "Create content and grow your audience", icon: <FaPlay /> },
    { title: "Service Provider", desc: "Offer professional services locally", icon: <FaUserCog /> },
    { title: "Freelancer", desc: "Showcase your skills and find clients", icon: <FaLaptop /> },
    { title: "Digital Marketer", desc: "Promote brands and grow online presence", icon: <FaBullhorn /> },
    { title: "Student / Learner", desc: "Learn business and digital skills", icon: <FaUserGraduate /> },
    { title: "Job Seeker", desc: "Find job opportunities and careers", icon: <FaBriefcase /> },
    { title: "Investor", desc: "Invest in promising startups", icon: <FaCoins /> }
  ];

  return (
    <div className="welcome-page">

      {/* HEADER */}
      <header className="welcome-header">

        <div className="header-left">
          <img src={logo} alt="Kannada Logo" className="header-logo" />
        </div>

        <div className="header-center">
          <div className="moving-text">
            <div className="moving-track">
              <span>
                Empowering Karnataka Entrepreneurs |
                Connecting Startups & Creators |
                Driving Digital Karnataka |
                Start • Build • Scale • Succeed |
              </span>
              <span>
                Empowering Karnataka Entrepreneurs |
                Connecting Startups & Creators |
                Driving Digital Karnataka |
                Start • Build • Scale • Succeed |
              </span>
            </div>
          </div>
        </div>

        <div className="header-right">
          <div className="account-wrapper">
            <HiOutlineUserCircle
              className="account-icon"
              onClick={() => setShowDropdown(!showDropdown)}
            />

            {showDropdown && (
              <div className="dropdown-menu">
                <div
                  className="dropdown-item"
                  onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/login");
                  }}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>

      </header>

      {/* MAIN CONTAINER */}
      <div className="welcome-container">
        <h1>Welcome !!!</h1>
        <p className="subtitle">
          Select your role to personalize your experience
        </p>

        <div className="cards-grid">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`role-card ${selectedRole === role.title ? "selected" : ""}`}
              onClick={() => setSelectedRole(role.title)}
            >
              <div className="icon">{role.icon}</div>
              <h3>{role.title}</h3>
              <p>{role.desc}</p>
            </div>
          ))}
        </div>

        <button className="continue-btn" disabled={!selectedRole}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default Welcome;