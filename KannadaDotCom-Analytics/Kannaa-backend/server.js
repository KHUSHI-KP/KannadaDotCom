const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ─── MOCK DATA ────────────────────────────────────────────────

const analyticsData7Days = [
  { day: "Tue", engagement: 12000, reach: 8000,  leads: 1200, revenue: 22000 },
  { day: "Wed", engagement: 14000, reach: 10000, leads: 1800, revenue: 28000 },
  { day: "Thu", engagement: 13000, reach: 11000, leads: 2000, revenue: 30000 },
  { day: "Fri", engagement: 15000, reach: 13000, leads: 2400, revenue: 35000 },
  { day: "Sat", engagement: 17000, reach: 15000, leads: 2800, revenue: 40000 },
  { day: "Sun", engagement: 20000, reach: 17000, leads: 3500, revenue: 42000 },
  { day: "Mon", engagement: 24000, reach: 21000, leads: 5200, revenue: 50000 },
];

const analyticsData30Days = [
  { day: "W1",  engagement: 60000,  reach: 40000,  leads: 5000,  revenue: 100000 },
  { day: "W2",  engagement: 75000,  reach: 52000,  leads: 7200,  revenue: 130000 },
  { day: "W3",  engagement: 90000,  reach: 68000,  leads: 9800,  revenue: 160000 },
  { day: "W4",  engagement: 110000, reach: 85000,  leads: 14000, revenue: 210000 },
];

const overviewStats = {
  audienceGrowth: 5200,
  audienceGrowthPercent: 28,
  reach: 78900,
  reachPercent: 32,
  revenue: 72800,
  revenuePercent: 23,
};

const performanceSummary = {
  clicks:        { value: 32, trend: "up" },
  messages:      { value: 28, trend: "up" },
  conversations: { value: 23, trend: "up" },
};

const recentLeads = [
  { id: 1, name: "Priya Boutique",    description: "Interested in bulk order", city: "Bengaluru", icon: "🏪", time: "2 hrs ago" },
  { id: 2, name: "Ravi Events",       description: "Asking for pricing",        city: "Mysuru",    icon: "📅", time: "4 hrs ago" },
  { id: 3, name: "Saraswati Fabrics", description: "Wants catalogue",           city: "Bengaluru", icon: "🧵", time: "6 hrs ago" },
];

const leadsBySource = [
  { source: "Inquiries", count: 2500 },
  { source: "Campaigns", count: 1800 },
  { source: "Referrals", count: 920  },
];

const popularHashtags = [
  { tag: "#BengaluruBusiness", count: 93000, trending: true  },
  { tag: "#SmallBusiness",     count: 83000, trending: false },
  { tag: "#EcoFriendly",       count: 65000, trending: false },
  { tag: "#VendorPartner",     count: 54000, trending: false },
  { tag: "#Success",           count: 50000, trending: false },
  { tag: "#Trending",          count: 70000, trending: true  },
];

const upcomingTasks = [
  { id: 1, date: "Tuesday, April 23",   label: "Saraswati Boutique",          sub: null,                         color: "#f97316" },
  { id: 2, date: "Wednesday, April 24", label: "Respond to Business Inquiries", sub: "Follow up with 3 new leads", color: "#8b5cf6" },
];

const growthTip = {
  title:   "Boost Your Social Presence",
  message: "Boost your recent post now to reach more customers.",
  cta:     "Boost Post",
};

// ─── ROUTES ──────────────────────────────────────────────────

// Health check
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Kannada.com Analytics API is running 🚀" });
});

// Overview stats (audience, reach, revenue)
app.get("/api/analytics/overview", (req, res) => {
  res.json(overviewStats);
});

// Chart data — ?days=7 or ?days=30
app.get("/api/analytics/chart", (req, res) => {
  const days = parseInt(req.query.days) || 7;
  res.json(days === 30 ? analyticsData30Days : analyticsData7Days);
});

// Performance summary (clicks, messages, conversations)
app.get("/api/analytics/performance", (req, res) => {
  res.json(performanceSummary);
});

// Recent leads
app.get("/api/leads", (req, res) => {
  res.json(recentLeads);
});

// Leads by source (for pie chart)
app.get("/api/leads/sources", (req, res) => {
  res.json(leadsBySource);
});

// Popular hashtags
app.get("/api/hashtags", (req, res) => {
  res.json(popularHashtags);
});

// Upcoming tasks
app.get("/api/tasks", (req, res) => {
  res.json(upcomingTasks);
});

// Growth tip
app.get("/api/tips/latest", (req, res) => {
  res.json(growthTip);
});

// ─── START ───────────────────────────────────────────────────

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`\n✅  Dummy backend running at http://localhost:${PORT}`);
  console.log("📡  Available endpoints:");
  console.log("    GET /api/analytics/overview");
  console.log("    GET /api/analytics/chart?days=7");
  console.log("    GET /api/analytics/chart?days=30");
  console.log("    GET /api/analytics/performance");
  console.log("    GET /api/leads");
  console.log("    GET /api/leads/sources");
  console.log("    GET /api/hashtags");
  console.log("    GET /api/tasks");
  console.log("    GET /api/tips/latest\n");
});
