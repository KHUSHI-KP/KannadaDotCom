import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Terms.css";
import { t } from "./i18n";

function Terms() {

  const lang = localStorage.getItem("lang") || "en";

  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="terms-page">

      <div className="terms-card">

        <div className="terms-header">
          <h2>{t("termsTitle", lang)}</h2>
          <p>{t("termsDesc", lang)}</p>
        </div>

        <div className="terms-content">

          <h4>{t("term1Title", lang)}</h4>
          <p>{t("term1Text", lang)}</p>

          <h4>{t("term2Title", lang)}</h4>
          <p>{t("term2Text", lang)}</p>

          <h4>{t("term3Title", lang)}</h4>
          <p>{t("term3Text", lang)}</p>

          <h4>{t("term4Title", lang)}</h4>
          <p>{t("term4Text", lang)}</p>

          <h4>{t("term5Title", lang)}</h4>
          <p>{t("term5Text", lang)}</p>

          <h4>{t("term6Title", lang)}</h4>
          <p>{t("term6Text", lang)}</p>

        </div>

        <div className="terms-footer">

          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
            {t("agreeTerms", lang)}
          </label>

          <button
            className="terms-btn"
            disabled={!agreed}
            onClick={() => navigate("/social")}
          >
            {t("acceptContinue", lang)}
          </button>

        </div>

      </div>
    </div>
  );
}

export default Terms;