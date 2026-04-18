import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import loginBg from "./assets/back.jpeg";
import { t } from "./i18n";

function Login() {
  const lang = localStorage.getItem("lang") || "en";
  const navigate = useNavigate();

  const [countryCode, setCountryCode] = useState("+91");
  const [identifier, setIdentifier] = useState(""); // phone OR email
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
    const isPhone = /^[0-9]{10}$/.test(identifier);

    if (!isEmail && !isPhone) {
      setError("Enter valid mobile number or email");
      return;
    }

    if (password.trim() === "") {
      setError(t("passwordRequired", lang));
      return;
    }

    let storedUser = JSON.parse(localStorage.getItem("user"));

    // Dummy user if none exists
    if (!storedUser) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          mobile: "7894561234",
          email: "demo@gmail.com",
          password: "Demo@12*",
        })
      );

      storedUser = JSON.parse(localStorage.getItem("user"));
    }

    if (
      (storedUser.mobile === identifier ||
        storedUser.email === identifier) &&
      storedUser.password === password
    ) {
      setError("");
      navigate("/welcome");
    } else {
      setError(t("incorrectLogin", lang));
    }
  };

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="login-overlay">
        <div className="login-card">
          <h2>{t("login", lang)}</h2>

          {error && <p className="error">{error}</p>}

          <label>Mobile Number / Email</label>

          <div className="mobile-input">
            {/* Hide country code if email */}
            {!identifier.includes("@") && (
              <select
                className="country-select"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+971">🇦🇪 +971</option>
              </select>
            )}

            <input
              type={identifier.includes("@") ? "email" : "tel"}
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="Enter mobile number or email"
            />
          </div>

          <label>Password*</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t("passwordPlaceholder", lang)}
          />

          <p className="forgot-text">
            {t("forgotPassword", lang)}{" "}
            <span onClick={() => navigate("/forgot-password")}>
              {t("clickHere", lang)}
            </span>
          </p>

          <button onClick={handleLogin}>
            {t("explore", lang)}
          </button>

          <p className="signup-text">
            {t("signupPrompt", lang)}{" "}
            <span onClick={() => navigate("/signup")}>
              {t("signupLink", lang)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;