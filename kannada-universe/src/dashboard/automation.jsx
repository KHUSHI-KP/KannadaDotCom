import React, { useState } from 'react';
import './Automation.css';
import { IoArrowBack } from 'react-icons/io5';
import { MdCheckCircle } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Automation = () => {
  const navigate = useNavigate();
  const [rules, setRules] = useState([
    {
      id: 1,
      name: 'Delivery Inquiries',
      platform: 'whatsapp',
      keywords: ['delivery timing >'],
      responseTemplate: 'Our standard delivery takes 2-3 days. Where would you like us to deliver?',
      enabled: true,
      platforms: ['WhatsApp Business'],
      events: ['auto_responder_created', 'auto_responder_triggered']
    },
    {
      id: 2,
      name: 'Delivery Inquiries',
      platform: 'whatsapp',
      keywords: ['discount, offer >'],
      responseTemplate: 'Sure, we have a limited-time discount. What are you interested in?',
      enabled: true,
      platforms: ['WhatsApp Business'],
      events: ['auto_responder_created', 'auto_responder_triggered']
    },
    {
      id: 3,
      name: 'Price Request',
      platform: 'multi',
      keywords: ['price,cost >'],
      responseTemplate: '',
      enabled: true,
      platforms: ['WhatsApp', 'Instagram', 'Add'],
      events: ['auto_responder_created', 'auto_responder_triggered']
    },
    {
      id: 4,
      name: 'Store Hours',
      platform: 'instagram',
      keywords: ['price,cost >'],
      responseTemplate: '',
      enabled: true,
      platforms: ['WhatsApp', 'Add'],
      events: ['auto_responder_created', 'auto_responder_triggered']
    }
  ]);

  const [showNewRule, setShowNewRule] = useState(false);
  const [newRule, setNewRule] = useState({
    keywords: [''],
    responseTemplate: '',
    targetMinutes: 30,
    avgResponseTime: 19
  });

  const handleToggleRule = (id) => {
    setRules(rules.map(rule => 
      rule.id === id ? { ...rule, enabled: !rule.enabled } : rule
    ));
  };

  const handleAddKeyword = () => {
    setNewRule({
      ...newRule,
      keywords: [...newRule.keywords, '']
    });
  };

  const handleKeywordChange = (index, value) => {
    const updatedKeywords = [...newRule.keywords];
    updatedKeywords[index] = value;
    setNewRule({ ...newRule, keywords: updatedKeywords });
  };

  const handleCreateRule = () => {
    console.log('Creating rule:', newRule);
    setShowNewRule(false);
    setNewRule({
      keywords: [''],
      responseTemplate: '',
      targetMinutes: 30,
      avgResponseTime: 19
    });
  };

  const getPlatformIcon = (platform) => {
    if (platform === 'whatsapp') return '💬';
    if (platform === 'instagram') return '📷';
    if (platform === 'facebook') return '👥';
    return '⚙️';
  };

  return (
    <div className="automation-full-page">
      {/* Navbar */}
      <div className="automation-navbar">
        <div className="navbar-left">
          <img src="https://via.placeholder.com/40" alt="Logo" className="navbar-logo" />
          <input 
            type="text" 
            placeholder="Search for businesses, creators or events..." 
            className="navbar-search"
          />
          <button className="navbar-search-btn">Search</button>
        </div>
        <div className="navbar-right">
          <button className="navbar-icon-btn">👤</button>
          <button className="navbar-icon-btn">🔔</button>
        </div>
      </div>

      {/* Header */}
      <div className="automation-header">
        <div className="header-top">
          <button 
            onClick={() => navigate(-1)} 
            className="header-back-btn"
          >
            <IoArrowBack />
          </button>
          <h1 className="header-title">Inbox Automation Rules</h1>
          <div className="header-right">
            <MdCheckCircle className="header-verify-icon" />
            <button className="header-upgrade-btn">Upgrade</button>
          </div>
        </div>
        <p className="header-subtitle">
          Automatically respond to incoming messages to reduce response time and improve SLA
        </p>
      </div>

      {/* Main Content */}
      <div className="automation-main">
        {/* Left Panel */}
        <div className="automation-left">
          <div className="rules-section-header">
            <h2 className="rules-section-title">Auto-responder rules</h2>
          </div>

          <div className="rules-list">
            {rules.map((rule) => (
              <div key={rule.id} className="rule-item">
                <div className="rule-header">
                  <div className="rule-left">
                    <span className="rule-platform-icon">{getPlatformIcon(rule.platform)}</span>
                    <div className="rule-info">
                      <h3 className="rule-title">{rule.name}</h3>
                      <div className="rule-platforms">
                        {rule.platforms.map((p, idx) => (
                          <span key={idx} className="rule-platform">{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="rule-right">
                    <button className="rule-more-btn">⋯</button>
                    <label className="rule-toggle">
                      <input 
                        type="checkbox" 
                        checked={rule.enabled}
                        onChange={() => handleToggleRule(rule.id)}
                      />
                      <span className="rule-toggle-switch"></span>
                    </label>
                  </div>
                </div>

                <div className="rule-keywords">
                  <span className="keyword-badge">{rule.keywords.join(', ')}</span>
                </div>

                {rule.responseTemplate && (
                  <div className="rule-template">
                    <p className="template-label">Response template</p>
                    <div className="template-box">
                      {rule.responseTemplate}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="automation-right">
          <div className="new-rule-header">
            <h2 className="new-rule-title">New Automation Rule</h2>
            <button 
              className="new-rule-btn"
              onClick={() => setShowNewRule(!showNewRule)}
            >
              + New Rule
            </button>
          </div>

          {showNewRule && (
            <div className="new-rule-form">
              {/* When condition */}
              <div className="form-group">
                <label className="form-label">When a message contains...</label>
                <div className="keyword-inputs">
                  {newRule.keywords.map((keyword, index) => (
                    <div key={index} className="keyword-input-wrapper">
                      <input
                        type="text"
                        value={keyword}
                        onChange={(e) => handleKeywordChange(index, e.target.value)}
                        placeholder="Keyword"
                        className="form-input"
                      />
                    </div>
                  ))}
                  <button 
                    className="add-keyword-btn"
                    onClick={handleAddKeyword}
                  >
                    + Add Keyword
                  </button>
                </div>
              </div>

              {/* Auto-responder message */}
              <div className="form-group">
                <label className="form-label">Auto-responder message</label>
                <textarea
                  value={newRule.responseTemplate}
                  onChange={(e) => setNewRule({ ...newRule, responseTemplate: e.target.value })}
                  placeholder="We have an ongoing sale with 20% off. Don't miss out !"
                  className="form-textarea"
                  rows="4"
                />
                <div className="textarea-footer">
                  <div className="text-tools">
                    <span className="text-tool">Aa</span>
                    <span className="text-tool">📎</span>
                  </div>
                  <label className="form-toggle">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>

              {/* Events */}
              <div className="form-group">
                <label className="form-label">Events</label>
                <div className="events-list">
                  <div className="event-tag">
                    <span className="event-icon">✓</span>
                    auto_responder_created
                  </div>
                  <div className="event-tag">
                    <span className="event-icon">✓</span>
                    auto_responder_triggered
                  </div>
                </div>
              </div>

              {/* Target */}
              <div className="form-group">
                <div className="target-info">
                  Target: &lt;30 min Avg. Response Time : 19 min
                </div>
              </div>

              {/* Actions */}
              <div className="form-actions">
                <button 
                  className="cancel-btn"
                  onClick={() => setShowNewRule(false)}
                >
                  Cancel
                </button>
                <button 
                  className="create-btn"
                  onClick={handleCreateRule}
                >
                  Create Rule
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Automation;