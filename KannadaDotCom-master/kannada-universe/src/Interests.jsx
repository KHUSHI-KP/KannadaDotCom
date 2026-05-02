import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaCheck } from "react-icons/fa";
import "./Interests.css";
import { t } from "./i18n";

function Interests() {

  const lang = localStorage.getItem("lang") || "en";

  const interestsList = [
    t("retailWholesale", lang),
    t("handicrafts", lang),
    t("ecommerce", lang),
    t("manufacturing", lang),
    t("agriculture", lang),
    t("digitalMarketing", lang),
    t("socialMedia", lang),
    t("entrepreneurship", lang),
    t("professionalServices", lang),
    t("softwareIT", lang),
    t("training", lang),
    t("eventManagement", lang),
    t("restaurants", lang)
  ];

  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const toggleInterest = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  const goNext = () => {
    localStorage.setItem("interests", JSON.stringify(selected));
    navigate("/terms");
  };

  const filtered = interestsList.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="interests-page">

      <div className="interests-card">

        <h2>{t("selectInterests", lang)}</h2>

        <p>{t("interestDesc", lang)}</p>

        {/* Search */}
        <div className="search-wrapper">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder={t("searchInterests", lang)}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        {/* Interests Grid */}
        <div className="interests-grid">

          {filtered.map((item, index) => (
            <div
              key={index}
              className={`interest-item ${
                selected.includes(item) ? "selected" : ""
              }`}
              onClick={() => toggleInterest(item)}
            >

              <span className="circle">
                {selected.includes(item) && <FaCheck size={10} />}
              </span>

              {item}

            </div>
          ))}

        </div>

        <button className="continue-btn" onClick={goNext}>
          {t("continue", lang)}
        </button>

        <button className="skip-btn" onClick={goNext}>
          {t("skipNow", lang)}
        </button>

      </div>
    </div>
  );
}

export default Interests;