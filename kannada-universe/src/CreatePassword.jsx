import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./CreatePassword.css";
import background from "./assets/back.jpeg";

function CreatePassword() {
  const location = useLocation();
  const navigate = useNavigate();

  const mobile = location.state?.mobile || "";
  const fromForgot = location.state?.fromForgot || false;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");

    // 🔹 Length check
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // 🔹 Special character check
    const specialMatches = password.match(/[@$*&]/g);
    if (!specialMatches || specialMatches.length < 2) {
      setError(
        "Password must contain at least 2 special characters (@, $, *, &)."
      );
      return;
    }

    // 🔹 Match check
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // 🔥 Save user in localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({
        mobile,
        password
      })
    );

    // 🔹 Success message
    if (fromForgot) {
      alert("Password changed successfully!");
    } else {
      alert("Account created successfully!");
    }

    navigate("/login");
  };

  return (
    <div
      className="create-page"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="create-overlay">
        <div className="create-card">

          <h2>Create New Password</h2>
          <p>For +91 {mobile}</p>

          <p className="password-rule-top">
            Password must be at least 8 characters and contain
            at least 2 special characters (@, $, *, &)
          </p>

          {/* Password Field */}
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="password-wrapper">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              className="eye-icon"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {error && <p className="error-msg">{error}</p>}

          <button onClick={handleSubmit}>
            Save Password
          </button>

        </div>
      </div>
    </div>
  );
}

export default CreatePassword;