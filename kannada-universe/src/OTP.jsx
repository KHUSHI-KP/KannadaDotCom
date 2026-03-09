import { useState, useRef } from "react";
import "./Otp.css";
import background from "./assets/back.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { t } from "./i18n";

function Otp() {

  const lang = localStorage.getItem("lang") || "en";

  const navigate = useNavigate();
  const location = useLocation();

  const mobile = location.state?.mobile || "";
  const fromForgot = location.state?.fromForgot || false;

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();

      const newOtp = [...otp];

      if (newOtp[index] !== "") {
        newOtp[index] = "";
      } else if (index > 0) {
        inputs.current[index - 1].focus();
        newOtp[index - 1] = "";
      }

      setOtp(newOtp);
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      alert(t("enter6DigitOtp", lang));
      return;
    }

    if (enteredOtp === "123456") {
      navigate("/create-password", {
        state: {
          mobile,
          fromForgot
        }
      });
    } else {
      alert(t("invalidOtp", lang));
    }
  };

  return (
    <div
      className="otp-page"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="otp-overlay">
        <div className="otp-card">

          <h2>{t("otpVerification", lang)}</h2>

          <p className="otp-sub">
            {t("enterOtp", lang)} <strong>+91 {mobile}</strong>
          </p>

          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                ref={(el) => (inputs.current[index] = el)}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          <button className="verify-btn" onClick={handleVerify}>
            {t("verifyOtp", lang)}
          </button>

          <button
            className="resend-btn"
            onClick={() => alert(t("otpResent", lang))}
          >
            {t("resendOtp", lang)}
          </button>

        </div>
      </div>
    </div>
  );
}

export default Otp;