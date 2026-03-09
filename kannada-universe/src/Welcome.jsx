import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";
import logo from "./assets/logo.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { t } from "./i18n";

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

  const lang = localStorage.getItem("lang") || "en";

  const [selectedRole, setSelectedRole] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const roles = [
    { title: t("businessOwner", lang), desc: t("businessOwnerDesc", lang), icon: <FaChartBar /> },
    { title: t("aspiringEntrepreneur", lang), desc: t("aspiringEntrepreneurDesc", lang), icon: <FaRocket /> },
    { title: t("contentCreator", lang), desc: t("contentCreatorDesc", lang), icon: <FaPlay /> },
    { title: t("serviceProvider", lang), desc: t("serviceProviderDesc", lang), icon: <FaUserCog /> },
    { title: t("freelancer", lang), desc: t("freelancerDesc", lang), icon: <FaLaptop /> },
    { title: t("digitalMarketer", lang), desc: t("digitalMarketerDesc", lang), icon: <FaBullhorn /> },
    { title: t("studentLearner", lang), desc: t("studentLearnerDesc", lang), icon: <FaUserGraduate /> },
    { title: t("jobSeeker", lang), desc: t("jobSeekerDesc", lang), icon: <FaBriefcase /> },
    { title: t("investor", lang), desc: t("investorDesc", lang), icon: <FaCoins /> }
  ];

  return (
    <div className="welcome-page">

      <header className="welcome-header">

        <div className="header-left">
          <img src={logo} alt="Kannada Logo" className="header-logo" />
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
                    localStorage.removeItem("isLoggedIn");
                    navigate("/login");
                  }}
                >
                  {t("logout", lang)}
                </div>
              </div>
            )}

          </div>
        </div>

      </header>

      <div className="welcome-container">

        <h1>{t("welcome", lang)}</h1>
        <br />

        <div className="cards-grid">

          {roles.map((role, index) => (
            <div
              key={index}
              className={`role-card ${
                selectedRole === role.title ? "selected" : ""
              }`}
              onClick={() => setSelectedRole(role.title)}
            >

              <div className="icon">{role.icon}</div>
              <h3>{role.title}</h3>
              <p>{role.desc}</p>

            </div>
          ))}

        </div>

        <button
          className="continue-btn"
          onClick={() => {
            if (selectedRole) {
              localStorage.setItem("role", selectedRole);
            } else {
              localStorage.setItem("role", "Guest");
            }

            navigate("/location");
          }}
        >
          {t("continue", lang)}
        </button>

      </div>
    </div>
  );
}

export default Welcome;