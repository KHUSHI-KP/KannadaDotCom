import React, { useState } from "react";
import {
  HiOutlineHome,
  HiOutlinePencilSquare,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineCalendarDays,
  HiOutlinePaperAirplane,
  HiOutlineArrowLeft,
  HiOutlineEllipsisHorizontal,
  HiOutlineCheck,
  HiOutlineTrash,
  HiOutlinePlus,
  HiOutlinePencil,
  HiOutlineVideoCamera,
  HiOutlinePhoto,
  HiOutlineBookmark,
  HiOutlineClock,
  HiOutlineShare,
  HiOutlineMagnifyingGlass,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineBars3BottomLeft,
} from "react-icons/hi2";

const homeDrafts = [
  {
    title: "Ugadi Festival Highlights",
    date: "March 25",
    type: "Reel",
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Workout Session",
    date: "February 18",
    type: "Reel",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "New Recipe Video",
    date: "February 14",
    type: "Reel",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
  },
];

const trendingSongs = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"];

const festivals = [
  {
    name: "Ugadi",
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Ganesh Chaturthi",
    image:
      "https://images.unsplash.com/photo-1567591414240-e9c1e59f3a3f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Durga Pooja",
    image:
      "https://images.unsplash.com/photo-1630660664869-c9d3cc676880?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Holi",
    image:
      "https://images.unsplash.com/photo-1612781320624-9cf0ec33ed2d?auto=format&fit=crop&w=400&q=80",
  },
];

const tabs = [
  { key: "home", label: "Home", icon: HiOutlineHome },
  { key: "editor", label: "Editor", icon: HiOutlinePencilSquare },
  { key: "captions", label: "Captions", icon: HiOutlineChatBubbleOvalLeft },
  { key: "schedule", label: "Schedule", icon: HiOutlineCalendarDays },
  { key: "publish", label: "Publish", icon: HiOutlinePaperAirplane },
];

const captionTags = [
  "#Ugadi",
  "#KannadaFestival",
  "#ForYouPage",
  "#Karnataka",
  "#Celebration",
  "#Hope",
  "#Harmony",
  "#Blessings",
  "#NewBeginnings",
  "#Renewal",
  "#Prosperity",
  "#Joy",
];

const trendingTags = [
  { name: "#Ugadi", posts: "567K posts" },
  { name: "#Festival", posts: "500K posts" },
  { name: "#Tradition", posts: "800K posts" },
  { name: "#ForYou", posts: "1000k posts" },
  { name: "#Hope", posts: "540K posts" },
];

const initialSchedulePosts = [
  {
    id: 1,
    title: "Ugadi Festival Highlights",
    type: "Reel",
    platform: "Instagram",
    date: "2026-04-20",
    time: "09:00",
    status: "Scheduled",
    thumbnail:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Morning Workout Motivation",
    type: "Reel",
    platform: "Facebook",
    date: "2026-04-21",
    time: "07:30",
    status: "Pending",
    thumbnail:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Healthy Recipe Quick Cut",
    type: "Post",
    platform: "Instagram",
    date: "2026-04-22",
    time: "06:45",
    status: "Scheduled",
    thumbnail:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
  },
];

