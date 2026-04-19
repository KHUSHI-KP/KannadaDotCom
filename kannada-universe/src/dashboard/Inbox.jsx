import React, { useState } from 'react';
import './Inbox.css';
import { IoArrowBack } from 'react-icons/io5';
import { MdCheckCircle } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ChatDetail from './ChatDetail';

function ContactAvatar({ src, alt, className }) {
  const [hasError, setHasError] = useState(!src);

  if (hasError) {
    return (
      <div className={`${className} avatar-fallback-full`} aria-label={alt}>
        <FaRegUserCircle />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}

const Inbox = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Priya Vasanth',
      avatar: 'https://via.placeholder.com/48',
      verified: true,
      message:
        'Hi we have an upcomim event and need to place an order. Can you provide a quote?',
      timeAgo: '6 min ago',
      platform: 'whatsapp',
      category: 'priority',
      priority: true,
      conversationMessages: [
        {
          id: 1,
          sender: 'Priya Vasanth',
          avatar: 'https://via.placeholder.com/40',
          message: 'Can i get more info... on this product ?',
          timestamp: '6 min ago',
          isUser: true,
        },
        {
          id: 2,
          sender: 'Priya Vasanth',
          avatar: 'https://via.placeholder.com/40',
          message: 'Price of the product ?',
          timestamp: '5 min ago',
          isUser: true,
        },
      ],
    },
    {
      id: 2,
      name: 'Krish Saraf',
      avatar: '',
      verified: true,
      message: 'Hello can you tell me the price of the silk saree?',
      timeAgo: '23 min ago',
      platform: 'whatsapp',
      category: 'general',
      conversationMessages: [
        {
          id: 1,
          sender: 'Krish Saraf',
          avatar: '',
          message: 'Hello can you tell me the price of the silk saree?',
          timestamp: '23 min ago',
          isUser: true,
        },
      ],
    },
    {
      id: 3,
      name: 'Bindu Murthy',
      avatar: '',
      verified: true,
      message: 'Hi what are your delivery timings to Malleshwaram.',
      timeAgo: '36 min ago',
      platform: 'instagram',
      category: 'general',
      conversationMessages: [],
    },
    {
      id: 4,
      name: 'Aisha',
      avatar: 'https://via.placeholder.com/48',
      verified: true,
      message: 'Wanna do a collab promotion?',
      timeAgo: '40 min ago',
      platform: 'instagram',
      category: 'priority',
      priority: true,
      conversationMessages: [],
    },
    {
      id: 5,
      name: 'Priyank',
      avatar: '',
      verified: true,
      message: 'Do you take cash on delivery?',
      timeAgo: '46 min ago',
      platform: 'facebook',
      category: 'general',
      conversationMessages: [],
    },
    {
      id: 6,
      name: 'Naiman',
      avatar: '',
      verified: true,
      message: "What's your return policy?",
      timeAgo: '1 hr ago',
      platform: 'facebook',
      category: 'general',
      conversationMessages: [],
    },
  ]);

  const [platformBreakdown] = useState([
    { name: 'WhatsApp Business', count: 6, icon: '💬' },
    { name: 'Instagram DM', count: 30, icon: '📷' },
    { name: 'Facebook Messenger', count: 8, icon: '👥' },
  ]);

  const filterMessages = () =>
    messages.filter((msg) => {
      let tabMatch = true;
      let platformMatch = true;
      let categoryMatch = true;

      if (activeTab === 'priority') {
        tabMatch = msg.priority;
      } else if (activeTab === 'new') {
        tabMatch = msg.isNew;
      }

      if (selectedPlatform !== 'all') {
        platformMatch = msg.platform === selectedPlatform;
      }

      if (selectedCategory !== 'all') {
        categoryMatch = msg.category === selectedCategory;
      }

      return tabMatch && platformMatch && categoryMatch;
    });

  const filteredMessages = filterMessages();

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  const handleSendMessage = (messageText) => {
    if (selectedChat && messageText.trim()) {
      const updatedMessages = messages.map((msg) => {
        if (msg.id === selectedChat.id) {
          return {
            ...msg,
            conversationMessages: [
              ...msg.conversationMessages,
              {
                id: msg.conversationMessages.length + 1,
                sender: 'You',
                avatar: '',
                message: messageText,
                timestamp: 'now',
                isUser: false,
              },
            ],
          };
        }
        return msg;
      });
      setMessages(updatedMessages);
      setSelectedChat(updatedMessages.find((m) => m.id === selectedChat.id));
    }
  };

  const handleTabClick = (tabName) => {
    if (tabName === 'new') {
      navigate('/dashboard/automation');
    } else {
      setActiveTab(tabName);
    }
  };

  return (
    <div className="inbox-full-container">
      <div className="inbox-header-full">
        <div className="header-top-full">
          <button
            onClick={() => navigate(-1)}
            className="back-icon-btn"
            title="Go back"
          >
            <IoArrowBack />
          </button>
          <h1 className="inbox-title">Unified Social Inbox</h1>
          <div className="header-right-full">
            <MdCheckCircle className="verify-icon-full" />
            <button
              className="upgrade-btn-full"
              onClick={() => navigate('/dashboard/automation')}
            >
              Upgrade
            </button>
          </div>
        </div>
      </div>

      <div className="inbox-content-full">
        <div className="sidebar-full">
          <div className="tab-section-full">
            {[
              { label: 'All', icon: '📧' },
              { label: 'New', icon: '⭐' },
              { label: 'Priority', icon: '🔔' },
              { label: 'Assigned', icon: '✓' },
              { label: 'Waiting', icon: '⏳' },
            ].map((tab) => (
              <button
                key={tab.label}
                className={`sidebar-tab-full ${
                  activeTab === tab.label.toLowerCase() ? 'active' : ''
                }`}
                onClick={() => handleTabClick(tab.label.toLowerCase())}
              >
                <span className="tab-icon-full">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="main-content-area-full">
          {selectedChat ? (
            <ChatDetail
              chat={selectedChat}
              onClose={() => setSelectedChat(null)}
              onSendMessage={handleSendMessage}
            />
          ) : (
            <>
              <div className="tabs-navigation-full">
                {[
                  { label: 'All', icon: '📧' },
                  { label: 'New', icon: '➕' },
                  { label: 'Priority', icon: '⚡' },
                  { label: 'Assigned', icon: '📌' },
                  { label: 'Waiting', icon: '⬇️' },
                ].map((tab) => (
                  <button
                    key={tab.label}
                    className={`tab-btn-full ${
                      activeTab === tab.label.toLowerCase() ? 'active' : ''
                    }`}
                    onClick={() => handleTabClick(tab.label.toLowerCase())}
                  >
                    {tab.icon} {tab.label}
                  </button>
                ))}
                <div className="more-options-full">⋯</div>
              </div>

              <div className="filters-section-full">
                <div className="filter-group-full">
                  <label>All Platforms</label>
                  <select
                    value={selectedPlatform}
                    onChange={(e) => setSelectedPlatform(e.target.value)}
                    className="filter-select-full"
                  >
                    <option value="all">All Platforms ▼</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                  </select>
                </div>

                <div className="filter-group-full">
                  <label>All Categories</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="filter-select-full"
                  >
                    <option value="all">All Categories ▼</option>
                    <option value="priority">Priority</option>
                    <option value="general">General</option>
                  </select>
                </div>

                <div className="time-display-full">6 min</div>
              </div>

              <div className="messages-list-full">
                {filteredMessages.length > 0 ? (
                  filteredMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className="message-item-full"
                      onClick={() => handleChatClick(msg)}
                    >
                      <ContactAvatar
                        src={msg.avatar}
                        alt={msg.name}
                        className="avatar-full"
                      />

                      <div className="message-content-full">
                        <div className="message-header-full">
                          <h3 className="sender-name-full">
                            {msg.name}
                            {msg.verified && (
                              <span className="verified-badge-full">✓</span>
                            )}
                          </h3>
                          {msg.priority && (
                            <span className="priority-badge-full">Priority</span>
                          )}
                        </div>
                        <p className="message-text-full">{msg.message}</p>
                      </div>
                      <div className="message-time-full">{msg.timeAgo}</div>
                    </div>
                  ))
                ) : (
                  <div className="no-messages-full">No messages found</div>
                )}
              </div>
            </>
          )}
        </div>

        {!selectedChat && (
          <div className="right-sidebar-full">
            <div className="platform-breakdown-full">
              <h3>Platform Breakdown</h3>
              <div className="more-icon-full">⋯</div>
            </div>

            {platformBreakdown.map((platform, index) => (
              <div key={index} className="platform-item-full">
                <span className="platform-icon-full">{platform.icon}</span>
                <span className="platform-name-full">{platform.name}</span>
                <span className="platform-count-full">{platform.count}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Inbox;
