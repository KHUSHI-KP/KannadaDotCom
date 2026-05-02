import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";
import { t } from "./i18n";
import API from "./api";

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

const ROLE_LIST = [
  { id: "Business Owner", key: "businessOwner", icon: <FaChartBar /> },
  { id: "Aspiring Entrepreneur", key: "aspiringEntrepreneur", icon: <FaRocket /> },
  { id: "Content Creator", key: "contentCreator", icon: <FaPlay /> },
  { id: "Service Provider", key: "serviceProvider", icon: <FaUserCog /> },
  { id: "Freelancer", key: "freelancer", icon: <FaLaptop /> },
  { id: "Digital Marketer", key: "digitalMarketer", icon: <FaBullhorn /> },
  { id: "Student / Learner", key: "studentLearner", icon: <FaUserGraduate /> },
  { id: "Job Seeker", key: "jobSeeker", icon: <FaBriefcase /> },
  { id: "Investor", key: "investor", icon: <FaCoins /> }
];

function Welcome() {
  const lang = localStorage.getItem("lang") || "en";
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any previous role selection once on mount to ensure fresh state
    localStorage.removeItem("role");
  }, []);

  const roles = useMemo(() => 
    ROLE_LIST.map(role => ({
      ...role,
      title: t(role.key, lang),
      desc: t(`${role.key}Desc`, lang)
    })), 
    [lang]
  );

  return (
    <div className="welcome-container">
      <h1>{t("welcome", lang)}</h1>
      <br />

      <div className="cards-grid">
        {roles.map((role) => (
          <div
            key={role.id}
            className={`role-card ${selectedRole === role.id ? "selected" : ""}`}
            onClick={() => {
              // console.log("Selected role:", role.id);
              setSelectedRole(role.id);
            }}
          >
            <div className="icon">{role.icon}</div>
            <h3>{role.title}</h3>
            <p>{role.desc}</p>
          </div>
        ))}
      </div>

      <button
        className="continue-btn"
        onClick={async () => {
          if (!selectedRole) {
            alert("Please select a profession");
            return;
          }

          try {
            const token = localStorage.getItem("authToken");
            // console.log("Updating profession:", selectedRole);
            // console.log("Auth token available:", !!token);

            await API.post(
              "/api/auth/update-profession",
              { profession: selectedRole },
              {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }
            );

            // console.log("Profession updated successfully");
            localStorage.removeItem("role");
            navigate("/location");
          } catch (error) {
            // console.error("Error updating profession:", error);
            alert("Failed to update profession. Please try again.");
          }
        }}
      >
        {t("continue", lang)}
      </button>
    </div>
  );
}

export default Welcome;