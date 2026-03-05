import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import background from "./assets/back.jpeg";

function ForgotPassword() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleSendOtp = () => {
    if (!/^[0-9]{10}$/.test(mobile)) {
      setError("Enter valid 10 digit mobile number");
      return;
    }

    setError("");

    // Navigate to OTP page
    navigate("/otp", { state: { mobile, fromForgot: true } });
  };

  return (
    <div
      className="forgot-page"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="forgot-overlay">
        <div className="forgot-card">
          <h2>Reset Password</h2>

          {error && <p className="error">{error}</p>}

          <input
            type="tel"
            value={mobile}
            onChange={(e) =>
              setMobile(e.target.value.replace(/\D/g, ""))
            }
            placeholder="Enter registered mobile number"
          />

          <button onClick={handleSendOtp}>
            Send OTP
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
