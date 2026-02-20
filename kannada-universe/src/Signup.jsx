import { useState, useRef } from "react";
import "./Signup.css";
import background from "./assets/back.jpeg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [mobile, setMobile] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  const inputRefs = useRef([]);

  const handleSendOTP = () => {
    if (!/^[0-9]{10}$/.test(mobile)) {
      alert("Enter valid 10 digit mobile number");
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
                <h2>SignUp with Phone</h2>
                <p className="subtitle">
                  Enter your mobile number to continue
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

                <button className="primary-btn" onClick={handleSendOTP}>
                  Send OTP
                </button>
              </div>

              {/* OR DIVIDER */}
              <div className="middle-divider">
                <span>OR</span>
              </div>

              {/* SOCIAL CARD */}
              <div className="signup-card">
                <h3 className="register-email">
                  Register with Email
                </h3>

                <button className="social-btn">
                  <FcGoogle size={22} />
                  Continue with Google
                </button>

                <button className="social-btn">
                  <FaFacebookF size={18} color="#1877f2" />
                  Continue with Facebook
                </button>

                <button className="social-btn">
                  <FaInstagram size={18} color="#e4405f" />
                  Continue with Instagram
                </button>

                <p className="login-link">
                  Already have an account?{" "}
                  <span onClick={() => navigate("/login")}>
                    Login
                  </span>
                </p>
              </div>
            </>
          ) : (
            /* OTP SCREEN */
            <div className="signup-card otp-card">
              <h2>OTP Verification</h2>
              <p className="subtitle">
                Enter OTP received on <b>+91 {mobile}</b>
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
                Resend OTP
              </button>

              <p className="login-link">
                Having trouble? <span>Get Help</span>
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Signup;
