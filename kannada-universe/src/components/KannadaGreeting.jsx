import React from "react";

export default function KannadaGreeting() {
  const hour = new Date().getHours();

  let message = "ನಮಸ್ಕಾರ 👋";

  if (hour < 12) message = "ಶುಭೋದಯ 🌅";
  else if (hour < 18) message = "ಶುಭ ಮಧ್ಯಾಹ್ನ ☀️";
  else message = "ಶುಭ ರಾತ್ರಿ 🌙";

  return (
    <div style={{
      padding: "12px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      marginBottom: "10px"
    }}>
      <h2>{message}</h2>
      <p>Welcome to Kannada Universe</p>
    </div>
  );
}
