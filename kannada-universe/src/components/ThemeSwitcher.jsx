import React, { useState } from "react";

export default function ThemeSwitcher() {
  const [dark, setDark] = useState(false);

  const style = {
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginBottom: "10px",
    backgroundColor: dark ? "#222" : "#fff",
    color: dark ? "#fff" : "#000",
    transition: "0.3s"
  };

  return (
    <div style={style}>
      <h2>Theme Switcher</h2>
      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
}
