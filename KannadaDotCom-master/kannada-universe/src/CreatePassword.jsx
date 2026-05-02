import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./CreatePassword.css";
import background from "./assets/back.jpeg";
import API from "./api";
import { t } from "./i18n";

function CreatePassword() {

  const lang = localStorage.getItem("lang") || "en";

  const location = useLocation();
  const navigate = useNavigate();

  const mobile = location.state?.mobile || "";
  const fromForgot = location.state?.fromForgot || false;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // User is entering password creation - profession will be set in Welcome page after login
  }, []);

  const handleSubmit = async () => {
    setError("");

    if (password.length < 8) {
      setError(t("passwordTooShort", lang));
      return;
    }

    const specialMatches = password.match(/[@$*&]/g);
    if (!specialMatches || specialMatches.length < 2) {
      setError(t("passwordSpecial", lang));
      return;
    }

    if (password !== confirmPassword) {
      setError(t("passwordMismatch", lang));
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      setError(t("invalidMobile", lang));
      return;
    }

    try {
      if (fromForgot) {
        await API.post("/api/auth/reset-password", {
          mobile,
          password,
        });
        alert(t("passwordChanged", lang));
      } else {
        // console.log("Sending to signup API without profession");
        await API.post("/api/auth/signup", {
          mobile,
          password
        });
        alert(t("accountCreated", lang));
      }

      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Something went wrong"
      );
    }
  };

  return (
    <div
      className="create-page"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="create-overlay">
        <div className="create-card">

          <h2>{t("createPassword", lang)}</h2>
          <p>{t("forMobile", lang)} +91 {mobile}</p>

          <p className="password-rule-top">
            {t("passwordRule", lang)}
          </p>

          {/* Password Field */}
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder={t("enterNewPassword", lang)}
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
              placeholder={t("confirmPassword", lang)}
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
            {t("savePassword", lang)}
          </button>

        </div>
      </div>
    </div>
  );
}

export default CreatePassword;