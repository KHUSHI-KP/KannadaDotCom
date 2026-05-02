import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const now = Date.now();

// ───────────────── POSTS (FULL DEMO DATA) ─────────────────
const demoPosts = [
  {
    id: "p1",
    business: { en: "Sara's Boutique", kn: "ಸಾರಾ ಬೋಟಿಕ್" },
    location: { en: "Vijayanagar, Bengaluru", kn: "ವಿಜಯನಗರ, ಬೆಂಗಳೂರು" },
    content: { en: "Flat 15% off on sarees this weekend", kn: "ಈ ವಾರಾಂತ್ಯ ಸೀರೆಗಳ ಮೇಲೆ 15% ರಿಯಾಯಿತಿ" },
    tags: [{ en: "Offer", kn: "ಆಫರ್" }, { en: "Sarees", kn: "ಸೀರೆಗಳು" }],
    likes: 83,
    comments: 26,
    saves: 65,
    image: "/images/saree.jpg",
    createdAt: now - 1000 * 60 * 30
  },
  {
    id: "p2",
    business: { en: "Coffee Roasters", kn: "ಕಾಫಿ ರೋಸ್ಟರ್ಸ್" },
    location: { en: "Jayanagar, Bengaluru", kn: "ಜಯನಗರ, ಬೆಂಗಳೂರು" },
    content: { en: "Celebrating our 1000th customer!!!!", kn: "ನಮ್ಮ 1000ನೇ ಗ್ರಾಹಕನ ಸಂಭ್ರಮ" },
    tags: [{ en: "SmallBusiness", kn: "ಸಣ್ಣ ವ್ಯಾಪಾರ" }],
    likes: 250,
    comments: 50,
    saves: 100,
    image: "/images/coffee.jpg",
    createdAt: now - 1000 * 60 * 60 * 5
  },
  {
    id: "p3",
    business: { en: "Uptrend Craft", kn: "ಅಪ್‌ಟ್ರೆಂಡ್ ಕ್ರಾಫ್ಟ್" },
    location: { en: "Indiranagar, Bengaluru", kn: "ಇಂದಿರಾನಗರ, ಬೆಂಗಳೂರು" },
    content: { en: "New scented candle collection launched today", kn: "ಹೊಸ ಸುಗಂಧ ಮೇಣದ ಬತ್ತಿ ಸಂಗ್ರಹ ಬಿಡುಗಡೆ" },
    tags: [{ en: "EcoFriendly", kn: "ಪರಿಸರ ಸ್ನೇಹಿ" }, { en: "SupportLocal", kn: "ಸ್ಥಳೀಯ ಬೆಂಬಲ" }],
    likes: 150,
    comments: 26,
    saves: 70,
    image: "/images/candle.jpg",
    createdAt: now - 1000 * 60 * 60 * 10
  },
  {
    id: "p4",
    business: { en: "Blue Eyes Captures", kn: "ಬ್ಲೂ ಐಸ್ ಕ್ಯಾಪ್ಚರ್ಸ್" },
    location: { en: "Nagarbhavi, Bengaluru", kn: "ನಗರಭವೀ, ಬೆಂಗಳೂರು" },
    content: { en: "5 tips for hiring your wedding photographer", kn: "ಮದುವೆ ಫೋಟೋಗ್ರಾಫರ್ ಆಯ್ಕೆ ಮಾಡಲು 5 ಸಲಹೆಗಳು" },
    tags: [{ en: "WeddingTips", kn: "ಮದುವೆ ಸಲಹೆಗಳು" }, { en: "Photography", kn: "ಫೋಟೋಗ್ರಫಿ" }],
    likes: 99,
    comments: 50,
    saves: 12,
    image: "/images/camera.jpg",
    createdAt: now - 1000 * 60 * 60 * 24
  },
  {
    id: "p5",
    business: { en: "Wahh Chaiiii", kn: "ವಾಹ್ ಚಾಯಿ" },
    location: { en: "Kengeri, Bengaluru", kn: "ಕೆಂಗೇರಿ, ಬೆಂಗಳೂರು" },
    content: { en: "Celebrating our 100th customer today!", kn: "ನಮ್ಮ 100ನೇ ಗ್ರಾಹಕನ ಸಂಭ್ರಮ" },
    tags: [{ en: "SmallBusiness", kn: "ಸಣ್ಣ ವ್ಯಾಪಾರ" }],
    likes: 150,
    comments: 15,
    saves: 10,
    image: "/images/chai.jpg",
    createdAt: now - 1000 * 60 * 60 * 48
  },
  {
    id: "p6",
    business: { en: "Bendooza Delights", kn: "ಬೆಂಡೂಜಾ ಡಿಲೈಟ್ಸ್" },
    location: { en: "Indiranagar, Bengaluru", kn: "ಇಂದಿರಾನಗರ, ಬೆಂಗಳೂರು" },
    content: { en: "20% off on weekend special orders", kn: "ವಾರಾಂತ್ಯ ವಿಶೇಷ ಆರ್ಡರ್‌ಗಳ ಮೇಲೆ 20% ರಿಯಾಯಿತಿ" },
    tags: [{ en: "LocalBiz", kn: "ಸ್ಥಳೀಯ ವ್ಯವಹಾರ" }, { en: "AestheticCafes", kn: "ಅಂದವಾದ ಕ್ಯಾಫೆಗಳು" }],
    likes: 500,
    comments: 275,
    saves: 300,
    image: "/images/croissant.jpg",
    createdAt: now - 1000 * 60 * 60 * 3
  },
  {
    id: "p7",
    business: { en: "Green Basket Organics", kn: "ಗ್ರೀನ್ ಬಾಸ್ಕೆಟ್ ಆರ್ಗ್ಯಾನಿಕ್ಸ್" },
    location: { en: "Malleshwaram, Bengaluru", kn: "ಮಲ್ಲೇಶ್ವರಂ, ಬೆಂಗಳೂರು" },
    content: { en: "Fresh organic vegetables delivered daily", kn: "ಪ್ರತಿದಿನ ತಾಜಾ ಆರ್ಗ್ಯಾನಿಕ್ ತರಕಾರಿಗಳ ವಿತರಣಾ" },
    tags: [{ en: "EcoFriendly", kn: "ಪರಿಸರ ಸ್ನೇಹಿ" }, { en: "LocalBiz", kn: "ಸ್ಥಳೀಯ ವ್ಯವಹಾರ" }],
    likes: 180,
    comments: 22,
    saves: 45,
    image: "/images/organic.jpg",
    createdAt: now - 1000 * 60 * 60 * 12
  },
  {
    id: "p8",
    business: { en: "Pixel Studio", kn: "ಪಿಕ್ಸೆಲ್ ಸ್ಟುಡಿಯೋ" },
    location: { en: "BTM Layout, Bengaluru", kn: "ಬಿಟಿಎಂ ಲೇಔಟ್, ಬೆಂಗಳೂರು" },
    content: { en: "Professional product photography for startups", kn: "ಸ್ಟಾರ್ಟಪ್‌ಗಳಿಗೆ ವೃತ್ತಿಪರ ಉತ್ಪನ್ನ ಫೋಟೋಗ್ರಾಫಿ" },
    tags: [{ en: "Photography", kn: "ಫೋಟೋಗ್ರಫಿ" }, { en: "SmallBusiness", kn: "ಸಣ್ಣ ವ್ಯಾಪಾರ" }],
    likes: 210,
    comments: 38,
    saves: 55,
    image: "/images/studio.jpg",
    createdAt: now - 1000 * 60 * 60 * 6
  }
];

