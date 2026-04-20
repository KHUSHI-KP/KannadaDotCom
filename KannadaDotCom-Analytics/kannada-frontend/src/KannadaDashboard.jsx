import { useState, useEffect } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
  PieChart, Pie, Cell,
} from "recharts";

// ─── API SERVICE ──────────────────────────────────────────────
const BASE = "http://localhost:5000/api";
const api = {
  overview:    () => fetch(`${BASE}/analytics/overview`).then(r => r.json()),
  chart:   (d) => fetch(`${BASE}/analytics/chart?days=${d}`).then(r => r.json()),
  performance: () => fetch(`${BASE}/analytics/performance`).then(r => r.json()),
  leads:       () => fetch(`${BASE}/leads`).then(r => r.json()),
  sources:     () => fetch(`${BASE}/leads/sources`).then(r => r.json()),
  hashtags:    () => fetch(`${BASE}/hashtags`).then(r => r.json()),
  tasks:       () => fetch(`${BASE}/tasks`).then(r => r.json()),
  tip:         () => fetch(`${BASE}/tips/latest`).then(r => r.json()),
};

const PIE_COLORS = ["#c084fc", "#a5b4fc", "#fcd34d"];

// ─── TRANSLATIONS ─────────────────────────────────────────────
const T = {
  en: {
    greeting:        "Hello! 👋 Here's your business performance overview.",
    search:          "Hello 👋",
    searchBtn:       "Search",
    audienceGrowth:  "Audience Growth",
    audienceVal:     (v) => `+${v?.toLocaleString()} Leads`,
    audienceSub:     (p) => `+${p}% this week`,
    reach:           "Reach",
    reachVal:        (v) => `+${v?.toLocaleString()} Reach`,
    reachSub:        (p) => `+${p}% this week`,
    revenue:         "Revenue",
    revenueVal:      (v) => `₹${v?.toLocaleString()} LRash`,
    revenueSub:      (p) => `+${p}% this week`,
    analyticsTitle:  "Analytics Overview",
    last7:           "Last 7 Days",
    last30:          "Last 30 Days",
    perfTitle:       "Performance Summary",
    clicks:          "Clicks",
    messages:        "Messages",
    conversations:   "Conversations",
    viewAll:         "View All >",
    leadSource:      "Leads by Source",
    manageCampaigns: "Manage Campaigns >",
    hashtagsTitle:   "Popular Hashtags",
    seeAll:          "See All >",
    growthTips:      "Growth Tips for your Business",
    recentLeads:     "Recent Leads",
    newInquiry:      "New Inquiry from Bengaluru",
    markDone:        "Mark as Done",
    inquiries:       "Inquiries",
    campaigns:       "Campaigns",
    referrals:       "Referrals",
    tipBadge:        "TIP",
  },
  kn: {
    greeting:        "ನಮಸ್ಕಾರ! 👋 ಇಲ್ಲಿದೆ ನಿಮ್ಮ ವ್ಯವಹಾರದ ಕಾರ್ಯಕ್ಷಮತಾ ವಿವರ.",
    search:          "ನಮಸ್ಕಾರ 👋",
    searchBtn:       "ಹುಡುಕಿ",
    audienceGrowth:  "ಪ್ರೇಕ್ಷಕರ ಬೆಳವಣಿಗೆ",
    audienceVal:     (v) => `+${v?.toLocaleString()} ಸಾಧ್ಯ ಗ್ರಾಹಕರು`,
    audienceSub:     (p) => `ಈ ವಾರ +${p}%`,
    reach:           "ತಲುಪುವಿಕೆ",
    reachVal:        (v) => `+${v?.toLocaleString()} ತಲುಪುವಿಕೆ`,
    reachSub:        (p) => `ಈ ವಾರ +${p}%`,
    revenue:         "ಆದಾಯ",
    revenueVal:      (v) => `₹${v?.toLocaleString()} ಆದಾಯ`,
    revenueSub:      (p) => `ಈ ವಾರ +${p}%`,
    analyticsTitle:  "ವಿಶ್ಲೇಷಣೆಯ ಅವಲೋಕನ",
    last7:           "ಕೊನೆಯ 7 ದಿನಗಳು",
    last30:          "ಕೊನೆಯ 30 ದಿನಗಳು",
    perfTitle:       "ಕಾರ್ಯಕ್ಷಮತಾ ಸಾರಾಂಶ",
    clicks:          "ಕ್ಲಿಕ್‌ಗಳು",
    messages:        "ಸಂದೇಶಗಳು",
    conversations:   "ಸಂಭಾಷಣೆಗಳು",
    viewAll:         "ಎಲ್ಲವನ್ನು ವೀಕ್ಷಿಸಿ >",
    leadSource:      "ಮೂಲದ ಪ್ರಕಾರ ಲೀಡ್ಸ್",
    manageCampaigns: "ಕ್ಯಾಂಪೇನ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸಿ >",
    hashtagsTitle:   "ಜನಪ್ರಿಯ ಹ್ಯಾಶ್‌ಟ್ಯಾಗ್‌ಗಳು",
    seeAll:          "ಎಲ್ಲವನ್ನು ನೋಡಿ >",
    growthTips:      "ನಿಮ್ಮ ವ್ಯವಹಾರಕ್ಕಾಗಿ ಬೆಳವಣಿಗೆ ಸಲಹೆಗಳು",
    recentLeads:     "ಇತ್ತೀಚಿನ ಲೀಡ್ಸ್",
    newInquiry:      "ಬೆಂಗಳೂರಿನಿಂದ ಹೊಸ ವಿಚಾರಣೆ",
    markDone:        "ಪೂರ್ಣಗೊಂಡಂತೆ ಗುರುತಿಸಿ",
    inquiries:       "ವಿಚಾರಣೆಗಳು",
    campaigns:       "ಕ್ಯಾಂಪೇನ್‌ಗಳು",
    referrals:       "ಉಲ್ಲೇಖಗಳು",
    tipBadge:        "ಸಲಹೆ",
  },
};

