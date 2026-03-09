import { useState, useRef } from "react";
import "./Signup.css";
import background from "./assets/back.jpeg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { t } from "./i18n";

function Signup() {

  const lang = localStorage.getItem("lang") || "en";

  const [mobile, setMobile] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  const handleSendOTP = () => {
    if (!/^[0-9]{10}$/.test(mobile)) {
      alert(
        lang === "kn"
          ? "ಸರಿಯಾದ 10 ಅಂಕೆಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ"
          : "Enter valid 10 digit mobile number"
      );
      return;
    }

    navigate("/otp", { state: { mobile } });
  };

  const handleOtpChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div
      className="signup-page"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="signup-overlay">
        <div className="signup-container">

          {!showOTP ? (
            <>
              {/* PHONE CARD */}
              <div className="signup-card">

                <h2>{t("signupPhone", lang)}</h2>

                <p className="subtitle">
                  {t("enterMobile", lang)}
                </p>

                <div className="mobile-input">

                  <div className="country-box">
                    <span>🇮🇳</span>
                    <span>+91</span>
                  </div>

                  <div className="divider-line"></div>

                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) =>
                      setMobile(e.target.value.replace(/\D/g, ""))
                    }
                    maxLength="10"
                    placeholder="98367 43210"
                  />

                </div>

                <button
                  className="primary-btn"
                  onClick={handleSendOTP}
                >
                  {t("sendOtp", lang)}
                </button>

              </div>

              {/* OR DIVIDER */}
              <div className="middle-divider">
                <span>OR</span>
              </div>

              {/* SOCIAL CARD */}
              <div className="signup-card">

                <h3 className="register-email">
                  {t("registerEmail", lang)}
                </h3>

                <button
                  className="social-btn"
                  onClick={() =>
                    navigate("/social-otp", { state: { provider: "google" } })
                  }
                >
                  <FcGoogle size={22} />
                  {t("continueGoogle", lang)}
                </button>

                <button
                  className="social-btn"
                  onClick={() =>
                    navigate("/social-otp", { state: { provider: "facebook" } })
                  }
                >
                  <FaFacebookF size={18} color="#1877f2" />
                  {t("continueFacebook", lang)}
                </button>

                <button
                  className="social-btn"
                  onClick={() =>
                    navigate("/social-otp", { state: { provider: "instagram" } })
                  }
                >
                  <FaInstagram size={18} color="#e4405f" />
                  {t("continueInstagram", lang)}
                </button>

                <p className="login-link">
                  {t("alreadyHaveAccount", lang)}{" "}
                  <span onClick={() => navigate("/login")}>
                    {t("login", lang)}
                  </span>
                </p>

              </div>
            </>
          ) : (

            /* OTP SCREEN */

            <div className="signup-card otp-card">

              <h2>{t("otpVerification", lang)}</h2>

              <p className="subtitle">
                {t("enterOtp", lang)} <b>+91 {mobile}</b>
              </p>

              <div className="otp-container">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    ref={(el) => (inputRefs.current[index] = el)}
                    onChange={(e) =>
                      handleOtpChange(e.target.value, index)
                    }
                  />
                ))}
              </div>

              <button className="primary-btn">
                {t("resendOtp", lang)}
              </button>

              <p className="login-link">
                {t("havingTrouble", lang)}{" "}
                <span>{t("getHelp", lang)}</span>
              </p>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Signup;