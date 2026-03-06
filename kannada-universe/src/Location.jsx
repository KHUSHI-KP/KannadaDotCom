import { useState } from "react";
import { useNavigate } from "react-router-dom";
import locationData from "./locationData";
import "./Location.css";
import { t } from "./i18n";

function Location() {

const lang = localStorage.getItem("lang") || "en";
const navigate = useNavigate();

const [district, setDistrict] = useState("");
const [taluk, setTaluk] = useState("");
const [locality, setLocality] = useState("");

const goNext = () => {
navigate("/interests");
};

const handleContinue = () => {

```
if (!district || !taluk || !locality) {
  alert(t("selectAllFields", lang));
  return;
}

localStorage.setItem(
  "location",
  JSON.stringify({ district, taluk, locality })
);

goNext();
```

};

return (

<div className="location-page">

  <div className="location-card">

    {/* Title */}
    <h2>{t("selectLocation", lang)}</h2>

    <p>{t("locationDesc", lang)}</p>


    {/* District */}
    <label>{t("district", lang)}</label>

    <select
      value={district}
      onChange={(e) => {
        setDistrict(e.target.value);
        setTaluk("");
        setLocality("");
      }}
    >

      <option value="">
        {t("selectDistrict", lang)}
      </option>

      {Object.keys(locationData).map((dist) => (
        <option key={dist} value={dist}>
          {dist}
        </option>
      ))}

    </select>


    {/* Taluk */}
    <label>{t("taluk", lang)}</label>

    <select
      value={taluk}
      onChange={(e) => {
        setTaluk(e.target.value);
        setLocality("");
      }}
      disabled={!district}
    >

      <option value="">
        {t("selectTaluk", lang)}
      </option>

      {district &&
        Object.keys(locationData[district]).map((talu) => (
          <option key={talu} value={talu}>
            {talu}
          </option>
        ))}

    </select>


    {/* Locality */}
    <label>{t("locality", lang)}</label>

    <select
      value={locality}
      onChange={(e) => setLocality(e.target.value)}
      disabled={!taluk}
    >

      <option value="">
        {t("selectLocality", lang)}
      </option>

      {district &&
        taluk &&
        locationData[district][taluk].map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}

    </select>


    {/* Buttons */}
    <div className="location-actions">

      <button
        className="continue-btn"
        onClick={handleContinue}
      >
        {t("continue", lang)}
      </button>

      <button
        className="skip-btn"
        onClick={goNext}
      >
        {t("skipNow", lang)}
      </button>

    </div>

  </div>

</div>


);
}

export default Location;