const LEAD_DESC = {
  en: ["Interested in bulk order", "Asking for pricing", "Wants catalogue"],
  kn: ["ದೊಡ್ಡ ಪ್ರಮಾಣದ ಆದೇಶಕ್ಕೆ ಆಸಕ್ತಿ", "ಬೆಲೆ ವಿವರಗಳನ್ನು ಕೇಳುತ್ತಿದ್ದಾರೆ", "ಕ್ಯಾಟಲಾಗ್ ಬೇಕಾಗಿದೆ"],
};

const TASK_LABELS = {
  en: ["Saraswati Boutique", "Respond to Business Inquiries"],
  kn: ["ಸರಸ್ವತಿ ಬುಟೀಕ್", "ವ್ಯವಹಾರ ಸಂಬಂಧಿತ ವಿಚಾರಣೆಗಳಿಗೆ ಪ್ರತಿಕ್ರಿಯಿಸಿ"],
};

const TASK_SUBS = {
  en: [null, "Follow up with 3 new leads"],
  kn: [null, "3 ಹೊಸ ಲೀಡ್ಸ್‌ಗಳೊಂದಿಗೆ ಫಾಲೋ ಅಪ್ ಮಾಡಿ"],
};

const HASHTAGS_KN = ["#ಬೆಂಗಳೂರುವ್ಯವಹಾರ", "#ಟ್ರೆಂಡಿಂಗ್", "#ಸಣ್ಣವ್ಯವಹಾರ", "#ಪರಿಸರಸ್ನೇಹಿ", "#ವ್ಯಾಪಾರಸಹಭಾಗಿ", "#ಯಶಸ್ಸು"];
const CHIPS_EN = ["#Offer", "#Success", "#EcoFriendly"];
const CHIPS_KN = ["#ಆಫರ್", "#ಯಶಸ್ಸು", "#ಪರಿಸರಸ್ನೇಹಿ"];

const TIP_KN = {
  title:   "ಸಾಮಾಜಿಕ ಹಾಜರಾತಿಯನ್ನು ಹೆಚ್ಚಿಸಿ",
  message: "ಹೆಚ್ಚಿನ ಗ್ರಾಹಕರನ್ನು ತಲುಪಲು ನಿಮ್ಮ ಇತ್ತೀಚಿನ ಪೋಸ್ಟ್ ಅನ್ನು ಈಗ ಉತ್ತೇಜಿಸಿ.",
  cta:     "ಪೋಸ್ಟ್ ಉತ್ತೇಜಿಸಿ",
};

