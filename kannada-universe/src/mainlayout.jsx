import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import logo from "./assets/logo.png";
import { t } from "./i18n";
import "./Welcome.css";

export default function MainLayout() {
  const lang = localStorage.getItem("lang") || "en";
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <header className="welcome-header">
        <div className="header-left">
          <img src={logo} alt="Kannada Logo" className="header-logo" />
        </div>

        <div className="header-ticker">
          <div className="header-ticker-fade left"></div>

          <div className="header-ticker-track">
            <div className="header-ticker-group">
              <span>ನಿಮ್ಮ ವ್ಯವಹಾರವನ್ನು ಬೆಳೆಸಿರಿ</span>
              <span className="dot">•</span>
              <span>Grow your business</span>
              <span className="dot">•</span>
              <span>ಕನ್ನಡದಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ</span>
              <span className="dot">•</span>
              <span>Connect in Kannada</span>
              <span className="dot">•</span>
              <span>ಸ್ಥಳೀಯದಿಂದ ಜಾಗತಿಕಕ್ಕೆ</span>
              <span className="dot">•</span>
              <span>From local to global</span>
            </div>

            <div className="header-ticker-group" aria-hidden="true">
              <span>ನಿಮ್ಮ ವ್ಯವಹಾರವನ್ನು ಬೆಳೆಸಿರಿ</span>
              <span className="dot">•</span>
              <span>Grow your business</span>
              <span className="dot">•</span>
              <span>ಕನ್ನಡದಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ</span>
              <span className="dot">•</span>
              <span>Connect in Kannada</span>
              <span className="dot">•</span>
              <span>ಸ್ಥಳೀಯದಿಂದ ಜಾಗತಿಕಕ್ಕೆ</span>
              <span className="dot">•</span>
              <span>From local to global</span>
            </div>
          </div>

          <div className="header-ticker-fade right"></div>
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

      <Outlet />
    </div>
  );
}