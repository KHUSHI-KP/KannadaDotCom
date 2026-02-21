import "./Social.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function SocialLink() {
  const navigate = useNavigate();

  const goNext = () => {
    navigate("/goals");
  };

  return (
    <div className="social-wrapper">
      <div className="social-card">

        <IoArrowBack className="back-btn" onClick={() => navigate(-1)} />

        <h2>Connect your Social Media</h2>
        <p className="sub">
          Connect your accounts to publish content and track analytics.
        </p>

        <div className="platform-list">
          <SocialItem
            icon={<FaFacebookF />}
            name="Facebook"
            color="#1877F2"
            url="https://www.facebook.com/login"
          />

          <SocialItem
            icon={<FaInstagram />}
            name="Instagram"
            color="#E4405F"
            url="https://www.instagram.com/accounts/login/"
          />

          <SocialItem
            icon={<FaYoutube />}
            name="YouTube"
            color="#FF0000"
            url="https://accounts.google.com/signin"
          />

          <SocialItem
            icon={<FaWhatsapp />}
            name="WhatsApp"
            color="#25D366"
            url="https://web.whatsapp.com/"
          />
        </div>

        <div className="bottom-section">
  <button className="continue-btn" onClick={goNext}>
     Continue
  </button>

  <span className="skip-link" onClick={goNext}>
    Skip for now
  </span>
</div>

      </div>
    </div>
  );
}

function SocialItem({ icon, name, color, url }) {
  return (
    <div className="platform-item">
      <div className="left">
        <div className="platform-icon" style={{ color }}>
          {icon}
        </div>
        <span>{name}</span>
      </div>

      <button
        className="connect-btn"
        onClick={() => window.open(url, "_blank")}
      >
        Connect
      </button>
    </div>
  );
}