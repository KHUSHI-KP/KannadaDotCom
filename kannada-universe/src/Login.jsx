import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import loginBg from "./assets/back.jpeg";

function Login() {
  const navigate = useNavigate();

  const [countryCode, setCountryCode] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (countryCode === "+91" && !/^[0-9]{10}$/.test(mobile)) {
      setError("Indian mobile number must be exactly 10 digits");
      return;
    }

    if (password.trim() === "") {
      setError("Password is required");
      return;
    }

    let storedUser = JSON.parse(localStorage.getItem("user"));
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
    /*if (!storedUser) {
      setError("No account found. Please Sign Up.");
      return;
    }*/

    if (
      storedUser.mobile === mobile &&
      storedUser.password === password
    ) {
      setError("");
      navigate("/welcome");
    } else {
      setError("Mobile number or password is incorrect");
    }
  };

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="login-overlay">
        <div className="login-card">
          <h2>Login</h2>

          {error && <p className="error">{error}</p>}

          <label>Mobile Number</label>

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
              onChange={(e) =>
                setMobile(e.target.value.replace(/\D/g, ""))
              }
              placeholder="Enter mobile number"
            />
          </div>

          <label>Password*</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />

          <p className="forgot-text">
            Forgot Password?{" "}
            <span onClick={() => navigate("/forgot-password")}>
              Click Here !!
            </span>
          </p>

          <button onClick={handleLogin}>Explore</button>

          <p className="signup-text">
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")}>
              SignUp
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;