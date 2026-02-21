import "./Social.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function SocialLink() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/goals");
  };

  return (
    <div className="wrapper">
      <div className="card">

        <IoArrowBack className="back" onClick={() => navigate(-1)} />

        <h2>Link your Social Media</h2>
        <p className="subtitle">
          Connect your accounts to publish content and track performance.
        </p>

        <div className="grid">
          <SocialBox
            icon={<FaFacebookF />}
            name="Facebook"
            color="#1877F2"
            url="https://www.facebook.com/login"
          />

          <SocialBox
            icon={<FaInstagram />}
            name="Instagram"
            color="#E4405F"
            url="https://www.instagram.com/accounts/login/"
          />

          <SocialBox
            icon={<FaYoutube />}
            name="YouTube"
            color="#FF0000"
            url="https://accounts.google.com/signin"
          />

          <SocialBox
            icon={<FaWhatsapp />}
            name="WhatsApp"
            color="#25D366"
            url="https://web.whatsapp.com/"
          />
        </div>

        <div className="bottom">
          <span className="skip" onClick={() => navigate("/goals")}>
            Skip for now
          </span>

          <button className="continue" onClick={handleContinue}>
            Accept & Continue
          </button>
        </div>

      </div>
    </div>
  );
}

function SocialBox({ icon, name, color, url }) {
  const handleConnect = () => {
    window.open(url, "_blank"); // Opens login page in new tab
  };

  return (
    <div className="box">
      <div className="platform">
        <span className="icon" style={{ color }}>{icon}</span>
        <span>{name}</span>
      </div>

      <button className="connect" onClick={handleConnect}>
        Connect
      </button>
    </div>
  );
}