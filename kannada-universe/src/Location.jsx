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

    console.log("Selected:", district, taluk, locality);

    if (!district || !taluk || !locality) {
      alert("Please select District, Taluk and Locality");
      return;
    }

    localStorage.setItem(
      "location",
      JSON.stringify({
        district,
        taluk,
        locality
      })
    );

    navigate("/interests");

  };

  return (

    <div className="location-page">

      <div className="location-card">

        <h2>{t("selectLocation", lang)}</h2>

        <p>{t("locationDesc", lang)}</p>

        {/* District */}

        <label>{t("district", lang)}</label>

        <select
          value={district}
          onChange={(e) => {
            const value = e.target.value;
            setDistrict(value);
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
            const value = e.target.value;
            setTaluk(value);
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