// ─── SKELETON ─────────────────────────────────────────────────
function Skeleton({ w = "100%", h = 20, r = 8 }) {
  return (
    <div style={{ width: w, height: h, borderRadius: r, background: "linear-gradient(90deg,#f3f4f6 25%,#e5e7eb 50%,#f3f4f6 75%)", backgroundSize: "200% 100%", animation: "shimmer 1.4s infinite" }} />
  );
}

// ─── STAT CARD ────────────────────────────────────────────────
function StatCard({ icon, title, value, sub, color, bg, loading }) {
  return (
    <div style={{ background: bg, border: `1.5px solid ${color}33`, borderRadius: 14, padding: "16px 18px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", transition: "all 0.2s ease" }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)"; }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <span style={{ fontSize: 20 }}>{icon}</span>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#4b5563" }}>{title}</span>
      </div>
      {loading ? <Skeleton h={18} /> : <div style={{ fontSize: 16, fontWeight: 700, color: "#1c1917" }}>{value}</div>}
      {loading
        ? <div style={{ marginTop: 6 }}><Skeleton h={13} w="60%" /></div>
        : <div style={{ fontSize: 12, fontWeight: 600, color, marginTop: 4 }}>{sub}</div>}
    </div>
  );
}

// ─── LANGUAGE TOGGLE ──────────────────────────────────────────
function LangToggle({ lang, setLang }) {
  return (
    <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.15)", borderRadius: 22, padding: "3px 4px", gap: 2 }}>
      {[
        { code: "en", label: "EN" },
        { code: "kn", label: "ಕನ್ನಡ" },
      ].map(({ code, label }) => (
        <button key={code} onClick={() => setLang(code)} style={{
          padding: "5px 14px", borderRadius: 18, border: "none", cursor: "pointer",
          fontFamily: code === "kn" ? "'Noto Sans Kannada', sans-serif" : "'Poppins', sans-serif",
          fontSize: 13, fontWeight: 600,
          background: lang === code ? "#fff" : "transparent",
          color: lang === code ? "#78350f" : "#fde68a",
          boxShadow: lang === code ? "0 1px 4px rgba(0,0,0,0.15)" : "none",
          transition: "all 0.2s",
        }}>
          {label}
        </button>
      ))}
    </div>
  );
}

