import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Goals.css";
import { t } from "./i18n";

function Goals() {

  const lang = localStorage.getItem("lang") || "en";

  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const [customGoal, setCustomGoal] = useState("");

  const goals = [
    { title: t("goal1", lang), desc: t("goal1Desc", lang) },
    { title: t("goal2", lang), desc: t("goal2Desc", lang) },
    { title: t("goal3", lang), desc: t("goal3Desc", lang) },
    { title: t("goal4", lang), desc: t("goal4Desc", lang) },
    { title: t("goal5", lang), desc: t("goal5Desc", lang) },
    { title: t("goal6", lang), desc: t("goal6Desc", lang) },
    { title: t("goal7", lang), desc: t("goal7Desc", lang) },
    { title: t("goal8", lang), desc: t("goal8Desc", lang) },
    { title: t("goal9", lang), desc: t("goal9Desc", lang) },
    { title: t("goal10", lang), desc: t("goal10Desc", lang) }
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

          <h2>{t("goalsTitle", lang)}</h2>

          <p>{t("goalsDesc", lang)}</p>

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
            placeholder={t("customGoal", lang)}
            maxLength="100"
            value={customGoal}
            onChange={(e) => setCustomGoal(e.target.value)}
          />

          <span>{customGoal.length}/100</span>

        </div>

        <div className="goals-footer">

          <button
            className="continue-btn"
            onClick={handleContinue}
          >
            {t("continue", lang)}
          </button>

        </div>

      </div>
    </div>
  );
}

export default Goals;