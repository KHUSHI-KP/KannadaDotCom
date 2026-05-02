import React, { useState } from 'react';
import './ChatDetail.css';
import { IoArrowBack } from 'react-icons/io5';
import { FaRegUserCircle } from 'react-icons/fa';

function MessageAvatar({ src, alt, className }) {
  const [hasError, setHasError] = useState(!src);

  if (hasError) {
    return (
      <div className={`${className} message-avatar-fallback`} aria-label={alt}>
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

const ChatDetail = ({ chat, onClose, onSendMessage }) => {
  const [replyText, setReplyText] = useState('');
  const [autoReplyEnabled, setAutoReplyEnabled] = useState(true);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  const smartSuggestions = [
    'Yes, i can get you the quote for the saree.',
    'How many sarees would you like to order?',
    'Our prices start from ₹ 2,500 per saree',
  ];

  const quickReplies = [
    { id: 1, text: "Sure, I'll get on it !" },
    { id: 2, text: 'Can you share some details?' },
  ];

  const handleSendMessage = () => {
    if (replyText.trim()) {
      onSendMessage(replyText);
      setReplyText('');
      setSelectedSuggestion(null);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setReplyText(suggestion);
    setSelectedSuggestion(suggestion);
  };

  const handleSelectQuickReply = (reply) => {
    setReplyText(reply.text);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!chat) return null;

  return (
    <div className="chat-detail-container">
      <div className="chat-header">
        <button className="chat-back-btn" onClick={onClose}>
          <IoArrowBack />
        </button>
        <div className="chat-header-info">
          <h2 className="chat-contact-name">{chat.name}</h2>
          <span className="chat-timestamp">{chat.timeAgo}</span>
        </div>
        <div className="chat-header-actions">
          <button className="chat-action-btn">⋮</button>
        </div>
      </div>

      <div className="chat-content-wrapper">
        <div className="chat-messages-area">
          <div className="messages-list">
            {chat.conversationMessages && chat.conversationMessages.length > 0 ? (
              chat.conversationMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`message-wrapper ${
                    msg.isUser ? 'user-message' : 'bot-message'
                  }`}
                >
                  {msg.isUser && (
                    <MessageAvatar
                      src={msg.avatar}
                      alt={msg.sender}
                      className="message-avatar"
                    />
                  )}
                  <div
                    className={`message-bubble ${
                      msg.isUser ? 'user-bubble' : 'bot-bubble'
                    }`}
                  >
                    {msg.message}
                  </div>
                  {!msg.isUser && (
                    <MessageAvatar
                      src={msg.avatar}
                      alt={msg.sender}
                      className="message-avatar"
                    />
                  )}
                </div>
              ))
            ) : (
              <div className="no-conversation">Start a conversation</div>
            )}
          </div>

          <div className="smart-suggestions-section">
            <h3 className="smart-suggestions-title">Smart reply suggestion</h3>
            <div className="suggestions-list">
              {smartSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className={`suggestion-btn ${
                    selectedSuggestion === suggestion ? 'active' : ''
                  }`}
                  onClick={() => handleSelectSuggestion(suggestion)}
                >
                  {suggestion}
                  <span className="suggestion-arrow">›</span>
                </button>
              ))}
            </div>
          </div>

          <div className="auto-reply-section">
            <div className="auto-reply-header">
              <h3 className="auto-reply-title">Auto-Reply</h3>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={autoReplyEnabled}
                  onChange={(e) => setAutoReplyEnabled(e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            {autoReplyEnabled && (
              <div className="quick-replies-list">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.id}
                    className="quick-reply-btn"
                    onClick={() => handleSelectQuickReply(reply)}
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="reply-input-section">
          <textarea
            className="reply-textarea"
            placeholder="Write a reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            onKeyDown={handleKeyDown}
            rows="3"
          />
          <button className="send-btn" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
