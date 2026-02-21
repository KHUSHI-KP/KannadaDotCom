import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Goals.css";

function Goals() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const [customGoal, setCustomGoal] = useState("");

  const goals = [
    { title: "Grow My Business", desc: "Increase my sales and find new customers." },
    { title: "Promote My Services", desc: "Market my services to the right audience." },
    { title: "Build Professional Network", desc: "Connect with businesses, creators, and mentors." },
    { title: "Find Collaboration Opportunities", desc: "Partner with creators and businesses." },
    { title: "Increase Social Media Reach", desc: "Expand my online visibility and followers." },
    { title: "Generate More Leads", desc: "Attract potential customers consistently." },
    { title: "Improve Customer Engagement", desc: "Build stronger relationships with customers." },
    { title: "Learn From Industry Experts", desc: "Gain knowledge and insights from professionals." },
    { title: "Discover Local Business Partners", desc: "Connect with nearby businesses." },
    { title: "Sell Products Online", desc: "Expand my business digitally." }
  ];

  const toggleGoal = (goal) => {
    if (selected.includes(goal)) {
      setSelected(selected.filter((g) => g !== goal));
    } else {
      setSelected([...selected, goal]);
    }
  };

  const handleContinue = () => {
    navigate("/success");
  };

  return (
    <div className="goals-page">
      <div className="goals-card">

        <div className="goals-header">
          <h2>Set Your Goals</h2>
          <p>Tell us what you want to achieve on this platform</p>
        </div>

        {/* Scrollable Goals */}
        <div className="goals-list">
          {goals.map((goal, index) => (
            <div
              key={index}
              className={`goal-item ${
                selected.includes(goal.title) ? "active" : ""
              }`}
              onClick={() => toggleGoal(goal.title)}
            >
              <input
                type="checkbox"
                checked={selected.includes(goal.title)}
                readOnly
              />
              <div>
                <h4>{goal.title}</h4>
                <span>{goal.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Goal */}
        <div className="custom-goal">
          <input
            type="text"
            placeholder="Write your own goal..."
            maxLength="100"
            value={customGoal}
            onChange={(e) => setCustomGoal(e.target.value)}
          />
          <span>{customGoal.length}/100</span>
        </div>

        <div className="goals-footer">
          <button className="continue-btn" onClick={handleContinue}>
            Continue
          </button>
        </div>

      </div>
    </div>
  );
}

export default Goals;