// ─── MAIN DASHBOARD ───────────────────────────────────────────
export default function Dashboard() {
  const [lang, setLang]               = useState("en");
  const [tab, setTab]                 = useState(7);
  const [overview, setOverview]       = useState(null);
  const [chart, setChart]             = useState([]);
  const [perf, setPerf]               = useState(null);
  const [leads, setLeads]             = useState([]);
  const [sources, setSources]         = useState([]);
  const [hashtags, setHashtags]       = useState([]);
  const [tasks, setTasks]             = useState([]);
  const [tip, setTip]                 = useState(null);
  const [loading, setLoading]         = useState(true);
  const [chartLoading, setChartLoading] = useState(false);
  const [error, setError]             = useState(null);

  const t = T[lang];
  const kf = lang === "kn"
    ? "'Noto Sans Kannada', 'Poppins', sans-serif"
    : "'Poppins', sans-serif";

  // Initial data load
  useEffect(() => {
    setLoading(true); setError(null);
    Promise.all([
      api.overview(), api.chart(7), api.performance(),
      api.leads(), api.sources(), api.hashtags(), api.tasks(), api.tip(),
    ])
      .then(([ov, ch, pf, ld, sr, ht, tk, tp]) => {
        setOverview(ov); setChart(ch); setPerf(pf);
        setLeads(ld); setSources(sr); setHashtags(ht); setTasks(tk); setTip(tp);
      })
      .catch(() => setError("Cannot connect to backend. Is server.js running on port 5000?"))
      .finally(() => setLoading(false));
  }, []);

  // Re-fetch chart on tab change
  useEffect(() => {
    setChartLoading(true);
    api.chart(tab).then(setChart).finally(() => setChartLoading(false));
  }, [tab]);

  return (
    <div style={{ fontFamily: kf, background: "linear-gradient(135deg,#fff8f0,#fef3c7,#fde8d8)", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Noto+Sans+Kannada:wght@400;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        @keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
        @keyframes spin{to{transform:rotate(360deg)}}
        .hashtag-row:hover{background:#fef3c7!important;cursor:pointer}
        .lead-row:hover{background:#fef9ee!important;cursor:pointer}
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{ background: "linear-gradient(90deg,#78350f,#92400e 60%,#b45309)", padding: "12px 28px", display: "flex", alignItems: "center", gap: 16, boxShadow: "0 4px 16px rgba(120,53,15,0.3)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
  <img
    src="/logo.jpeg"
    alt="Kannada Logo"
    style={{
      height: 48,
      width: "auto",
      objectFit: "contain",
      cursor: "pointer"
    }}
  />
</div>
        <div style={{ flex: 1, display: "flex" }}>
          <div style={{ flex: 1, display: "flex", alignItems: "center", background: "#fff", borderRadius: "8px 0 0 8px", padding: "0 14px" }}>
            <span style={{ marginRight: 8, color: "#9ca3af" }}>🔍</span>
            <input placeholder={t.search} style={{ border: "none", outline: "none", width: "100%", fontFamily: kf, fontSize: 14, background: "transparent" }} />
          </div>
          <button style={{ background: "#78350f", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "0 8px 8px 0", fontFamily: kf, fontWeight: 600, fontSize: 14, cursor: "pointer" }}>{t.searchBtn}</button>
        </div>

        {/* 🌐 LANGUAGE TOGGLE */}
        <LangToggle lang={lang} setLang={setLang} />

        {["👤", "🔔"].map(ic => (
          <div key={ic} style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, cursor: "pointer" }}>{ic}</div>
        ))}
      </nav>

      <div style={{ padding: "20px 24px" }}>
        {error && (
          <div style={{ background: "#fef2f2", border: "1.5px solid #fca5a5", borderRadius: 12, padding: "12px 18px", marginBottom: 16, color: "#991b1b", fontSize: 14, fontWeight: 500 }}>⚠️ {error}</div>
        )}

        {/* Greeting */}
        <div style={{ background: "linear-gradient(90deg,rgba(251,191,36,0.3),rgba(253,186,116,0.2))", border: "1.5px solid #fbbf24", borderRadius: 12, padding: "13px 20px", marginBottom: 18, fontSize: 15, fontWeight: 600, color: "#78350f" }}>
          {t.greeting}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 295px", gap: 20 }}>
          {/* ── LEFT COLUMN ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* Stat Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 13 }}>
              <StatCard icon="📣" title={t.audienceGrowth}
                value={overview ? t.audienceVal(overview.audienceGrowth) : ""}
                sub={overview ? t.audienceSub(overview.audienceGrowthPercent) : ""}
                color="#7c3aed" bg="#f5f3ff" loading={loading} />
              <StatCard icon="👁️" title={t.reach}
                value={overview ? t.reachVal(overview.reach) : ""}
                sub={overview ? t.reachSub(overview.reachPercent) : ""}
                color="#0891b2" bg="#ecfeff" loading={loading} />
              <StatCard icon="💰" title={t.revenue}
                value={overview ? t.revenueVal(overview.revenue) : ""}
                sub={overview ? t.revenueSub(overview.revenuePercent) : ""}
                color="#16a34a" bg="#f0fdf4" loading={loading} />
            </div>

            {/* Analytics Chart */}
            <div style={{ background: "#fff", borderRadius: 14, padding: "16px 18px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1.5px solid #fef3c7" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#1c1917" }}>{t.analyticsTitle}</span>
                {[7, 30].map(d => (
                  <button key={d} onClick={() => setTab(d)} style={{
                    padding: "4px 13px", borderRadius: 6, border: "none", cursor: "pointer",
                    fontFamily: kf, fontSize: 12, fontWeight: 600,
                    background: tab === d ? "#78350f" : "#f3f4f6",
                    color: tab === d ? "#fff" : "#6b7280", transition: "all 0.2s",
                  }}>{d === 7 ? t.last7 : t.last30}</button>
                ))}
                {chartLoading && <div style={{ width: 16, height: 16, border: "2px solid #fbbf24", borderTop: "2px solid transparent", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 215px", gap: 14 }}>
                <ResponsiveContainer width="100%" height={175}>
                  <LineChart data={chart}>
                    <XAxis dataKey="day" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} width={40} />
                    <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
                    <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
                    <Line type="monotone" dataKey="engagement" stroke="#c084fc" strokeWidth={2} dot={false} name="Engagement" />
                    <Line type="monotone" dataKey="reach"      stroke="#a5b4fc" strokeWidth={2} dot={false} name="Reach" />
                    <Line type="monotone" dataKey="leads"      stroke="#4ade80" strokeWidth={2} dot={{ r: 3 }} name="Leads" />
                    <Line type="monotone" dataKey="revenue"    stroke="#fbbf24" strokeWidth={2} dot={false} name="Revenue" />
                  </LineChart>
                </ResponsiveContainer>
                <div style={{ background: "#fafaf9", border: "1.5px solid #e7e5e4", borderRadius: 12, padding: "12px 14px" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#1c1917", marginBottom: 12 }}>{t.perfTitle}</div>
                  {loading
                    ? [1,2,3].map(i => <div key={i} style={{ marginBottom: 10 }}><Skeleton h={14} /></div>)
                    : perf && [
                      { label: t.clicks,        val: perf.clicks.value,        icon: "🖱️" },
                      { label: t.messages,      val: perf.messages.value,      icon: "💬" },
                      { label: t.conversations, val: perf.conversations.value, icon: "🗨️" },
                    ].map(item => (
                      <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid #f3f4f6" }}>
                        <span style={{ fontSize: 12, color: "#374151" }}>{item.icon} {item.label}</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: "#16a34a" }}>+{item.val}%</span>
                      </div>
                    ))
                  }
                  <div style={{ marginTop: 10, textAlign: "right" }}>
                    <span style={{ fontSize: 12, color: "#78350f", fontWeight: 600, cursor: "pointer" }}>{t.viewAll}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Leads by Source + Hashtags */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div style={{ background: "#fff", borderRadius: 14, padding: "14px 16px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1.5px solid #fef3c7" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#1c1917", marginBottom: 10 }}>{t.leadSource}</div>
                {loading ? <Skeleton h={110} /> : (
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <PieChart width={115} height={115}>
                      <Pie data={sources} cx={52} cy={52} innerRadius={32} outerRadius={52} dataKey="count" startAngle={90} endAngle={-270}>
                        {sources.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
                      </Pie>
                    </PieChart>
                    <div>
                      {sources.map((s, i) => {
                        const label = [t.inquiries, t.campaigns, t.referrals][i];
                        return (
                          <div key={s.source} style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
                            <div style={{ width: 9, height: 9, borderRadius: "50%", background: PIE_COLORS[i] }} />
                            <span style={{ fontSize: 11, color: "#374151" }}>{label}</span>
                            <span style={{ fontSize: 11, fontWeight: 700, color: "#1c1917", marginLeft: 4 }}>{s.count.toLocaleString()}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                <button style={{ marginTop: 10, width: "100%", background: "#fff8f0", border: "1.5px solid #f97316", color: "#c2410c", borderRadius: 8, padding: "6px", fontFamily: kf, fontWeight: 600, fontSize: 11, cursor: "pointer" }}>{t.manageCampaigns}</button>
              </div>

              <div style={{ background: "#fff", borderRadius: 14, padding: "14px 16px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1.5px solid #fef3c7" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#1c1917" }}>{t.hashtagsTitle}</span>
                  <span style={{ fontSize: 11, color: "#78350f", fontWeight: 600, cursor: "pointer" }}>{t.seeAll}</span>
                </div>
                {loading
                  ? [1,2,3,4,5].map(i => <div key={i} style={{ marginBottom: 7 }}><Skeleton h={14} /></div>)
                  : hashtags.map((h, i) => (
                    <div className="hashtag-row" key={h.tag} style={{ display: "flex", justifyContent: "space-between", padding: "5px 7px", borderRadius: 6, transition: "background 0.15s" }}>
                      <span style={{ fontSize: 12, color: "#78350f", fontWeight: 500 }}>
                        {lang === "kn" ? (HASHTAGS_KN[i] || h.tag) : h.tag} {h.trending ? "⭐" : ""}
                      </span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "#4b5563" }}>{(h.count / 1000).toFixed(0)}K</span>
                    </div>
                  ))
                }
              </div>
            </div>

            {/* Chips */}
            <div style={{ display: "flex", gap: 9 }}>
              {(lang === "kn" ? CHIPS_KN : CHIPS_EN).map(chip => (
                <div key={chip} style={{ background: "#fff", border: "1.5px solid #e7e5e4", borderRadius: 20, padding: "4px 14px", fontSize: 12, color: "#374151", cursor: "pointer" }}>{chip}</div>
              ))}
            </div>
          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {/* Growth Tip */}
            <div style={{ background: "#fff", borderRadius: 14, padding: "16px 16px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1.5px solid #fef3c7" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#1c1917", marginBottom: 12 }}>{t.growthTips}</div>
              {loading ? <Skeleton h={90} /> : tip && (
                <div style={{ background: "#fef9ee", borderRadius: 10, padding: "12px 12px", border: "1px solid #fde68a" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{ fontSize: 22 }}>📱</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 6 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: "#1c1917" }}>{lang === "kn" ? TIP_KN.title : tip.title}</span>
                        <span style={{ background: "#f97316", color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 5, flexShrink: 0 }}>{t.tipBadge}</span>
                      </div>
                      <p style={{ fontSize: 11, color: "#6b7280", marginTop: 5, lineHeight: 1.5 }}>{lang === "kn" ? TIP_KN.message : tip.message}</p>
                    </div>
                  </div>
                  <button style={{ marginTop: 10, background: "#78350f", color: "#fff", border: "none", borderRadius: 8, padding: "7px 14px", fontFamily: kf, fontWeight: 600, fontSize: 12, cursor: "pointer" }}>{lang === "kn" ? TIP_KN.cta : tip.cta}</button>
                </div>
              )}
            </div>

            {/* Recent Leads */}
            <div style={{ background: "#fff", borderRadius: 14, padding: "14px 16px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1.5px solid #fef3c7" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#1c1917" }}>{t.recentLeads}</span>
                <span style={{ fontSize: 11, color: "#78350f", fontWeight: 600, cursor: "pointer" }}>{t.seeAll}</span>
              </div>
              {loading
                ? [1,2].map(i => <div key={i} style={{ marginBottom: 8 }}><Skeleton h={42} /></div>)
                : leads.map((l, i) => (
                  <div className="lead-row" key={l.id} style={{ display: "flex", alignItems: "center", gap: 9, padding: "8px 7px", borderRadius: 8, marginBottom: 4, transition: "background 0.15s", cursor: "pointer" }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, border: "1.5px solid #fde68a", flexShrink: 0 }}>{l.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#1c1917" }}>{l.name}</div>
                      <div style={{ fontSize: 11, color: "#6b7280" }}>&gt; {lang === "kn" ? (LEAD_DESC.kn[i] || l.description) : l.description}</div>
                    </div>
                    <div style={{ fontSize: 10, color: "#9ca3af" }}>{l.time}</div>
                  </div>
                ))
              }
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6, padding: "6px 8px", background: "#f0fdf4", borderRadius: 8, border: "1px solid #bbf7d0" }}>
                <span style={{ fontSize: 13 }}>📍</span>
                <span style={{ fontSize: 11, color: "#16a34a", fontWeight: 500 }}>{t.newInquiry}</span>
              </div>
            </div>

            {/* Tasks */}
            <div style={{ background: "#fff", borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1.5px solid #fef3c7" }}>
              <div style={{ height: 100, background: "linear-gradient(135deg,#fde68a,#fb923c,#ec4899)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40 }}>🥻</div>
              <div style={{ padding: "12px 14px" }}>
                {loading
                  ? [1,2].map(i => <div key={i} style={{ marginBottom: 10 }}><Skeleton h={40} /></div>)
                  : tasks.map((task, i) => (
                    <div key={task.id} style={{ marginBottom: 10 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: "#1c1917" }}>{task.date}</div>
                        <button style={{ background: "#4b5563", color: "#fff", border: "none", borderRadius: 6, padding: "3px 9px", fontFamily: kf, fontSize: 10, fontWeight: 600, cursor: "pointer" }}>{t.markDone}</button>
                      </div>
                      <div style={{ fontSize: 12, color: task.color, fontWeight: 500, marginTop: 2 }}>
                        {lang === "kn" ? TASK_LABELS.kn[i] : TASK_LABELS.en[i]}
                      </div>
                      {(lang === "kn" ? TASK_SUBS.kn[i] : TASK_SUBS.en[i]) && (
                        <div style={{ fontSize: 11, color: "#6b7280", marginTop: 1 }}>
                          {lang === "kn" ? TASK_SUBS.kn[i] : TASK_SUBS.en[i]}
                        </div>
                      )}
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
