import React from "react";
import {
  Home,
  FileEdit,
  MessageSquareText,
  CalendarDays,
  Send,
  ArrowLeft,
  MoreHorizontal,
  Check,
  Plus,
  Square,
  Pencil,
  Flame,
  BadgePlus,
  Clock3,
  Share2,
  Image as ImageIcon,
  Video,
  Hash,
  Bookmark,
  UserRoundCheck,
} from "lucide-react";

const templates = [
  { title: "Reels", bg: "linear-gradient(135deg,#ffb100,#ff2d7a)", icon: "▶" },
  { title: "Story", bg: "linear-gradient(135deg,#ffb100,#ff2d7a)", icon: "◌+" },
  { title: "Post", bg: "linear-gradient(135deg,#a91cff,#ffae42)", icon: "+" },
  { title: "Vlog", bg: "linear-gradient(135deg,#ffb100,#ff2d00)", icon: "↻" },
];

const drafts = [
  {
    title: "Ugadi Festival Highlights",
    date: "March 25",
    type: "Reel",
    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa7c22?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Workout Session",
    date: "February 18",
    type: "Reel",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "New Recipe Video",
    date: "February 14",
    type: "Reel",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=80",
  },
];

const sideItems = [
  { label: "Home", icon: Home, active: true },
  { label: "Editor", icon: FileEdit },
  { label: "Captions", icon: MessageSquareText },
  { label: "Schedule", icon: CalendarDays },
  { label: "Publish", icon: Send },
];

function TemplateCard({ item }) {
  return (
    <div className="template-wrap">
      <div className="template-icon" style={{ background: item.bg }}>
        <span>{item.icon}</span>
      </div>
      <div className="template-label">{item.title}</div>
    </div>
  );
}

function DraftRow({ item }) {
  return (
    <div className="draft-row">
      <img src={item.image} alt={item.title} className="draft-thumb" />
      <div className="draft-info">
        <div className="draft-title">{item.title}</div>
        <div className="draft-date">{item.date}</div>
        <div className="draft-type">
          <Video size={15} />
          <span>{item.type}</span>
        </div>
      </div>
      <button className="icon-btn">
        <Pencil size={18} />
      </button>
    </div>
  );
}

function FlowCard({ children, label, className = "" }) {
  return (
    <div className={`flow-item ${className}`}>
      <div className="flow-visual">{children}</div>
      <div className="flow-label">{label}</div>
    </div>
  );
}

