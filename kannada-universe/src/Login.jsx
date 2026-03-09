import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import loginBg from "./assets/back.jpeg";
import { t } from "./i18n";

function Login() {

  const lang = localStorage.getItem("lang") || "en";

  const navigate = useNavigate();

  const [countryCode, setCountryCode] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (countryCode === "+91" && !/^[0-9]{10}$/.test(mobile)) {
      setError(t("invalidMobile", lang));
      return;
    }

    if (password.trim() === "") {
      setError(t("passwordRequired", lang));
      return;
    }

    let storedUser = JSON.parse(localStorage.getItem("user"));
<<<<<<< HEAD
    if (!storedUser) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          mobile: "7894561234",
          password: "Demo@12*",
        }),
      );

      storedUser = JSON.parse(localStorage.getItem("user"));
    }
    /*if (!storedUser) {
      setError("No account found. Please Sign Up.");
      return;
    }*/ 7894561234;
=======

    if (!storedUser) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          mobile: "7894561234",
          password: "Demo@12*"
        })
      );

      storedUser = JSON.parse(localStorage.getItem("user"));
    }
>>>>>>> 58b97abb330a1d1a1f2c48a2f4e4fc18f3977aff

    if (storedUser.mobile === mobile && storedUser.password === password) {
      setError("");
      navigate("/welcome");
    } else {
      setError(t("incorrectLogin", lang));
    }
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url(${loginBg})` }}>
      <div className="login-overlay">
        <div className="login-card">

          <h2>{t("login", lang)}</h2>

          {error && <p className="error">{error}</p>}

          <label>{t("mobileLabel", lang)}</label>

          <div className="mobile-input">

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

            <input
              type="tel"
              value={mobile}
<<<<<<< HEAD
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
              placeholder="Enter mobile number"
=======
              onChange={(e) =>
                setMobile(e.target.value.replace(/\D/g, ""))
              }
              placeholder={t("mobilePlaceholder", lang)}
>>>>>>> 58b97abb330a1d1a1f2c48a2f4e4fc18f3977aff
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
<<<<<<< HEAD
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")}>SignUp</span>
=======
            {t("signupPrompt", lang)}{" "}
            <span onClick={() => navigate("/signup")}>
              {t("signupLink", lang)}
            </span>
>>>>>>> 58b97abb330a1d1a1f2c48a2f4e4fc18f3977aff
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;
