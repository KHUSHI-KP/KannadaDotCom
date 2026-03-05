import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Terms.css";

function Terms() {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="terms-page">
      <div className="terms-card">
        <div className="terms-header">
          <h2>Terms & Conditions</h2>
          <p>Please review and accept the terms below to continue.</p>
        </div>

        <div className="terms-content">
          <h4>1. Platform Usage</h4>
          <p>
            Kannada Universe is designed to connect entrepreneurs, creators,
            professionals and businesses with relevant communities and
            opportunities. Users agree to use the platform responsibly and
            in accordance with applicable laws.
          </p>

          <h4>2. Account Responsibility</h4>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account.
          </p>

          <h4>3. Acceptable Use Policy</h4>
          <p>
            Users must not post or share content that is unlawful, harmful,
            misleading, abusive, or violates the rights of others. The platform
            reserves the right to remove such content.
          </p>

          <h4>4. Privacy Policy</h4>
          <p>
            Personal information will be used only to enhance your experience
            within the platform. We do not sell user data to third parties.
          </p>

          <h4>5. Suspension & Termination</h4>
          <p>
            Kannada Universe reserves the right to suspend or terminate
            accounts that violate these terms without prior notice.
          </p>

          <h4>6. Updates to Terms</h4>
          <p>
            These terms may be updated periodically. Continued use of the
            platform after updates indicates acceptance of revised terms.
          </p>
        </div>

        <div className="terms-footer">
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
            I agree to the Terms & Conditions
          </label>

          <button
            className="terms-btn"
            disabled={!agreed}
            onClick={() => navigate("/social")}
          >
            Accept & Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Terms;