import { useState, useRef } from "react";
import "./Otp.css";
import background from "./assets/back.jpeg";
import { useNavigate, useLocation } from "react-router-dom";

function SocialOtp() {
  const navigate = useNavigate();
  const location = useLocation();

  const provider = location.state?.provider || "google";

  const [step, setStep] = useState("email");
  const [credential, setCredential] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const inputs = useRef([]);

  // 🔹 SEND OTP
  const handleSendOtp = () => {
    const value = credential.trim();

    if (!value) {
      alert("Please enter email or username");
      return;
    }

    // ✅ Declare REGEX ONLY ONCE
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9._]{3,}$/;

    // 🔹 Google → Only Gmail
    if (provider === "google") {
      if (!gmailRegex.test(value)) {
        alert("Enter valid Gmail address (example@gmail.com)");
        return;
      }
    }

    // 🔹 Facebook & Instagram → Email OR Username
    if (provider === "facebook" || provider === "instagram") {
      if (!emailRegex.test(value) && !usernameRegex.test(value)) {
        alert("Enter valid email or username");
        return;
      }
    }

    alert(`OTP sent to ${value}`);
    setStep("otp");
  };

  // 🔹 OTP INPUT CHANGE
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  // 🔹 BACKSPACE SUPPORT
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (newOtp[index] === "" && index > 0) {
        inputs.current[index - 1].focus();
      } else {
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  // 🔹 VERIFY OTP
  const handleVerify = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      alert("Enter 6 digit OTP");
      return;
    }

    // Fake OTP
    if (enteredOtp === "123456") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          loginType: provider,
          credential: credential,
        })
      );

      localStorage.setItem("isLoggedIn", "true");

      navigate("/welcome");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div
      className="otp-page"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="otp-overlay">
        <div className="otp-card">
          {step === "email" ? (
            <>
              <h2>
                Continue with{" "}
                {provider.charAt(0).toUpperCase() + provider.slice(1)}
              </h2>

              <p className="otp-sub">
                {provider === "google"
                  ? "Enter your Gmail address to receive OTP"
                  : "Enter your email or username to receive OTP"}
              </p>

              <input
                type="text"
                className="email-input"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                placeholder={
                  provider === "google"
                    ? "Enter Gmail address"
                    : "Enter email or username"
                }
              />

              <button className="verify-btn" onClick={handleSendOtp}>
                Send OTP
              </button>
            </>
          ) : (
            <>
              <h2>OTP Verification</h2>

              <p className="otp-sub">
                Enter OTP sent to <strong>{credential}</strong>
              </p>

              <div className="otp-inputs">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    ref={(el) => (inputs.current[index] = el)}
                    onChange={(e) =>
                      handleChange(e.target.value, index)
                    }
                    onKeyDown={(e) =>
                      handleKeyDown(e, index)
                    }
                  />
                ))}
              </div>

              <button className="verify-btn" onClick={handleVerify}>
                Verify OTP
              </button>

              <button
                className="resend-btn"
                onClick={() => alert("OTP Resent!")}
              >
                Resend OTP
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SocialOtp;