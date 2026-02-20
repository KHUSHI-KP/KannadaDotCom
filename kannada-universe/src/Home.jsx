import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import background from "./assets/background.jpeg";
import logo from "./assets/logo.png";

function Home() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      title: "Your Kannada Universe",
      subtitle: "Our Language, Our Emotion",
      tagline: "One platform for everything Kannada",
      emotion: "Connecting every Kannadiga across the world 🌍",
      choose: "Choose Language",
      signup: "Sign Up",
      login: "Login",
      footer: "Official Karnataka Digital Business Platform",
      features: [
        {
          title: "News & Updates",
          desc: "Stay updated with Karnataka news and trends.",
          link: "https://publictv.in/"
        },
        {
          title: "Learn Kannada",
          desc: "Interactive lessons and cultural resources.",
          link: "https://kannada.cc/"
        },
        {
          title: "Local Businesses",
          desc: "Support and explore Kannada entrepreneurs.",
          link: "https://fastkannada.com/small-business-ideas-in-kannada/"
        }
      ]
    },
    kn: {
      title: "ನಿಮ್ಮ ಕನ್ನಡ ವಿಶ್ವ",
      subtitle: "ನಮ್ಮ ಭಾಷೆ, ನಮ್ಮ ಭಾವನೆ",
      tagline: "ಎಲ್ಲಾ ಕನ್ನಡಕ್ಕಾಗಿ ಒಂದೇ ವೇದಿಕೆ",
      emotion: "ಪ್ರಪಂಚದಾದ್ಯಂತ ಕನ್ನಡಿಗರನ್ನು ಸಂಪರ್ಕಿಸುತ್ತಿದೆ 🌍",
      choose: "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ",
      signup: "ಸೈನ್ ಅಪ್",
      login: "ಲಾಗಿನ್",
      footer: "ಕರ್ನಾಟಕ ಅಧಿಕೃತ ಡಿಜಿಟಲ್ ವ್ಯವಹಾರ ವೇದಿಕೆ",
      features: [
        {
          title: "ಸುದ್ದಿಗಳು",
          desc: "ಕರ್ನಾಟಕದ ಇತ್ತೀಚಿನ ಸುದ್ದಿಗಳು.",
          link: "https://publictv.in/"
        },
        {
          title: "ಕನ್ನಡ ಕಲಿಕೆ",
          desc: "ಕನ್ನಡ ಕಲಿಯಲು ಸಂವಹನಾತ್ಮಕ ಪಾಠಗಳು.",
          link: "https://kannada.cc/"
        },
        {
          title: "ಸ್ಥಳೀಯ ವ್ಯವಹಾರಗಳು",
          desc: "ಕನ್ನಡ ಉದ್ಯಮಿಗಳನ್ನು ಬೆಂಬಲಿಸಿ.",
          link: "https://fastkannada.com/small-business-ideas-in-kannada/"
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <div
      className="app"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* HEADER */}
      <header>
        <img src={logo} alt="logo" className="logo" />

        <div className="nav-buttons">
          <button onClick={() => navigate("/signup")}>
            {t.signup}
          </button>
          <button onClick={() => navigate("/login")}>
            {t.login}
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="left">
          <h1>{t.title}</h1>
          <h3>{t.subtitle}</h3>
          <p>{t.tagline}</p>
          <p className="emotion-line">{t.emotion}</p>
        </div>

        <div className="language-box">
          <h2>{t.choose}</h2>
          <button onClick={() => setLanguage("kn")}>
            ಕನ್ನಡ
          </button>
          <button onClick={() => setLanguage("en")}>
            English
          </button>
        </div>
      </section>

      {/* FLOATING KANNADA WORDS */}
      <div className="floating-words">
        <span>ಕನ್ನಡ</span> <span>ಸಂಸ್ಕೃತಿ</span> <span>ಪರಂಪರೆ</span> <span>ಕರ್ನಾಟಕ</span> <span>ಕನ್ನಡಿಗ</span> <span>ಸಾಹಿತ್ಯ</span> <span>ಕಲೆ</span> <span>ಹೆಮ್ಮೆ</span> <span>ಕನ್ನಡ</span> <span>ಸಂಸ್ಕೃತಿ</span> <span>ವ್ಯವಹಾರ</span> <span>ಉದ್ಯಮ</span> <span>ಆರ್ಥಿಕತೆ</span> <span>ಮಾರಾಟ</span> <span>ಸೇವೆ</span> <span>ಹೂಡಿಕೆ</span> <span>ಉದ್ಯೋಗ</span> <span>ಸ್ಟಾರ್ಟ್‌ಅಪ್</span>
      </div>

      {/* FEATURE CARDS WITH EXTERNAL LINKS */}
      <section className="features">
        {t.features.map((feature, index) => (
          <a
            key={index}
            href={feature.link}
            target="_blank"
            rel="noopener noreferrer"
            className="feature-link"
          >
            <div className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          </a>
        ))}
      </section>

      <footer>{t.footer}</footer>
    </div>
  );
}

export default Home;