// ───────────────── BUSINESS ─────────────────
const demoBusiness = {
  id: 'b1',
  name: 'Heritage Handloom',
  description: 'Local handloom and textiles with traditional patterns.',
  visits: 1283,
};

// ───────────────── ANALYTICS ─────────────────
const overviewStats = {
  audienceGrowth: 124,
  audienceGrowthPercent: 12,
  reach: 8234,
  reachPercent: 8,
  revenue: 12450,
  revenuePercent: 6,
};

function makeChart(days = 7) {
  return Array.from({ length: days }).map((_, i) => ({
    day: `D${i + 1}`,
    engagement: Math.floor(Math.random() * 300) + 20,
    reach: Math.floor(Math.random() * 2000) + 100,
    leads: Math.floor(Math.random() * 40) + 1,
    revenue: Math.floor(Math.random() * 5000) / 100,
  }));
}

const performanceSummary = {
  clicks: { value: 24 },
  messages: { value: 12 },
  conversations: { value: 8 },
};

// ───────────────── LEADS ─────────────────
const demoLeads = [
  { id: 'l1', name: 'Ramesh', description: 'Interested in bulk order', icon: '📞', time: '2h' },
  { id: 'l2', name: 'Priya', description: 'Asking for pricing', icon: '✉️', time: '8h' },
];

const sources = [
  { source: 'inquiries', count: 120 },
  { source: 'campaigns', count: 80 },
  { source: 'referrals', count: 40 }
];

// ───────────────── EXTRA DATA ─────────────────
const tags = [
  { tag: '#Offer', count: 1200, trending: true },
  { tag: '#EcoFriendly', count: 800, trending: false },
  { tag: '#SmallBusiness', count: 640, trending: true }
];

const tasks = [
  { id: 't1', date: '2026-05-01', color: '#ef4444' },
  { id: 't2', date: '2026-05-02', color: '#0ea5a4' }
];

const tip = {
  title: 'Boost your social reach',
  message: 'Promote your recent post to reach more customers.',
  cta: 'Boost Post'
};

// ───────────────── ROUTES ─────────────────

app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Full Combined API Running 🚀',
    endpoints: [
      '/api/posts',
      '/api/business',
      '/api/analytics/overview',
      '/api/analytics/chart',
      '/api/analytics/performance',
      '/api/leads',
      '/api/leads/sources',
      '/api/hashtags',
      '/api/tasks',
      '/api/tips/latest'
    ]
  });
});

// POSTS
app.get('/api/posts', (req, res) => {
  res.json({ data: demoPosts });
});

// BUSINESS
app.get('/api/business', (req, res) => {
  res.json({ data: [demoBusiness] });
});

// ANALYTICS
app.get('/api/analytics/overview', (req, res) => {
  res.json(overviewStats);
});

app.get('/api/analytics/chart', (req, res) => {
  const days = parseInt(req.query.days || '7', 10);
  res.json(makeChart(days));
});

app.get('/api/analytics/performance', (req, res) => {
  res.json(performanceSummary);
});

// LEADS
app.get('/api/leads', (req, res) => {
  res.json(demoLeads);
});

app.get('/api/leads/sources', (req, res) => {
  res.json(sources);
});

// EXTRA
app.get('/api/hashtags', (req, res) => {
  res.json(tags);
});

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/api/tips/latest', (req, res) => {
  res.json(tip);
});

// ───────────────── START ─────────────────

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});