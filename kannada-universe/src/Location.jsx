import { useState } from "react";
import { useNavigate } from "react-router-dom";
import locationData from "./locationData";
import "./Location.css";

function Location() {
  const navigate = useNavigate();

  const [district, setDistrict] = useState("");
  const [taluk, setTaluk] = useState("");
  const [locality, setLocality] = useState("");

  const goNext = () => {
    navigate("/interests");
  };

  const handleContinue = () => {
    if (!district || !taluk || !locality) {
      alert("Please select all fields");
      return;
    }

    localStorage.setItem(
      "location",
      JSON.stringify({ district, taluk, locality })
    );

    goNext();
  };

  return (
    <div className="location-page">
      <div className="location-card">

        <h2>Select Your Location</h2>
        <p>
          We use this to connect you with your local business community
        </p>

        {/* District */}
        <label>District</label>
        <select
          value={district}
          onChange={(e) => {
            setDistrict(e.target.value);
            setTaluk("");
            setLocality("");
          }}
        >
          <option value="">Select District</option>
          {Object.keys(locationData).map((dist) => (
            <option key={dist} value={dist}>
              {dist}
            </option>
          ))}
        </select>

        {/* Taluk */}
        <label>Taluk</label>
        <select
          value={taluk}
          onChange={(e) => {
            setTaluk(e.target.value);
            setLocality("");
          }}
          disabled={!district}
        >
          <option value="">Select Taluk</option>
          {district &&
            Object.keys(locationData[district]).map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
        </select>

        {/* Locality */}
        <label>Locality</label>
        <select
          value={locality}
          onChange={(e) => setLocality(e.target.value)}
          disabled={!taluk}
        >
          <option value="">Select Locality</option>
          {district &&
            taluk &&
            locationData[district][taluk].map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
        </select>

        <div className="location-actions">
          <button className="continue-btn" onClick={handleContinue}>
            Continue
          </button>

          <button className="skip-btn" onClick={goNext}>
            Skip for now
          </button>
        </div>

      </div>
    </div>
  );
}

export default Location;