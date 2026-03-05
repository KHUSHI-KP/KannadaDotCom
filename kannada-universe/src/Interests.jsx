import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaCheck } from "react-icons/fa";
import "./Interests.css";

const interestsList = [
  "Retail & Wholesale",
  "Handicrafts & Artisans",
  "E - Commerce",
  "Manufacturing & MSMEs",
  "Agriculture & Agri - Business",
  "Digital Marketing",
  "Social Media Content",
  "Entrepreneurship",
  "Professional Services",
  "Software & IT - Services",
  "Training",
  "Event Management",
  "Restaurants & Food Businesses"
];

function Interests() {
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

        <h2>Select Your Interests</h2>
        <p>Choose the sectors you're interested in. You can select multiple.</p>

        {/* Search */}
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search interests..."
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
          Continue
        </button>

        <button className="skip-btn" onClick={goNext}>
          Skip for now
        </button>

      </div>
    </div>
  );
}

export default Interests;