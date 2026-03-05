import "./Success.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaChartLine,
  FaHandshake,
  FaBullhorn,
  FaWallet,
  FaComments
} from "react-icons/fa";

export default function Success() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const features = [
    { icon: <FaComments />, title: "Manage Customers", desc: "Handle chats and orders easily." },
    { icon: <FaChartLine />, title: "Track Analytics", desc: "Monitor performance insights." },
    { icon: <FaHandshake />, title: "Connect & Collaborate", desc: "Build partnerships nearby." },
    { icon: <FaBullhorn />, title: "Promote Business", desc: "Boost your visibility instantly." },
    { icon: <FaUsers />, title: "Grow Network", desc: "Expand your professional reach." },
    { icon: <FaWallet />, title: "Earn Rewards", desc: "Unlock benefits and bonuses." }
  ];

  const next = () => {
    if (index < features.length - 3) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="success-wrapper">
      <div className="success-card">

        <h2>You're all set!!!</h2>
        <p className="subtitle">
          Here are some ways to kickstart your journey.
        </p>

        {/* Carousel */}
        <div className="carousel">

          <span className="arrow" onClick={prev}>❮</span>

          <div className="viewport">
            <div
              className="slider"
              style={{ transform: `translateX(-${index * 270}px)` }}
            >
              {features.map((item, i) => (
                <div className="feature-box" key={i}>
                  <div className="feature-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <span className="arrow" onClick={next}>❯</span>

        </div>

        {/* Wallet Section */}
        <div className="wallet-box">
          <div className="wallet-left">
            <FaWallet className="wallet-icon" />
            <div>
              <h3>100 Points Wallet Credit</h3>
              <p>
                As a bonus, we've added 100 points wallet credit to your account
              </p>
            </div>
          </div>

          <button
            className="free-badge"
            onClick={() => navigate("/wallet")}
          >
            Free
          </button>
        </div>

        {/* Start Button */}
        <button
          className="explore-btn"
          onClick={() => navigate("/dashboard")}
        >
          Start Exploring
        </button>

      </div>
    </div>
  );
}