export default function CreatorStudio() {
  const [activeTab, setActiveTab] = useState("home");
  const [captionText, setCaptionText] = useState(
    "Welcoming new beginnings with the spirit of Ugadi 🌸✨ and hearts full of hope.\nMay this festival bring joy, prosperity, and fresh opportunities into our lives 🌿💛.\nCelebrating tradition, happiness, and the start of a beautiful new year 🎉🌼."
  );

  const [schedulePosts, setSchedulePosts] = useState(initialSchedulePosts);
  const [selectedDate, setSelectedDate] = useState("2026-04-20");
  const [scheduleForm, setScheduleForm] = useState({
    title: "New Scheduled Post",
    type: "Reel",
    platform: "Instagram",
    date: "2026-04-20",
    time: "10:00",
  });

  const addSchedulePost = () => {
    const newPost = {
      id: Date.now(),
      title: scheduleForm.title,
      type: scheduleForm.type,
      platform: scheduleForm.platform,
      date: scheduleForm.date,
      time: scheduleForm.time,
      status: "Scheduled",
      thumbnail:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    };
    setSchedulePosts((prev) => [...prev, newPost]);
    setSelectedDate(scheduleForm.date);
  };

  const deleteSchedulePost = (id) => {
    setSchedulePosts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="creator-page">
        <header className="topbar">
          <div className="brand">
            <span className="brand-mark">✣</span>
            <span className="brand-text">Creator Studio</span>
          </div>

          <div className="topbar-actions">
            <button className="check-pill">
              <HiOutlineCheck />
            </button>
            <button className="upgrade-btn">Upgrade</button>
          </div>
        </header>

        <nav className="subnav">
          <div className="subnav-left">
            <HiOutlineArrowLeft />
            <span>Creator Studio</span>
          </div>

          <div className="subnav-center">
            {tabs.map((item, index) => {
              const Icon = item.icon;
              return (
                <React.Fragment key={item.key}>
                  <button
                    className={`subnav-item-btn ${
                      activeTab === item.key ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(item.key)}
                  >
                    <Icon />
                    <span>{item.label}</span>
                  </button>
                  {index !== tabs.length - 1 && (
                    <span className="subnav-divider">|</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div className="subnav-right">
            <HiOutlineEllipsisHorizontal />
          </div>
        </nav>

        <div className="layout">
          <aside className="sidebar">
            {tabs.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.key}
                  className={`sidebar-item ${
                    activeTab === item.key ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(item.key)}
                >
                  <span className="sidebar-icon">
                    <Icon />
                  </span>
                  <span className="sidebar-label">{item.label}</span>
                </button>
              );
            })}
          </aside>

          <main className="main-content">
            {activeTab === "home" && <HomeScreen />}
            {activeTab === "editor" && <EditorScreen />}
            {activeTab === "captions" && (
              <CaptionsScreen
                captionText={captionText}
                setCaptionText={setCaptionText}
              />
            )}
            {activeTab === "schedule" && (
              <ScheduleScreen
                schedulePosts={schedulePosts}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                scheduleForm={scheduleForm}
                setScheduleForm={setScheduleForm}
                addSchedulePost={addSchedulePost}
                deleteSchedulePost={deleteSchedulePost}
              />
            )}
           {activeTab === "publish" && (
  <PublishScreen
    schedulePosts={schedulePosts}
    captionText={captionText}
    selectedDate={selectedDate}
    setActiveTab={setActiveTab}
  />
)}
          </main>
        </div>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: "Segoe UI", sans-serif;
          background: #f0dcc4;
        }

        button,
        textarea,
        input,
        select {
          font-family: inherit;
        }

        .creator-page {
          min-height: 100vh;
          color: #533b80;
          background:
            linear-gradient(rgba(244, 223, 205, 0.68), rgba(244, 223, 205, 0.68)),
            url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80")
            center/cover no-repeat;
        }

        .topbar {
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          background: rgba(239, 235, 224, 0.95);
          border-bottom: 1px solid rgba(85, 58, 124, 0.12);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .brand-mark {
          font-size: 24px;
          line-height: 1;
        }

        .brand-text {
          font-size: 22px;
          font-weight: 700;
        }

        .topbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .check-pill {
          width: 36px;
          height: 24px;
          border: none;
          border-radius: 999px;
          background: #603d8c;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          cursor: pointer;
        }

        .upgrade-btn {
          border: none;
          background: #6e5299;
          color: #fff7ea;
          padding: 8px 16px;
          border-radius: 12px;
          font-size: 15px;
          cursor: pointer;
        }

        .subnav {
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
          background: rgba(247, 228, 193, 0.92);
          border-bottom: 1px solid rgba(85, 58, 124, 0.15);
        }

        .subnav-left {
          min-width: 170px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 16px;
        }

        .subnav-center {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 17px;
          font-weight: 500;
        }

        .subnav-item-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          border: none;
          background: transparent;
          color: #533b80;
          font-size: 17px;
          cursor: pointer;
          padding: 0;
        }

        .subnav-item-btn.active {
          font-weight: 700;
        }

        .subnav-divider {
          opacity: 0.8;
        }

        .subnav-right {
          min-width: 30px;
          display: flex;
          justify-content: flex-end;
          font-size: 22px;
        }

        .layout {
          display: grid;
          grid-template-columns: 158px 1fr;
          gap: 6px;
          padding: 0 4px 4px;
        }

        .sidebar {
          background: rgba(255, 255, 255, 0.72);
          border-radius: 0 0 14px 14px;
          overflow: hidden;
          padding: 4px 0;
          min-height: calc(100vh - 98px);
          display: flex;
          flex-direction: column;
        }

        .sidebar-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          color: #533b80;
          font-size: 18px;
          line-height: 1;
          cursor: pointer;
          background: transparent;
          border: none;
          text-align: left;
        }

        .sidebar-item.active {
          background: rgba(184, 157, 214, 0.85);
          font-weight: 700;
        }

        .sidebar-icon {
          width: 22px;
          height: 22px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .main-content {
          padding-right: 4px;
        }

        .card-shell,
        .editor-shell,
        .captions-shell,
        .schedule-shell,
        .placeholder-shell {
          background: rgba(246, 229, 205, 0.34);
          border: 2px solid rgba(238, 185, 124, 0.58);
          border-radius: 14px;
          overflow: hidden;
        }

        .schedule-shell {
          background: rgba(246, 229, 205, 0.34);
          border: 2px solid rgba(238, 185, 124, 0.58);
          border-radius: 14px;
          overflow: hidden;
        }

        .schedule-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          background: rgba(242, 233, 179, 0.55);
          padding: 14px 18px 10px;
          border-bottom: 1px solid rgba(66, 43, 97, 0.9);
        }

        .schedule-title {
          margin: 0;
          font-size: 24px;
          font-weight: 800;
        }

        .schedule-subtitle {
          margin: 2px 0 0;
          font-size: 16px;
        }

        .schedule-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .schedule-nav-btn {
          border: none;
          background: rgba(255,255,255,0.85);
          color: #4f3a79;
          padding: 8px 12px;
          border-radius: 10px;
          cursor: pointer;
          font-size: 14px;
        }

        .schedule-month-label {
          min-width: 170px;
          text-align: center;
          font-size: 18px;
          font-weight: 700;
          color: #4f3a79;
        }

        .schedule-layout {
          display: grid;
          grid-template-columns: 1.7fr 300px;
          min-height: 620px;
        }

        .schedule-calendar-wrap {
          padding: 12px;
        }

        .schedule-weekdays {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
        }

        .schedule-weekday-cell {
          text-align: center;
          padding: 10px 6px;
          font-size: 15px;
          font-weight: 700;
          color: #5d4c7d;
        }

        .schedule-calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          border-left: 1px solid rgba(92, 61, 125, 0.14);
          border-top: 1px solid rgba(92, 61, 125, 0.14);
        }

        .schedule-cell {
          min-height: 104px;
          padding: 6px;
          border-right: 1px solid rgba(92, 61, 125, 0.14);
          border-bottom: 1px solid rgba(92, 61, 125, 0.14);
          background: rgba(255,255,255,0.55);
          overflow: hidden;
          cursor: pointer;
          text-align: left;
        }

        .other-month-cell {
          opacity: 0.42;
        }

        .weekend-cell {
          background: rgba(132, 118, 163, 0.16);
        }

        .today-cell {
          background: rgba(255, 244, 191, 0.76);
        }

        .selected-cell {
          outline: 2px solid #6f4d9b;
          outline-offset: -2px;
        }

        .schedule-cell-head {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 6px;
        }

        .schedule-date-number {
          width: 26px;
          height: 26px;
          display: grid;
          place-items: center;
          color: #37284f;
          font-size: 14px;
        }

        .today-date-badge {
          border-radius: 50%;
          background: #1a73e8;
          color: white;
          font-weight: 700;
        }

        .schedule-events-stack {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .schedule-event-pill {
          border-radius: 6px;
          padding: 4px 6px;
          font-size: 11px;
          line-height: 1.2;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .schedule-event-pill.holiday {
          background: #d7f0d8;
          color: #256b2f;
        }

        .schedule-event-pill.post {
          background: #ddd4f8;
          color: #4a3b83;
        }

        .schedule-event-pill.birthday {
          background: #f5d6ea;
          color: #8b2f67;
        }

        .schedule-event-title {
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .schedule-event-time {
          font-size: 10px;
          opacity: 0.82;
          margin-top: 2px;
        }

        .schedule-more-link {
          font-size: 11px;
          color: #5f6368;
          padding-left: 2px;
        }

        .schedule-side-panel {
          border-left: 1px solid rgba(92, 61, 125, 0.14);
          background: rgba(255,255,255,0.72);
          padding: 14px;
        }

        .schedule-side-title {
          font-size: 18px;
          font-weight: 800;
          color: #33224f;
          margin-bottom: 10px;
        }

        .schedule-side-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          padding: 10px 0;
          border-bottom: 1px solid rgba(92, 61, 125, 0.12);
        }

        .schedule-side-bar {
          width: 10px;
          height: 44px;
          border-radius: 8px;
          flex-shrink: 0;
        }

        .schedule-side-bar.holiday {
          background: #79bf82;
        }

        .schedule-side-bar.post {
          background: #8a79cb;
        }

        .schedule-side-bar.birthday {
          background: #d870ac;
        }

        .schedule-side-item-title {
          font-size: 15px;
          color: #2f2149;
        }

        .schedule-side-item-date {
          font-size: 12px;
          color: #67597e;
          margin-top: 2px;
        }

        .schedule-post-btn {
          margin-top: 18px;
          width: 100%;
          height: 38px;
          border: none;
          border-radius: 10px;
          background: #5c468a;
          color: white;
          font-size: 15px;
          cursor: pointer;
        }

        .section-header {
          background: rgba(242, 233, 179, 0.55);
          padding: 14px 18px 10px;
          border-bottom: 1px solid rgba(66, 43, 97, 0.9);
        }

        .section-header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 800;
        }

        .section-header p {
          margin: 4px 0 0;
          font-size: 16px;
        }

        .home-grid {
          display: grid;
          grid-template-columns: 1.55fr 1fr 0.9fr;
          gap: 12px;
          padding: 10px 12px 12px;
        }

        .section-title {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 12px;
        }
        .publish-shell {
          background: rgba(246, 229, 205, 0.34);
          border: 2px solid rgba(238, 185, 124, 0.58);
          border-radius: 14px;
          overflow: hidden;
        }

        .publish-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.2fr 0.9fr;
          gap: 12px;
          padding: 12px;
        }

        .publish-left-panel,
        .publish-center-panel,
        .publish-right-panel {
          min-width: 0;
        }

        .publish-platforms-card,
        .publish-preview-card,
        .publish-post-card,
        .publish-schedule-card {
          background: rgba(255, 255, 255, 0.68);
          border-radius: 14px;
          border: 1px solid rgba(120, 92, 154, 0.16);
          overflow: hidden;
        }

        .publish-platforms-card {
          padding: 10px;
          margin-bottom: 12px;
        }

        .publish-platform-item {
          width: 100%;
          border: 1px solid rgba(120, 92, 154, 0.22);
          background: rgba(255, 255, 255, 0.92);
          border-radius: 12px;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          color: #3e2d5e;
          margin-bottom: 10px;
          text-align: left;
        }

        .publish-platform-item:last-child {
          margin-bottom: 0;
        }

        .publish-platform-item.active {
          background: rgba(215, 201, 234, 0.92);
        }

        .publish-platform-main {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .publish-platform-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 28px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .facebook-platform {
          background: #4267b2;
        }

        .instagram-platform {
          background: linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7);
        }

        .publish-platform-name {
          font-size: 18px;
          font-weight: 700;
        }

        .publish-platform-subtitle {
          font-size: 14px;
          color: #6a5a86;
          margin-top: 2px;
          line-height: 1.25;
        }

        .publish-platform-check {
          font-size: 18px;
          color: #5b3e88;
          font-weight: 700;
        }

        .publish-card-head {
          padding: 12px 14px;
          font-size: 16px;
          font-weight: 700;
          border-bottom: 1px solid rgba(120, 92, 154, 0.14);
          background: rgba(255, 255, 255, 0.58);
        }

        .publish-preview-inner {
          padding: 12px;
        }

        .publish-preview-platform {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 18px;
          color: #43315f;
          margin-bottom: 12px;
        }

        .mini-facebook-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: #4267b2;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 700;
        }

        .publish-chip-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 12px;
        }

        .publish-chip,
        .publish-bottom-tag {
          background: rgba(225, 214, 241, 0.95);
          color: #5b4a79;
          border: 1px solid #ddd4ea;
          border-radius: 8px;
          padding: 5px 10px;
          font-size: 12px;
        }

        .publish-stats-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 12px;
        }

        .publish-stat-pill {
          background: rgba(196, 178, 223, 0.88);
          color: #5a4778;
          border-radius: 10px;
          padding: 7px 12px;
          font-size: 13px;
        }

        .publish-hint {
          font-size: 12px;
          color: #796d87;
          margin-bottom: 12px;
        }

        .publish-apply-btn {
          width: 100%;
          height: 40px;
          border: none;
          border-radius: 10px;
          background: #6f4d9b;
          color: #fff8ee;
          font-size: 15px;
          cursor: pointer;
        }

        .publish-post-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .publish-post-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
          border-bottom: 1px solid rgba(120, 92, 154, 0.14);
        }

        .publish-post-content {
          padding: 14px;
        }

        .publish-post-title {
          margin: 0 0 10px;
          font-size: 24px;
          color: #3d2c59;
          font-weight: 800;
        }

        .publish-post-caption p {
          margin: 0 0 10px;
          font-size: 14px;
          line-height: 1.5;
          color: #4d3f63;
        }

        .publish-bottom-tags {
          padding: 12px 14px;
          border-top: 1px solid rgba(120, 92, 154, 0.14);
          background: rgba(243, 240, 248, 0.76);
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
        }

        .publish-schedule-card {
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }

        .publish-schedule-head {
          padding: 12px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
          font-weight: 600;
          color: #4e3a76;
          border-bottom: 1px solid rgba(120, 92, 154, 0.14);
          background: rgba(255, 255, 255, 0.58);
        }

        .publish-upnext-title {
          padding: 12px 14px 4px;
          font-size: 18px;
          font-weight: 800;
          color: #33224f;
        }

        .publish-upnext-list {
          padding: 0 0 8px;
        }

        .publish-upnext-item {
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: 10px;
          align-items: center;
          padding: 12px 14px;
          border-bottom: 1px solid rgba(120, 92, 154, 0.12);
        }

        .publish-upnext-thumb {
          width: 72px;
          height: 60px;
          object-fit: cover;
          border-radius: 10px;
        }

        .publish-upnext-name {
          font-size: 18px;
          color: #352650;
          line-height: 1.15;
        }

        .publish-upnext-time {
          margin-top: 4px;
          font-size: 14px;
          color: #6d6080;
        }

        .publish-empty-state {
          padding: 20px 14px;
          font-size: 14px;
          color: #6d6080;
        }

        .publish-schedule-btn {
          margin: 14px;
          margin-top: auto;
          height: 42px;
          border: none;
          border-radius: 12px;
          background: #6f4d9b;
          color: white;
          font-size: 15px;
          cursor: pointer;
        }

        .publish-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 8px;
          background: rgba(255,255,255,0.46);
          border-top: 1px solid rgba(120, 92, 154, 0.16);
        }
        .template-grid {
          display: flex;
          gap: 14px;
          margin-bottom: 18px;
        }

        .template-item {
          text-align: center;
        }

        .template-label {
          margin-top: 8px;
          font-size: 16px;
        }

        .template-card {
          width: 64px;
          height: 74px;
          border-radius: 13px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .reels-bg {
          background: linear-gradient(180deg, #ffb21d, #ff2f7d);
        }

        .story-bg {
          background: #fff;
          border: 1px solid rgba(170, 170, 170, 0.3);
        }

        .post-bg {
          background: linear-gradient(135deg, #b030ff, #f0ae49);
        }

        .vlog-bg {
          background: radial-gradient(circle at 35% 30%, #ffc938, #ff7000 58%, #ff2f65 100%);
        }

        .reels-shape {
          width: 36px;
          height: 42px;
          border: 4px solid #fff;
          border-radius: 10px;
          position: relative;
        }

        .reels-top-lines {
          position: absolute;
          top: -1px;
          left: 3px;
          width: 24px;
          height: 12px;
          border-top: 4px solid #fff;
          border-bottom: 4px solid #fff;
          transform: skewX(35deg);
        }

        .reels-play {
          position: absolute;
          left: 11px;
          top: 13px;
          width: 0;
          height: 0;
          border-left: 12px solid #fff;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
        }

        .story-ring {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: conic-gradient(#ffb01f, #ff6d2d, #ff2f87, #ab39ff, #ffb01f);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .story-inner {
          width: 31px;
          height: 31px;
          border-radius: 50%;
          background: white;
        }

        .story-add {
          position: absolute;
          right: 8px;
          bottom: 10px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ff2d86;
          color: white;
          border: 2px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
        }

        .post-inner {
          width: 38px;
          height: 38px;
          border-radius: 9px;
          border: 1px solid rgba(47, 30, 71, 0.85);
          box-shadow: inset 0 0 8px rgba(255,255,255,0.18);
        }

        .post-add {
          position: absolute;
          inset: 0;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
        }

        .vlog-camera {
          width: 25px;
          height: 20px;
          border: 3px solid white;
          border-radius: 7px;
          position: relative;
        }

        .vlog-top {
          width: 12px;
          height: 4px;
          background: white;
          border-radius: 6px;
          position: absolute;
          top: -6px;
          left: 5px;
        }

        .drafts-title {
          font-size: 18px;
          font-weight: 800;
          padding-top: 10px;
          margin-bottom: 10px;
          border-top: 1px solid rgba(69, 45, 100, 0.9);
        }

        .drafts-card {
          background: rgba(255,255,255,0.58);
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(130, 110, 157, 0.18);
        }

        .draft-row {
          display: grid;
          grid-template-columns: 112px 1fr 28px;
          gap: 10px;
          align-items: center;
          padding: 7px 8px;
          border-bottom: 1px solid rgba(98, 75, 123, 0.4);
        }

        .draft-image {
          width: 112px;
          height: 58px;
          object-fit: cover;
          border-radius: 10px;
        }

        .draft-name {
          font-size: 16px;
          line-height: 1.08;
        }

        .draft-date {
          font-size: 14px;
          line-height: 1.2;
        }

        .draft-type {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
        }

        .edit-btn {
          border: none;
          background: transparent;
          color: #7b5aa9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          cursor: pointer;
        }

        .draft-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 10px;
          background: rgba(255,255,255,0.62);
        }

        .offline-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 17px;
        }

        .offline-check {
          width: 31px;
          height: 22px;
          border-radius: 999px;
          background: #603d8b;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .footer-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-mini-btn {
          border: none;
          background: transparent;
          color: #533b80;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .square-mark {
          width: 10px;
          height: 10px;
          background: #7a658f;
          display: inline-block;
        }

        .brandkit-card {
          background: rgba(250, 247, 250, 0.78);
          border-radius: 14px;
          padding: 12px;
          min-height: 210px;
          margin-top: 6px;
        }

        .brandkit-title {
          font-size: 18px;
          margin-bottom: 8px;
        }

        .brandkit-illustration {
          width: 136px;
          height: 96px;
          margin: 0 auto 10px;
          position: relative;
        }

        .tablet-shape {
          width: 88px;
          height: 54px;
          border-radius: 10px;
          border: 4px solid #7a59a1;
          background: linear-gradient(135deg, #48d2ff, #f24fac, #7e56cf);
          position: absolute;
          left: 24px;
          top: 28px;
          transform: rotate(14deg);
        }

        .pen-shape {
          position: absolute;
          width: 7px;
          height: 82px;
          border-radius: 10px;
          background: linear-gradient(180deg, #96788f, #dcc6c1);
          left: 58px;
          top: 0;
          transform: rotate(-38deg);
        }

        .brandkit-sub,
        .brandkit-link {
          font-size: 15px;
          line-height: 1.25;
        }

        .brandkit-link {
          margin-top: 10px;
        }

        .progress-bar {
          margin-top: 8px;
          height: 10px;
          border-radius: 999px;
          background: #d0ccd2;
          overflow: hidden;
        }

        .progress-fill {
          width: 68%;
          height: 100%;
          background: #8a72b1;
          border-radius: 999px;
        }

        .right-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 6px;
        }

        .flow-card {
          text-align: center;
          width: 150px;
        }

        .flow-box {
          width: 150px;
          height: 84px;
          border-radius: 14px;
          background: rgba(241, 226, 246, 0.78);
          border: 1px solid rgba(127, 94, 169, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: inset 0 0 14px rgba(255,255,255,0.35);
        }

        .flow-icon,
        .flow-hash {
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .flow-label {
          margin-top: 6px;
          font-size: 17px;
          line-height: 1.1;
        }

        .flow-arrow {
          font-size: 56px;
          line-height: 1;
          color: #5e3d8c;
          margin: -2px 0 2px;
        }

        .upgrade-strip {
          margin-top: 8px;
          width: 166px;
          height: 36px;
          border: none;
          border-radius: 12px;
          background: #6f4d9b;
          color: #ffe7bc;
          font-size: 17px;
          cursor: pointer;
        }

        .bottom-buttons {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 10px;
        }

        .trash-button {
          width: 34px;
          height: 34px;
          border: none;
          border-radius: 10px;
          background: rgba(236, 226, 242, 0.92);
          color: #5c3e88;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          cursor: pointer;
        }

        .save-button {
          height: 34px;
          border: none;
          border-radius: 10px;
          padding: 0 14px;
          background: rgba(255,255,255,0.84);
          color: #3d2c59;
          font-size: 15px;
          cursor: pointer;
        }

        .publish-button {
          height: 34px;
          border: none;
          border-radius: 10px;
          padding: 0 14px;
          background: #7a68b5;
          color: white;
          font-size: 15px;
          cursor: pointer;
        }

        .editor-grid,
        .captions-grid,
        .schedule-page-grid {
          display: grid;
          grid-template-columns: 1.6fr 0.68fr;
          gap: 12px;
          padding: 10px 12px 0;
        }

        .editor-title,
        .schedule-title {
          font-size: 24px;
          font-weight: 800;
          margin: 0 0 10px;
        }

        .video-preview-card {
          background: rgba(255,255,255,0.3);
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(120, 92, 154, 0.16);
        }

        .video-preview-image {
          width: 100%;
          height: 290px;
          object-fit: cover;
          display: block;
        }

        .video-controls {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          background: rgba(255,255,255,0.46);
          border-bottom: 1px solid rgba(120, 92, 154, 0.16);
        }

        .play-icon {
          font-size: 18px;
          color: #5a3c88;
          display: flex;
          align-items: center;
        }

        .timeline {
          flex: 1;
          height: 6px;
          background: #b9aed1;
          border-radius: 999px;
          position: relative;
        }

        .timeline-fill {
          width: 42%;
          height: 100%;
          background: #7f69b0;
          border-radius: 999px;
        }

        .time-text {
          font-size: 14px;
          white-space: nowrap;
        }

        .control-icon {
          font-size: 16px;
          display: flex;
          align-items: center;
        }

        .audio-track-card {
          background: rgba(255,255,255,0.52);
          border-top: 1px solid rgba(120, 92, 154, 0.16);
          border-bottom: 1px solid rgba(120, 92, 154, 0.16);
        }

        .audio-row {
          display: grid;
          grid-template-columns: 28px 1fr 28px;
          gap: 10px;
          align-items: center;
          padding: 10px 12px;
        }

        .audio-play {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #613d8b;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
        }

        .audio-info {
          line-height: 1.2;
        }

        .audio-name {
          font-size: 16px;
        }

        .audio-sub {
          font-size: 12px;
          opacity: 0.8;
        }

        .audio-size {
          margin-left: 8px;
          font-size: 13px;
          opacity: 0.75;
        }

        .audio-timeline-row {
          display: grid;
          grid-template-columns: 28px 1fr 38px;
          gap: 10px;
          align-items: center;
          padding: 8px 12px 10px;
          border-top: 1px solid rgba(120, 92, 154, 0.16);
        }

        .mini-play-circle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #613d8b;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .thin-line {
          height: 6px;
          background: #b9aed1;
          border-radius: 999px;
          position: relative;
        }

        .thin-fill {
          width: 88%;
          height: 100%;
          background: #8f7bbb;
          border-radius: 999px;
        }

        .processing-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 8px 12px 12px;
          font-size: 14px;
        }

        .processing-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .retry-btn {
          border: none;
          background: #8a78b7;
          color: white;
          border-radius: 10px;
          padding: 5px 14px;
          cursor: pointer;
        }

        .editor-right-panel,
        .captions-right-panel,
        .schedule-right-panel {
          padding-top: 2px;
        }

        .editor-search,
        .captions-search,
        .schedule-search {
          height: 40px;
          background: rgba(255,255,255,0.72);
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 12px;
          margin-bottom: 10px;
          color: #6a5a86;
        }

        .trending-card,
        .schedule-card,
        .calendar-card,
        .quick-card {
          background: rgba(255,255,255,0.62);
          border-radius: 14px;
          padding: 10px 10px 6px;
          margin-bottom: 12px;
        }

        .right-title {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 8px;
          color: #2f214a;
        }

        .song-row {
          display: grid;
          grid-template-columns: 24px 1fr 24px;
          gap: 8px;
          align-items: center;
          padding: 6px 2px;
        }

        .song-play {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #613d8b;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .song-name {
          font-size: 15px;
          line-height: 1.1;
        }

        .song-sub {
          font-size: 11px;
          opacity: 0.8;
        }

        .song-edit {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7a5ca8;
          font-size: 16px;
        }

        .festival-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .festival-item img {
          width: 100%;
          height: 62px;
          object-fit: cover;
          border-radius: 12px;
          display: block;
        }

        .festival-name {
          font-size: 12px;
          margin-top: 4px;
        }

        .editor-footer,
        .captions-footer,
        .schedule-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10px;
          background: rgba(255,255,255,0.46);
          border-top: 1px solid rgba(120, 92, 154, 0.16);
        }

        .unsaved {
          padding: 10px 12px;
          font-size: 14px;
        }

        .footer-center {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-progress {
          width: 302px;
          height: 8px;
          background: #c8bdd9;
          border-radius: 999px;
          overflow: hidden;
        }

        .footer-progress-fill {
          width: 40%;
          height: 100%;
          background: #7f69b0;
        }

        .save-wrap {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 8px;
        }

        .save-icon-btn {
          width: 28px;
          height: 28px;
          border: none;
          border-radius: 8px;
          background: rgba(236, 226, 242, 0.92);
          color: #5c3e88;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .save-draft-editor {
          height: 34px;
          border: none;
          border-radius: 10px;
          padding: 0 14px;
          background: rgba(255,255,255,0.84);
          color: #3d2c59;
          font-size: 15px;
          cursor: pointer;
        }

        .next-btn {
          height: 34px;
          min-width: 62px;
          border: none;
          border-radius: 10px;
          padding: 0 18px;
          background: #7a68b5;
          color: white;
          font-size: 15px;
          cursor: pointer;
          margin-right: 6px;
        }

        .placeholder-shell {
          padding: 30px;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .placeholder-box {
          background: rgba(255,255,255,0.6);
          border-radius: 18px;
          padding: 40px;
          text-align: center;
          min-width: 280px;
        }

        .placeholder-box h2 {
          margin: 0 0 8px;
        }

        .captions-header {
          padding: 10px 12px 0;
        }

        .captions-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(66, 43, 97, 0.9);
        }

        .captions-title {
          font-size: 24px;
          font-weight: 800;
          margin: 0;
        }

        .captions-left-panel {
          padding-bottom: 0;
        }

        .caption-main-box {
          background: rgba(255,255,255,0.52);
          border-radius: 14px 14px 0 0;
          margin-top: 12px;
          border: 1px solid rgba(120, 92, 154, 0.16);
          overflow: hidden;
        }

        .caption-box-header {
          padding: 12px 14px 6px;
          font-size: 15px;
          color: #5d4b7c;
        }

        .caption-textarea-wrap {
          padding: 0 12px 10px;
        }

        .caption-textarea {
          width: 100%;
          min-height: 126px;
          resize: none;
          border: 1px solid #c5bccf;
          border-radius: 12px;
          padding: 10px 12px;
          font-size: 16px;
          outline: none;
          background: rgba(255,255,255,0.9);
          color: #2a2140;
        }

        .caption-count {
          display: flex;
          justify-content: flex-end;
          padding: 0 14px 8px;
          font-size: 13px;
          color: #5f5478;
        }

        .generate-caption-wrap {
          background: rgba(255,255,255,0.48);
          border-top: 1px solid rgba(120, 92, 154, 0.16);
          border-bottom: 1px solid rgba(120, 92, 154, 0.16);
          padding: 10px 12px;
        }

        .generate-caption-btn {
          width: 100%;
          height: 38px;
          border: none;
          border-radius: 4px;
          background: #5f9062;
          color: white;
          font-size: 15px;
          cursor: pointer;
        }

        .suggestion-box {
          background: rgba(255,255,255,0.52);
          border-bottom: 1px solid rgba(120, 92, 154, 0.16);
          padding: 6px 10px 10px;
        }

        .suggestion-title {
          font-size: 16px;
          margin-bottom: 6px;
        }

        .suggestion-line {
          background: rgba(243, 233, 250, 0.8);
          color: #9f93b8;
          font-size: 12px;
          border-radius: 4px;
          padding: 4px 6px;
          margin-bottom: 6px;
        }

        .tags-box {
          background: rgba(255,255,255,0.52);
          padding: 8px 10px 12px;
          min-height: 110px;
        }

        .tags-title {
          font-size: 16px;
          margin-bottom: 8px;
        }

        .tag-chip-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag-chip {
          background: rgba(243, 240, 248, 0.96);
          color: #5f5478;
          border: 1px solid #ddd4ea;
          border-radius: 4px;
          padding: 4px 8px;
          font-size: 13px;
          cursor: pointer;
        }

        .tag-row {
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 8px;
          align-items: center;
          padding: 6px 0;
        }

        .tag-name {
          font-size: 15px;
        }

        .tag-posts {
          font-size: 12px;
          color: #6e6288;
        }

        .toggle-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #d2d2d2;
        }

        .schedule-left-panel {
          padding-bottom: 0;
        }

        .schedule-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 10px;
        }

        .schedule-stats {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
.publish-preview-icon {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 700;
  flex-shrink: 0;
}
        .stat-pill {
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(120, 92, 154, 0.16);
          border-radius: 999px;
          padding: 8px 12px;
          font-size: 14px;
        }

        .schedule-form-card {
          background: rgba(255,255,255,0.62);
          border-radius: 14px;
          padding: 12px;
          margin-bottom: 12px;
        }

        .schedule-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .schedule-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .schedule-field.full {
          grid-column: 1 / -1;
        }

        .schedule-label {
          font-size: 14px;
          font-weight: 600;
          color: #4a356f;
        }

        .schedule-input,
        .schedule-select {
          height: 40px;
          border: 1px solid #d2c7df;
          border-radius: 10px;
          background: rgba(255,255,255,0.92);
          padding: 0 12px;
          outline: none;
          color: #38284f;
        }

        .schedule-actions-row {
          display: flex;
          justify-content: flex-end;
          margin-top: 12px;
        }

        .schedule-add-btn {
          border: none;
          background: #6f4d9b;
          color: #fff8ee;
          border-radius: 10px;
          padding: 10px 18px;
          cursor: pointer;
          font-size: 14px;
        }

        .schedule-list-card {
          background: rgba(255,255,255,0.62);
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(120, 92, 154, 0.16);
        }

        .schedule-list-head {
          display: grid;
          grid-template-columns: 74px 1.2fr 0.8fr 0.8fr 0.7fr 36px;
          gap: 10px;
          padding: 10px 12px;
          font-size: 13px;
          font-weight: 700;
          background: rgba(244, 236, 250, 0.9);
          border-bottom: 1px solid rgba(120, 92, 154, 0.16);
        }

        .schedule-row {
          display: grid;
          grid-template-columns: 74px 1.2fr 0.8fr 0.8fr 0.7fr 36px;
          gap: 10px;
          align-items: center;
          padding: 10px 12px;
          border-bottom: 1px solid rgba(120, 92, 154, 0.12);
        }

        .schedule-thumb {
          width: 74px;
          height: 50px;
          object-fit: cover;
          border-radius: 10px;
        }

        .schedule-post-title {
          font-size: 15px;
          font-weight: 600;
          color: #322349;
        }

        .schedule-post-sub {
          font-size: 12px;
          color: #6f6287;
          margin-top: 3px;
        }

        .schedule-text {
          font-size: 14px;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 88px;
          height: 28px;
          padding: 0 10px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
        }

        .status-badge.scheduled {
          background: rgba(104, 170, 113, 0.18);
          color: #3d7d45;
        }

        .status-badge.pending {
          background: rgba(255, 184, 77, 0.18);
          color: #9b6500;
        }

        .schedule-delete-btn {
          width: 30px;
          height: 30px;
          border: none;
          border-radius: 8px;
          background: rgba(236, 226, 242, 0.92);
          color: #5c3e88;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .calendar-mini-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        .date-tile {
          border: 1px solid rgba(120, 92, 154, 0.16);
          background: rgba(248,245,252,0.95);
          border-radius: 12px;
          padding: 10px 6px;
          text-align: center;
          cursor: pointer;
        }

        .date-tile.active {
          background: #7a68b5;
          color: white;
        }

        .date-day {
          font-size: 12px;
          opacity: 0.85;
          margin-bottom: 4px;
        }

        .date-number {
          font-size: 18px;
          font-weight: 800;
        }

        .quick-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid rgba(120, 92, 154, 0.12);
          font-size: 14px;
        }

        .quick-row:last-child {
          border-bottom: none;
        }

        .mini-tag {
          background: rgba(243, 240, 248, 0.96);
          color: #5f5478;
          border: 1px solid #ddd4ea;
          border-radius: 999px;
          padding: 5px 10px;
          font-size: 12px;
        }

        @media (max-width: 1100px) {
          .schedule-top {
            flex-direction: column;
            align-items: flex-start;
          }

          .schedule-layout {
            grid-template-columns: 1fr;
          }

          .schedule-side-panel {
            border-left: none;
            border-top: 1px solid rgba(92, 61, 125, 0.14);
          }

          .schedule-month-label {
            min-width: 120px;
          }

          .home-grid,
          .editor-grid,
          .captions-grid,
          .schedule-page-grid {
            grid-template-columns: 1fr;
          }

          .layout {
            grid-template-columns: 1fr;
          }

          .sidebar {
            min-height: auto;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            border-radius: 0 0 12px 12px;
          }

          .sidebar-item {
            justify-content: center;
            padding: 12px 8px;
            font-size: 15px;
          }

          .subnav-center {
            display: none;
          }

          .editor-footer,
          .captions-footer,
          .schedule-footer {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
            padding: 10px;
          }

          .footer-center {
            width: 100%;
            justify-content: space-between;
          }

          .footer-progress {
            flex: 1;
            width: auto;
          }

          .captions-title-row,
          .schedule-toolbar {
            flex-direction: column;
            align-items: stretch;
          }

          .schedule-form-grid,
          .schedule-list-head,
          .schedule-row {
            grid-template-columns: 1fr;
          }

          .schedule-calendar-grid {
            grid-template-columns: repeat(7, 1fr);
          }
            
        }
      `}</style>
    </>
  );
}

function HomeScreen() {
  return (
    <div className="card-shell">
      <div className="section-header">
        <h1>Welcome to Creator Studio</h1>
        <p>Start creating content</p>
      </div>

      <section className="home-grid">
        <div className="left-section">
          <div className="section-title">Start with a template</div>

          <div className="template-grid">
            <div className="template-item">
              <div className="template-card reels-bg">
                <div className="reels-shape">
                  <div className="reels-top-lines"></div>
                  <div className="reels-play"></div>
                </div>
              </div>
              <div className="template-label">Reels</div>
            </div>

            <div className="template-item">
              <div className="template-card story-bg">
                <div className="story-ring">
                  <div className="story-inner"></div>
                </div>
                <div className="story-add">
                  <HiOutlinePlus />
                </div>
              </div>
              <div className="template-label">Story</div>
            </div>

            <div className="template-item">
              <div className="template-card post-bg">
                <div className="post-inner"></div>
                <div className="post-add">
                  <HiOutlinePlus />
                </div>
              </div>
              <div className="template-label">Post</div>
            </div>

            <div className="template-item">
              <div className="template-card vlog-bg">
                <div className="vlog-camera">
                  <div className="vlog-top"></div>
                </div>
              </div>
              <div className="template-label">Vlog</div>
            </div>
          </div>

          <div className="drafts-title">Your Drafts</div>

          <div className="drafts-card">
            {homeDrafts.map((draft, index) => (
              <div className="draft-row" key={index}>
                <img src={draft.image} alt={draft.title} className="draft-image" />
                <div className="draft-info">
                  <div className="draft-name">{draft.title}</div>
                  <div className="draft-date">{draft.date}</div>
                  <div className="draft-type">
                    <HiOutlineVideoCamera />
                    <span>{draft.type}</span>
                  </div>
                </div>
                <button className="edit-btn">
                  <HiOutlinePencil />
                </button>
              </div>
            ))}

            <div className="draft-footer">
              <div className="offline-wrap">
                <div className="offline-check">
                  <HiOutlineCheck />
                </div>
                <span>Offline Drafts (2)</span>
              </div>

              <div className="footer-actions">
                <button className="footer-mini-btn">
                  <HiOutlinePlus />
                </button>
                <span className="square-mark"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="middle-section">
          <div className="brandkit-card">
            <div className="brandkit-title">Brand Kit</div>

            <div className="brandkit-illustration">
              <div className="tablet-shape"></div>
              <div className="pen-shape"></div>
            </div>

            <div className="brandkit-sub">Manage fonts, colors &amp; assets</div>
            <div className="brandkit-link">View Brand Kit</div>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="flow-card">
            <div className="flow-box">
              <span className="flow-icon">
                <HiOutlinePhoto />
              </span>
              <span className="flow-icon">
                <HiOutlineVideoCamera />
              </span>
            </div>
            <div className="flow-label">Edit Photos & Videos</div>
          </div>

          <div className="flow-arrow">↓</div>

          <div className="flow-card">
            <div className="flow-box">
              <span className="flow-icon">
                <HiOutlineBookmark />
              </span>
              <span className="flow-hash">#</span>
            </div>
            <div className="flow-label">Captions & Hashtags</div>
          </div>

          <div className="flow-arrow">↓</div>

          <div className="flow-card">
            <div className="flow-box">
              <span className="flow-icon">
                <HiOutlineBookmark />
              </span>
              <span className="flow-icon">
                <HiOutlineClock />
              </span>
              <span className="flow-icon">
                <HiOutlineShare />
              </span>
            </div>
            <div className="flow-label">Publish Everywhere</div>
          </div>

          <button className="upgrade-strip">🔥 Upgrade •••••••• ›</button>

          <div className="bottom-buttons">
            <button className="trash-button">
              <HiOutlineTrash />
            </button>
            <button className="save-button">Save Draft</button>
            <button className="publish-button">Publish</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function EditorScreen() {
  return (
    <div className="editor-shell">
      <div className="editor-grid">
        <div className="editor-left-panel">
          <h1 className="editor-title">Video Editor</h1>

          <div className="video-preview-card">
            <img
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1400&q=80"
              alt="Video preview"
              className="video-preview-image"
            />

            <div className="video-controls">
              <span className="play-icon">
                <HiOutlinePlay />
              </span>
              <div className="timeline">
                <div className="timeline-fill"></div>
              </div>
              <span className="time-text">00:07.0/00:15.0</span>
              <span className="control-icon">
                <HiOutlinePause />
              </span>
              <span className="control-icon">
                <HiOutlineBars3BottomLeft />
              </span>
            </div>

            <div className="audio-track-card">
              <div className="audio-row">
                <div className="audio-play">
                  <HiOutlinePlay />
                </div>
                <div className="audio-info">
                  <div className="audio-name">
                    Song 1 <span className="audio-size">12.3MB</span>
                  </div>
                  <div className="audio-sub">Singer Name</div>
                </div>
                <button className="edit-btn">
                  <HiOutlineTrash />
                </button>
              </div>

              <div className="audio-timeline-row">
                <div className="mini-play-circle">
                  <HiOutlinePlay />
                </div>
                <div className="thin-line">
                  <div className="thin-fill"></div>
                </div>
                <div className="time-text">00:15</div>
              </div>

              <div className="processing-row">
                <div className="processing-left">
                  <span>✺</span>
                  <span>Processing 46% 56 sec remaining......</span>
                </div>
                <button className="retry-btn">Retry</button>
              </div>
            </div>
          </div>
        </div>

        <div className="editor-right-panel">
          <div className="editor-search">
            <HiOutlineMagnifyingGlass />
            <span>Search</span>
          </div>

          <div className="trending-card">
            <div className="right-title">Trending Songs</div>

            {trendingSongs.map((song) => (
              <div className="song-row" key={song}>
                <div className="song-play">
                  <HiOutlinePlay />
                </div>
                <div>
                  <div className="song-name">{song}</div>
                  <div className="song-sub">Singer Name</div>
                </div>
                <div className="song-edit">
                  <HiOutlinePencil />
                </div>
              </div>
            ))}
          </div>

          <div className="trending-card">
            <div className="right-title">Cultural Filters</div>

            <div className="festival-grid">
              {festivals.map((item) => (
                <div className="festival-item" key={item.name}>
                  <img src={item.image} alt={item.name} />
                  <div className="festival-name">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="editor-footer">
        <div className="unsaved">Unsaved Changes</div>

        <div className="footer-center">
          <div className="footer-progress">
            <div className="footer-progress-fill"></div>
          </div>

          <div className="save-wrap">
            <button className="save-icon-btn">
              <HiOutlineTrash />
            </button>
            <button className="save-draft-editor">Save Draft</button>
          </div>
        </div>

        <button className="next-btn">Next</button>
      </div>
    </div>
  );
}

function CaptionsScreen({ captionText, setCaptionText }) {
  return (
    <div className="captions-shell">
      <div className="captions-header">
        <div className="captions-title-row">
          <h1 className="captions-title">Captions & Hashtags</h1>

          <div className="captions-search">
            <HiOutlineMagnifyingGlass />
            <span>Search</span>
          </div>
        </div>
      </div>

      <div className="captions-grid">
        <div className="captions-left-panel">
          <div className="caption-main-box">
            <div className="caption-box-header">Suggested Caption</div>

            <div className="caption-textarea-wrap">
              <textarea
                className="caption-textarea"
                value={captionText}
                onChange={(e) => setCaptionText(e.target.value)}
              />
            </div>

            <div className="caption-count">{captionText.length}/2000</div>
          </div>

          <div className="generate-caption-wrap">
            <button className="generate-caption-btn">
              Generate More Captions
            </button>
          </div>

          <div className="suggestion-box">
            <div className="suggestion-title">Suggestions</div>
            <div className="suggestion-line">
              ✨ New year, new vibes, and endless blessings — Happy Ugadi!
            </div>
            <div className="suggestion-line">
              🌿 Celebrating tradition, positivity, and the beauty of new beginnings.
            </div>
          </div>

          <div className="tags-box">
            <div className="tags-title">Click to add tags to the caption above</div>

            <div className="tag-chip-wrap">
              {captionTags.map((tag) => (
                <button key={tag} className="tag-chip">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="captions-right-panel">
          <div className="trending-card">
            <div className="right-title">Trending Tags</div>

            {trendingTags.map((tag) => (
              <div className="tag-row" key={tag.name}>
                <div className="tag-name">{tag.name}</div>
                <div className="tag-posts">{tag.posts}</div>
                <div className="toggle-dot"></div>
              </div>
            ))}
          </div>

          <div className="trending-card">
            <div className="right-title">Cultural Filters</div>

            <div className="festival-grid">
              {festivals.map((item) => (
                <div className="festival-item" key={item.name}>
                  <img src={item.image} alt={item.name} />
                  <div className="festival-name">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="captions-footer">
        <div className="unsaved">Unsaved Changes</div>

        <div className="footer-center">
          <div className="footer-progress">
            <div className="footer-progress-fill"></div>
          </div>

          <div className="save-wrap">
            <button className="save-icon-btn">
              <HiOutlineTrash />
            </button>
            <button className="save-draft-editor">Save Draft</button>
          </div>
        </div>

        <button className="next-btn">Next</button>
      </div>
    </div>
  );
}

function ScheduleScreen({
  schedulePosts,
  selectedDate,
  setSelectedDate,
  scheduleForm,
  setScheduleForm,
  addSchedulePost,
  deleteSchedulePost,
}) {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const formatLocalDate = (date) => {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const selected = new Date(selectedDate);
  const currentYear = selected.getFullYear();
  const currentMonth = selected.getMonth();

  const monthLabel = selected.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const filteredPosts = schedulePosts.filter(
    (item) => item.date === selectedDate
  );

  const changeMonth = (offset) => {
    const newDate = new Date(currentYear, currentMonth + offset, 1);
    const formatted = formatLocalDate(newDate);
    setSelectedDate(formatted);
    setScheduleForm((prev) => ({
      ...prev,
      date: formatted,
    }));
  };

  const generateCalendarDays = (year, month) => {
    const firstDayOfMonth = new Date(year, month, 1);
    const firstWeekDay = firstDayOfMonth.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const calendarDays = [];

    for (let i = firstWeekDay - 1; i >= 0; i--) {
      const date = new Date(year, month - 1, daysInPrevMonth - i);
      calendarDays.push({
        day: weekDays[date.getDay()],
        date: formatLocalDate(date),
        num: date.getDate(),
        otherMonth: true,
        isToday: formatLocalDate(date) === formatLocalDate(new Date()),
      });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      calendarDays.push({
        day: weekDays[date.getDay()],
        date: formatLocalDate(date),
        num: day,
        otherMonth: false,
        isToday: formatLocalDate(date) === formatLocalDate(new Date()),
      });
    }

    const remainingCells = 42 - calendarDays.length;

    for (let day = 1; day <= remainingCells; day++) {
      const date = new Date(year, month + 1, day);
      calendarDays.push({
        day: weekDays[date.getDay()],
        date: formatLocalDate(date),
        num: day,
        otherMonth: true,
        isToday: formatLocalDate(date) === formatLocalDate(new Date()),
      });
    }

    return calendarDays;
  };

  const dateTiles = generateCalendarDays(currentYear, currentMonth);

  const handleTileClick = (tileDate) => {
    setSelectedDate(tileDate);
    setScheduleForm((prev) => ({
      ...prev,
      date: tileDate,
    }));
  };

  return (
    <div className="schedule-shell">
      <div className="section-header">
        <h1>Schedule Content</h1>
        <p>Plan and manage upcoming posts</p>
      </div>

      <div className="schedule-page-grid">
        <div className="schedule-left-panel">
          <div className="schedule-toolbar">
            <h1 className="schedule-title">Content Planner</h1>

            <div className="schedule-stats">
              <div className="stat-pill">Total: {schedulePosts.length}</div>
              <div className="stat-pill">
                Scheduled:{" "}
                {
                  schedulePosts.filter((item) => item.status === "Scheduled")
                    .length
                }
              </div>
              <div className="stat-pill">
                Pending:{" "}
                {schedulePosts.filter((item) => item.status === "Pending").length}
              </div>
            </div>
          </div>

          <div className="schedule-form-card">
            <div className="right-title">Create Schedule</div>

            <div className="schedule-form-grid">
              <div className="schedule-field full">
                <label className="schedule-label">Post Title</label>
                <input
                  className="schedule-input"
                  value={scheduleForm.title}
                  onChange={(e) =>
                    setScheduleForm((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="schedule-field">
                <label className="schedule-label">Content Type</label>
                <select
                  className="schedule-select"
                  value={scheduleForm.type}
                  onChange={(e) =>
                    setScheduleForm((prev) => ({
                      ...prev,
                      type: e.target.value,
                    }))
                  }
                >
                  <option>Reel</option>
                  <option>Post</option>
                  <option>Story</option>
                  <option>Vlog</option>
                </select>
              </div>

              <div className="schedule-field">
                <label className="schedule-label">Platform</label>
                <select
                  className="schedule-select"
                  value={scheduleForm.platform}
                  onChange={(e) =>
                    setScheduleForm((prev) => ({
                      ...prev,
                      platform: e.target.value,
                    }))
                  }
                >
                  <option>Instagram</option>
                  <option>Facebook</option>
                  <option>YouTube</option>
                  <option>LinkedIn</option>
                </select>
              </div>

              <div className="schedule-field">
                <label className="schedule-label">Date</label>
                <input
                  type="date"
                  className="schedule-input"
                  value={scheduleForm.date}
                  onChange={(e) =>
                    setScheduleForm((prev) => ({
                      ...prev,
                      date: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="schedule-field">
                <label className="schedule-label">Time</label>
                <input
                  type="time"
                  className="schedule-input"
                  value={scheduleForm.time}
                  onChange={(e) =>
                    setScheduleForm((prev) => ({
                      ...prev,
                      time: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div className="schedule-actions-row">
              <button className="schedule-add-btn" onClick={addSchedulePost}>
                Add to Schedule
              </button>
            </div>
          </div>

          <div className="schedule-top">
            <div>
              <h2 className="schedule-title">Monthly Calendar</h2>
              <p className="schedule-subtitle">
                Select a date to view scheduled content
              </p>
            </div>

            <div className="schedule-actions">
              <button
                className="schedule-nav-btn"
                onClick={() => changeMonth(-1)}
              >
                Prev
              </button>

              <div className="schedule-month-label">{monthLabel}</div>

              <button
                className="schedule-nav-btn"
                onClick={() => changeMonth(1)}
              >
                Next
              </button>
            </div>
          </div>

          <div className="schedule-layout">
            <div className="schedule-calendar-wrap">
              <div className="schedule-weekdays">
                {weekDays.map((day) => (
                  <div key={day} className="schedule-weekday-cell">
                    {day}
                  </div>
                ))}
              </div>

              <div className="schedule-calendar-grid">
                {dateTiles.map((tile) => {
                  const isSelected = tile.date === selectedDate;
                  const isWeekend = tile.day === "Sun" || tile.day === "Sat";

                  const dayPosts = schedulePosts.filter(
                    (item) => item.date === tile.date
                  );

                  return (
                    <button
                      key={tile.date}
                      className={`schedule-cell 
                        ${tile.otherMonth ? "other-month-cell" : ""}
                        ${isWeekend ? "weekend-cell" : ""}
                        ${tile.isToday ? "today-cell" : ""}
                        ${isSelected ? "selected-cell" : ""}
                      `}
                      onClick={() => handleTileClick(tile.date)}
                    >
                      <div className="schedule-cell-head">
                        <span
                          className={`schedule-date-number ${
                            tile.isToday ? "today-date-badge" : ""
                          }`}
                        >
                          {tile.num}
                        </span>
                      </div>

                      <div className="schedule-events-stack">
                        {dayPosts.slice(0, 2).map((post) => (
                          <div
                            key={post.id}
                            className={`schedule-event-pill ${
                              post.status === "Scheduled" ? "post" : "birthday"
                            }`}
                          >
                            <div className="schedule-event-title">
                              {post.title}
                            </div>
                            <div className="schedule-event-time">
                              {post.time}
                            </div>
                          </div>
                        ))}

                        {dayPosts.length > 2 && (
                          <div className="schedule-more-link">
                            +{dayPosts.length - 2} more
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="schedule-side-panel">
              <div className="schedule-side-title">
                Events on {selectedDate}
              </div>

              {filteredPosts.length > 0 ? (
                filteredPosts.map((item) => (
                  <div key={item.id} className="schedule-side-item">
                    <div
                      className={`schedule-side-bar ${
                        item.status === "Scheduled" ? "post" : "birthday"
                      }`}
                    ></div>

                    <div>
                      <div className="schedule-side-item-title">
                        {item.title}
                      </div>
                      <div className="schedule-side-item-date">
                        {item.platform} • {item.time} • {item.status}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="schedule-side-item">
                  <div className="schedule-side-bar holiday"></div>
                  <div>
                    <div className="schedule-side-item-title">
                      No posts scheduled
                    </div>
                    <div className="schedule-side-item-date">
                      Try adding a new post for this day
                    </div>
                  </div>
                </div>
              )}

              <button
                className="schedule-post-btn"
                onClick={() =>
                  setScheduleForm((prev) => ({
                    ...prev,
                    date: selectedDate,
                  }))
                }
              >
                Use Selected Date
              </button>
            </div>
          </div>

          <div className="schedule-list-card">
            <div className="schedule-list-head">
              <div>Preview</div>
              <div>Post</div>
              <div>Platform</div>
              <div>Date & Time</div>
              <div>Status</div>
              <div></div>
            </div>

            {(filteredPosts.length ? filteredPosts : schedulePosts).map((item) => (
              <div className="schedule-row" key={item.id}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="schedule-thumb"
                />

                <div>
                  <div className="schedule-post-title">{item.title}</div>
                  <div className="schedule-post-sub">{item.type}</div>
                </div>

                <div className="schedule-text">{item.platform}</div>

                <div className="schedule-text">
                  <div>{item.date}</div>
                  <div>{item.time}</div>
                </div>

                <div>
                  <span
                    className={`status-badge ${
                      item.status === "Scheduled" ? "scheduled" : "pending"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <button
                  className="schedule-delete-btn"
                  onClick={() => deleteSchedulePost(item.id)}
                >
                  <HiOutlineTrash />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="schedule-right-panel">
          <div className="schedule-search">
            <HiOutlineMagnifyingGlass />
            <span>Search schedules</span>
          </div>

          <div className="calendar-card">
            <div className="right-title">Selected Date</div>
            <div className="quick-row">
              <span>Chosen day</span>
              <span className="mini-tag">{selectedDate}</span>
            </div>
            <div className="quick-row">
              <span>Current month</span>
              <span className="mini-tag">{monthLabel}</span>
            </div>
          </div>

          <div className="quick-card">
            <div className="right-title">Quick Insights</div>
            <div className="quick-row">
              <span>Best time</span>
              <span className="mini-tag">09:00 AM</span>
            </div>
            <div className="quick-row">
              <span>Top platform</span>
              <span className="mini-tag">Instagram</span>
            </div>
            <div className="quick-row">
              <span>Posts on selected day</span>
              <span className="mini-tag">{filteredPosts.length}</span>
            </div>
          </div>

          <div className="trending-card">
            <div className="right-title">Content Ideas</div>
            <div className="tag-chip-wrap">
              <button className="tag-chip">Festival Morning Reel</button>
              <button className="tag-chip">Behind The Scenes</button>
              <button className="tag-chip">Recipe Post</button>
              <button className="tag-chip">Workout Tip</button>
              <button className="tag-chip">Brand Story</button>
            </div>
          </div>
        </div>
      </div>

      <div className="schedule-footer">
        <div className="unsaved">Schedule Changes</div>

        <div className="footer-center">
          <div className="footer-progress">
            <div className="footer-progress-fill"></div>
          </div>

          <div className="save-wrap">
            <button className="save-icon-btn">
              <HiOutlineTrash />
            </button>
            <button className="save-draft-editor">Save Draft</button>
          </div>
        </div>

        <button className="next-btn">Next</button>
      </div>
    </div>
  );
}

function Placeholder({ title }) {
  return (
    <div className="placeholder-shell">
      <div className="placeholder-box">
        <h2>{title}</h2>
        <p>This section is ready for your next update.</p>
      </div>
    </div>
  );
}
function PublishScreen({
  schedulePosts,
  captionText,
  selectedDate,
  setActiveTab,
}) {
  const [selectedPlatform, setSelectedPlatform] = useState("Facebook");

  const publishPlatforms = [
    {
      name: "Facebook",
      subtitle: "Kannada Buzz News & Media Website",
      icon: "f",
      colorClass: "facebook-platform",
    },
    {
      name: "Instagram",
      subtitle: "Personal Account",
      icon: "◎",
      colorClass: "instagram-platform",
    },
  ];

  const previewTags = ["#Festive", "#Ugadi", "#UgadiFestival"];

  const upcomingPosts = schedulePosts
    .filter((item) => item.date >= selectedDate)
    .sort((a, b) => {
      const aDate = `${a.date}T${a.time}`;
      const bDate = `${b.date}T${b.time}`;
      return new Date(aDate) - new Date(bDate);
    })
    .slice(0, 3);

  return (
    <div className="publish-shell">
      <div className="section-header">
        <h1>Multi-Platform Publishing</h1>
        <p>Share your Ugadi Highlights Reel</p>
      </div>

      <div className="publish-grid">
        <div className="publish-left-panel">
          <div className="publish-platforms-card">
            {publishPlatforms.map((platform) => (
              <button
                key={platform.name}
                className={`publish-platform-item ${
                  selectedPlatform === platform.name ? "active" : ""
                }`}
                onClick={() => setSelectedPlatform(platform.name)}
              >
                <div className="publish-platform-main">
                  <div
                    className={`publish-platform-icon ${platform.colorClass}`}
                  >
                    {platform.icon}
                  </div>

                  <div className="publish-platform-text">
                    <div className="publish-platform-name">{platform.name}</div>
                    <div className="publish-platform-subtitle">
                      {platform.subtitle}
                    </div>
                  </div>
                </div>

                {selectedPlatform === platform.name && (
                  <span className="publish-platform-check">✓</span>
                )}
              </button>
            ))}
          </div>

          <div className="publish-preview-card">
            <div className="publish-card-head">Content Preview</div>

            <div className="publish-preview-inner">
             <div className="publish-preview-platform">
  <div
    className={`publish-preview-icon ${
      selectedPlatform === "Instagram"
        ? "instagram-platform"
        : "facebook-platform"
    }`}
  >
    {selectedPlatform === "Instagram" ? "◎" : "f"}
  </div>
  <span>{selectedPlatform}</span>
</div>

              <div className="publish-chip-wrap">
                {previewTags.map((tag) => (
                  <span key={tag} className="publish-chip">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="publish-stats-row">
                <span className="publish-stat-pill">743K posts</span>
                <span className="publish-stat-pill">+3.5k Likes</span>
              </div>

              <div className="publish-hint">
                Click to add tags to caption above
              </div>

              <button className="publish-apply-btn">Apply Hashtags</button>
            </div>
          </div>
        </div>

        <div className="publish-center-panel">
          <div className="publish-post-card">
            <img
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1200&q=80"
              alt="Ugadi Highlights"
              className="publish-post-image"
            />

            <div className="publish-post-content">
              <h2 className="publish-post-title">Ugadi Highlights</h2>

              <div className="publish-post-caption">
                {captionText.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>

            <div className="publish-bottom-tags">
              {previewTags.map((tag) => (
                <span key={tag} className="publish-bottom-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="publish-right-panel">
          <div className="publish-schedule-card">
            <div className="publish-schedule-head">
              <span>April 2026</span>
              <span>&lt; &gt;</span>
            </div>

            <div className="publish-upnext-title">Up Next</div>

            <div className="publish-upnext-list">
              {upcomingPosts.length > 0 ? (
                upcomingPosts.map((post) => (
                  <div className="publish-upnext-item" key={post.id}>
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="publish-upnext-thumb"
                    />

                    <div className="publish-upnext-info">
                      <div className="publish-upnext-name">{post.title}</div>
                      <div className="publish-upnext-time">
                        {post.date} • {post.time}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="publish-empty-state">
                  No scheduled posts available
                </div>
              )}
            </div>

            <button
              className="publish-schedule-btn"
              onClick={() => setActiveTab("schedule")}
            >
              + Schedule Post
            </button>
          </div>
        </div>
      </div>

      <div className="publish-footer">
        <div className="unsaved">Ready to Publish</div>

        <div className="footer-center">
          <div className="footer-progress">
            <div
              className="footer-progress-fill"
              style={{ width: "100%" }}
            ></div>
          </div>

          <div className="save-wrap">
            <button className="save-draft-editor">Save Draft</button>
          </div>
        </div>

        <button className="next-btn">Publish Now</button>
      </div>
    </div>
  );
}