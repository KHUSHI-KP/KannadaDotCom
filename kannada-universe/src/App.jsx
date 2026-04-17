
import { Routes, Route } from "react-router-dom";

/* Auth + onboarding pages */
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
import SocialOtp from "./SocialOtp";

/* Dashboard pages */
import Dashboard from "./dashboard/Dashboard";
import HomeFeed from "./dashboard/HomeFeed";
import Explore from "./dashboard/Explore";
import Trending from "./dashboard/Trending";
import Business from "./dashboard/Business";
import Inbox from "./dashboard/Inbox";
import Hashtags from "./dashboard/Hashtags";
import Posts from "./dashboard/Posts";
import CreatePage from "./dashboard/CreatePage";
import Portfolio from "./dashboard/Portfolio";
import Learn from "./dashboard/Learn";

function App() {
  return (
    <Routes>

      {/* ===== AUTH ROUTES ===== */}

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/create-password" element={<CreatePassword />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* ===== ONBOARDING FLOW ===== */}

      <Route path="/welcome" element={<Welcome />} />
      <Route path="/location" element={<Location />} />
      <Route path="/interests" element={<Interests />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/social" element={<Social />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/success" element={<Success />} />
      <Route path="/social-otp" element={<SocialOtp />} />

      {/* ===== DASHBOARD ROUTES ===== */}

      <Route path="/dashboard/*" element={<Dashboard />}>
        <Route index element={<HomeFeed />} />
        <Route path="explore" element={<Explore />} />
        <Route path="trending" element={<Trending />} />
        <Route path="business/:id" element={<Business />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="create" element={<CreatePage />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="learn" element={<Learn />} />
        {/* <Route path="leads" element={<Leads />} /> */}
        <Route path="hashtags" element={<Hashtags />} />
        <Route path="posts" element={<Posts />} />
        {/* <Route path="analytics" element={<Analytics />} /> */}
      </Route>

    </Routes>
  );
}

export default App;
