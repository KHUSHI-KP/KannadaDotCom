import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import Signup from "./Signup";
import OTP from "./OTP";
import CreatePassword from "./CreatePassword";
import Welcome from "./Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/create-password" element={<CreatePassword />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
   <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}

export default App;
