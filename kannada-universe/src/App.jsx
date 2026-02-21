import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import Signup from "./Signup";
import OTP from "./OTP";
import CreatePassword from "./CreatePassword";
import Welcome from "./Welcome";
import Location from "./Location";
import Interests from "./Interests";
import Terms from "./Terms";
import Social from "./Social";
import Goals from "./Goals";
import Success from "./Success";



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
      
      {/* NEW ROUTES */}
      <Route path="/location" element={<Location />} />
      <Route path="/interests" element={<Interests />} />
      <Route path="/terms" element={<Terms />} />
<Route path="/social" element={<Social />} />
<Route path="/goals" element={<Goals />} />
<Route path="/success" element={<Success />} />

    </Routes>
  );
}

export default App;