export default function CreatorStudioUI() {
  return (
    <div className="creator-app">
      <div className="bg-overlay" />

      <header className="topbar">
        <div className="brand">
          <div className="brand-logo">✣</div>
          <span>Creator Studio</span>
        </div>

        <div className="top-actions">
          <button className="tick-btn">
            <Check size={18} />
          </button>
          <button className="upgrade-btn">Upgrade</button>
        </div>
      </header>

      <nav className="main-nav">
        <div className="crumb">
          <ArrowLeft size={18} />
          <span>Creator Studio</span>
        </div>

        <div className="nav-links">
          <span className="nav-item active">
            <Home size={18} />
            Home
          </span>
          <span className="divider">|</span>
          <span className="nav-item">
            <FileEdit size={18} />
            Editor
          </span>
          <span className="divider">|</span>
          <span className="nav-item">
            <MessageSquareText size={18} />
            Captions
          </span>
          <span className="divider">|</span>
          <span className="nav-item">
            <CalendarDays size={18} />
            Schedule
          </span>
          <span className="divider">|</span>
          <span className="nav-item">
            <Send size={18} />
            Publish
          </span>
        </div>

        <button className="more-btn">
          <MoreHorizontal size={20} />
        </button>
      </nav>

      <div className="layout">
        <aside className="sidebar">
          {sideItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`side-item ${item.active ? "active" : ""}`}
              >
                <Icon size={22} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </aside>

        <main className="content">
          <section className="hero">
            <h1>Welcome to Creator Studio</h1>
            <p>Start creating content</p>
          </section>

          <div className="content-grid">
            <section className="left-panel">
              <div className="section-head">Start with a template</div>

              <div className="templates-row">
                {templates.map((item) => (
                  <TemplateCard key={item.title} item={item} />
                ))}
              </div>

              <div className="drafts-block">
                <div className="section-head with-border">Your Drafts</div>

                <div className="drafts-list">
                  {drafts.map((item) => (
                    <DraftRow key={item.title} item={item} />
                  ))}
                </div>

                <div className="drafts-footer">
                  <div className="offline-left">
                    <div className="check-pill">
                      <Check size={16} />
                    </div>
                    <span>Offline Drafts (2)</span>
                  </div>

                  <div className="offline-actions">
                    <button className="mini-btn">
                      <Plus size={16} />
                    </button>
                    <button className="mini-btn">
                      <Square size={12} fill="currentColor" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="center-panel">
              <div className="brand-card">
                <div className="brand-title">Brand Kit</div>
                <div className="brand-illus">
                  <div className="tablet-shape" />
                  <div className="pen-shape" />
                </div>
                <div className="brand-sub">Manage fonts, colors &amp; assets</div>
                <div className="view-kit">View Brand Kit</div>
                <div className="progress-track">
                  <div className="progress-fill" />
                </div>
              </div>
            </section>

            <section className="right-panel">
              <FlowCard label="Edit Photos & Videos">
                <div className="icon-group">
                  <div className="soft-card"><ImageIcon size={20} /></div>
                  <div className="soft-card"><Video size={20} /></div>
                </div>
              </FlowCard>

              <div className="arrow-down">↓</div>

              <FlowCard label="Captions & Hashtags">
                <div className="icon-group single-row">
                  <div className="soft-card"><Bookmark size={20} /></div>
                  <div className="soft-card"><Hash size={20} /></div>
                </div>
              </FlowCard>

              <div className="arrow-down">↓</div>

              <FlowCard label="Publish Everywhere">
                <div className="icon-group triple">
                  <div className="soft-card"><Bookmark size={18} /></div>
                  <div className="soft-card"><Clock3 size={18} /></div>
                  <div className="soft-card"><Share2 size={18} /></div>
                </div>
              </FlowCard>

              <button className="upgrade-strip">
                <Flame size={18} />
                <span>Upgrade</span>
                <span className="dots">••••••••</span>
                <span>›</span>
              </button>

              <div className="bottom-actions">
                <button className="trash-btn">🗑</button>
                <button className="save-btn">Save Draft</button>
                <button className="publish-btn">Publish</button>
              </div>
            </section>
          </div>
        </main>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: "Segoe UI", Tahoma, sans-serif;
        }

        .creator-app {
          min-height: 100vh;
          position: relative;
          color: #4c3678;
          background:
            linear-gradient(rgba(248, 228, 203, 0.86), rgba(248, 228, 203, 0.86)),
            url("https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=80") center/cover no-repeat;
          overflow: hidden;
        }

        .bg-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 42% 72%, rgba(255,255,220,0.5), transparent 18%),
            linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,212,160,0.1));
          pointer-events: none;
        }

        .topbar {
          height: 60px;
          padding: 10px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(241, 237, 225, 0.94);
          border-bottom: 1px solid rgba(92, 61, 125, 0.18);
          position: relative;
          z-index: 2;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 21px;
          font-weight: 700;
        }

        .brand-logo {
          font-size: 24px;
          line-height: 1;
        }

        .top-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .tick-btn,
        .upgrade-btn,
        .more-btn,
        .icon-btn,
        .mini-btn,
        .trash-btn,
        .save-btn,
        .publish-btn,
        .upgrade-strip {
          border: none;
          cursor: pointer;
        }

        .tick-btn {
          width: 40px;
          height: 28px;
          border-radius: 999px;
          background: #5a3487;
          color: white;
          display: grid;
          place-items: center;
        }

        .upgrade-btn {
          background: #6d5498;
          color: #fff3db;
          border-radius: 12px;
          padding: 8px 16px;
          font-size: 16px;
          box-shadow: inset 0 0 0 2px rgba(255,255,255,0.2);
        }

        .main-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          background: rgba(251, 236, 207, 0.9);
          border-bottom: 2px solid rgba(161, 124, 66, 0.15);
          position: relative;
          z-index: 2;
        }

        .crumb,
        .nav-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .crumb {
          font-size: 18px;
          min-width: 180px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 18px;
          font-weight: 500;
        }

        .nav-item.active {
          font-weight: 700;
        }

        .divider {
          color: rgba(76, 54, 120, 0.7);
        }

        .more-btn {
          background: transparent;
          color: #5a3487;
        }

        .layout {
          display: grid;
          grid-template-columns: 198px 1fr;
          gap: 6px;
          padding: 0;
          position: relative;
          z-index: 2;
        }

        .sidebar {
          margin-top: 0;
          background: rgba(255, 255, 255, 0.72);
          border-radius: 0 0 14px 0;
          overflow: hidden;
          min-height: calc(100vh - 110px);
        }

        .side-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          font-size: 19px;
          color: #4c3678;
        }

        .side-item.active {
          background: linear-gradient(90deg, rgba(147,111,178,0.7), rgba(181,149,208,0.55));
          font-weight: 700;
        }

        .content {
          padding: 0 0 10px 0;
        }

        .hero {
          background: rgba(245, 236, 180, 0.7);
          margin: 0;
          padding: 14px 22px 10px;
          border-radius: 14px 0 0 0;
          border-left: 1px solid rgba(94, 61, 125, 0.15);
          border-top: 1px solid rgba(94, 61, 125, 0.12);
        }

        .hero h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 800;
        }

        .hero p {
          margin: 2px 0 0;
          font-size: 18px;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1.55fr 1fr 0.9fr;
          gap: 10px;
          padding: 0 10px 0 8px;
        }

        .left-panel,
        .center-panel,
        .right-panel {
          min-height: 600px;
        }

        .left-panel {
          padding: 0 10px 0 10px;
        }

        .section-head {
          margin-top: 8px;
          color: #3e2b67;
          font-size: 22px;
          font-weight: 800;
        }

        .with-border {
          padding-top: 10px;
          border-top: 1px solid rgba(59, 40, 86, 0.85);
          margin-top: 12px;
          font-size: 18px;
        }

        .templates-row {
          display: flex;
          gap: 18px;
          padding: 16px 2px 10px;
        }

        .template-wrap {
          width: 82px;
          text-align: center;
        }

        .template-icon {
          width: 82px;
          height: 100px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 34px;
          box-shadow: inset 0 0 0 2px rgba(255,255,255,0.2);
        }

        .template-label {
          margin-top: 8px;
          font-size: 18px;
        }

        .drafts-block {
          margin-top: 14px;
        }

        .drafts-list {
          margin-top: 8px;
          background: rgba(255,255,255,0.62);
          border-radius: 14px 14px 0 0;
          overflow: hidden;
          border: 1px solid rgba(92, 61, 125, 0.12);
        }

        .draft-row {
          display: grid;
          grid-template-columns: 146px 1fr 36px;
          gap: 10px;
          padding: 6px 10px;
          align-items: center;
          border-bottom: 1px solid rgba(74, 52, 112, 0.45);
        }

        .draft-thumb {
          width: 146px;
          height: 70px;
          object-fit: cover;
          border-radius: 12px;
        }

        .draft-title {
          font-size: 17px;
          line-height: 1.1;
        }

        .draft-date {
          font-size: 16px;
          line-height: 1.2;
        }

        .draft-type {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 16px;
        }

        .icon-btn {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          color: #7a58aa;
          background: transparent;
        }

        .drafts-footer {
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(92, 61, 125, 0.12);
          border-top: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          border-radius: 0 0 14px 14px;
        }

        .offline-left {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 18px;
        }

        .check-pill {
          width: 42px;
          height: 28px;
          border-radius: 999px;
          background: #5d3b8d;
          color: white;
          display: grid;
          place-items: center;
        }

        .offline-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .mini-btn {
          width: 22px;
          height: 22px;
          color: #4c3678;
          background: transparent;
          display: grid;
          place-items: center;
        }

        .center-panel {
          padding-top: 14px;
        }

        .brand-card {
          min-height: 228px;
          border-radius: 14px;
          background: rgba(248, 247, 250, 0.78);
          padding: 14px 12px;
          box-shadow: inset 0 0 0 1px rgba(120, 88, 164, 0.08);
        }

        .brand-title {
          font-size: 20px;
          margin-bottom: 6px;
        }

        .brand-illus {
          position: relative;
          height: 105px;
          margin: 6px auto 10px;
          width: 150px;
        }

        .tablet-shape {
          position: absolute;
          width: 88px;
          height: 58px;
          background: linear-gradient(135deg, #46d1ff, #f34da6, #7d54d1);
          border: 4px solid #76509e;
          border-radius: 10px;
          left: 28px;
          top: 28px;
          transform: rotate(12deg);
          box-shadow: 0 6px 12px rgba(90, 52, 135, 0.18);
        }

        .pen-shape {
          position: absolute;
          width: 8px;
          height: 90px;
          background: linear-gradient(180deg, #8f6f8f, #e7d0c2);
          border-radius: 12px;
          left: 64px;
          top: 0;
          transform: rotate(-38deg);
        }

        .brand-sub {
          font-size: 16px;
          line-height: 1.25;
          margin-bottom: 10px;
        }

        .view-kit {
          font-size: 16px;
          margin-bottom: 2px;
        }

        .progress-track {
          height: 11px;
          border-radius: 999px;
          background: #ccc9cf;
          overflow: hidden;
        }

        .progress-fill {
          width: 68%;
          height: 100%;
          background: #8d78b3;
          border-radius: 999px;
        }

        .right-panel {
          padding-top: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .flow-item {
          text-align: center;
          color: #4c3678;
        }

        .flow-visual {
          width: 148px;
          height: 96px;
          border-radius: 16px;
          background: rgba(240, 224, 243, 0.72);
          border: 1px solid rgba(122, 88, 170, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 0 14px rgba(255,255,255,0.55);
        }

        .flow-label {
          width: 170px;
          font-size: 18px;
          line-height: 1.1;
          margin-top: 6px;
        }

        .icon-group {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .icon-group.triple {
          gap: 8px;
        }

        .soft-card {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(186, 155, 219, 0.45);
          display: grid;
          place-items: center;
          color: #8d67b4;
        }

        .arrow-down {
          font-size: 64px;
          line-height: 1;
          color: #5a3487;
          margin: -4px 0;
        }

        .upgrade-strip {
          margin-top: 6px;
          width: 185px;
          height: 36px;
          border-radius: 14px;
          background: #6b4d9a;
          color: #ffe9c6;
          display: flex;
          align-items: center;
          justify-content: space-around;
          font-size: 18px;
          padding: 0 10px;
        }

        .dots {
          letter-spacing: 1px;
        }

        .bottom-actions {
          display: flex;
          gap: 10px;
          align-items: center;
          margin-top: 12px;
        }

        .trash-btn {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: rgba(233, 220, 242, 0.88);
          font-size: 18px;
        }

        .save-btn {
          background: rgba(255,255,255,0.68);
          color: #2f223f;
          border-radius: 10px;
          padding: 8px 12px;
          font-size: 16px;
        }

        .publish-btn {
          background: #7a67b5;
          color: white;
          border-radius: 10px;
          padding: 8px 14px;
          font-size: 16px;
        }

        @media (max-width: 1100px) {
          .content-grid {
            grid-template-columns: 1fr;
          }

          .layout {
            grid-template-columns: 1fr;
          }

          .sidebar {
            min-height: auto;
            border-radius: 0;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
          }

          .side-item {
            justify-content: center;
            padding: 12px 8px;
            font-size: 14px;
          }

          .nav-links {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}