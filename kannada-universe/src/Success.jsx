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
import { t } from "./i18n";

export default function Success() {

  const lang = localStorage.getItem("lang") || "en";

  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const features = [
    { icon: <FaComments />, title: t("feature1", lang), desc: t("feature1Desc", lang) },
    { icon: <FaChartLine />, title: t("feature2", lang), desc: t("feature2Desc", lang) },
    { icon: <FaHandshake />, title: t("feature3", lang), desc: t("feature3Desc", lang) },
    { icon: <FaBullhorn />, title: t("feature4", lang), desc: t("feature4Desc", lang) },
    { icon: <FaUsers />, title: t("feature5", lang), desc: t("feature5Desc", lang) },
    { icon: <FaWallet />, title: t("feature6", lang), desc: t("feature6Desc", lang) }
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

        <h2>{t("successTitle", lang)}</h2>

        <p className="subtitle">
          {t("successSubtitle", lang)}
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

        {/* Wallet */}
        <div className="wallet-box">

          <div className="wallet-left">

            <FaWallet className="wallet-icon" />

            <div>
              <h3>{t("walletTitle", lang)}</h3>

              <p>
                {t("walletDesc", lang)}
              </p>
            </div>

          </div>

          <button
            className="free-badge"
            onClick={() => navigate("/wallet")}
          >
            {t("free", lang)}
          </button>

        </div>

        {/* Start Button */}
        <button
          className="explore-btn"
          onClick={() => navigate("/dashboard")}
        >
          {t("startExplore", lang)}
        </button>

      </div>

    </div>
  );
}