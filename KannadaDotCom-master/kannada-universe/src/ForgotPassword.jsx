import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import background from "./assets/back.jpeg";
import { t } from "./i18n";

function ForgotPassword() {

  const lang = localStorage.getItem("lang") || "en";

  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleSendOtp = () => {
    if (!/^[0-9]{10}$/.test(mobile)) {
      setError(t("invalidMobile", lang));
      return;
    }

    setError("");

    navigate("/otp", { state: { mobile, fromForgot: true } });
  };

  return (
    <div
      className="forgot-page"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="forgot-overlay">
        <div className="forgot-card">

          <h2>{t("forgotTitle", lang)}</h2>

          {error && <p className="error">{error}</p>}

          <input
            type="tel"
            value={mobile}
            onChange={(e) =>
              setMobile(e.target.value.replace(/\D/g, ""))
            }
            placeholder={t("enterRegisteredMobile", lang)}
          />

          <button onClick={handleSendOtp}>
            {t("sendOtp", lang)}
          </button>

        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;