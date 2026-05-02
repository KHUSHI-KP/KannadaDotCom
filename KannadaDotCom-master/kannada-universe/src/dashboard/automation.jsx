
import React, { useState } from 'react';
import './automation.css';
import { IoArrowBack } from 'react-icons/io5';
import { MdCheckCircle } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const initialRules = [
  {
    id: 1,
    name: 'Delivery Inquiries',
    platform: 'whatsapp',
    keywords: ['delivery timing >'],
    responseTemplate:
      'Our standard delivery takes 2-3 days. Where would you like us to deliver?',
    enabled: true,
    platforms: ['WhatsApp Business'],
  },
  {
    id: 2,
    name: 'Delivery Inquiries',
    platform: 'whatsapp',
    keywords: ['discount, offer >'],
    responseTemplate:
      'Sure, we have a limited-time discount. What are you interested in?',
    enabled: true,
    platforms: ['WhatsApp Business'],
  },
  {
    id: 3,
    name: 'Price Request',
    platform: 'multi',
    keywords: ['price,cost >'],
    responseTemplate: '',
    enabled: true,
    platforms: ['WhatsApp', 'Instagram', 'Add'],
  },
  {
    id: 4,
    name: 'Store Hours',
    platform: 'instagram',
    keywords: ['price,cost >'],
    responseTemplate: '',
    enabled: true,
    platforms: ['WhatsApp', 'Add'],
  },
];

const initialNewRule = {
  name: 'New Automation Rule',
  keywords: ['Sale,discount'],
  responseTemplate: "We have an ongoing sale with 20% off.\nDon't miss out !",
  targetMinutes: 30,
  avgResponseTime: 19,
  enabled: true,
};

const platformIcons = {
  whatsapp: '💬',
  instagram: '📷',
  facebook: '👥',
  multi: '✚',
};

function Automation() {
  const navigate = useNavigate();
  const [rules, setRules] = useState(initialRules);
  const [newRule, setNewRule] = useState(initialNewRule);

  const handleToggleRule = (id) => {
    setRules((current) =>
      current.map((rule) =>
        rule.id === id ? { ...rule, enabled: !rule.enabled } : rule
      )
    );
  };

  const handleKeywordChange = (index, value) => {
    setNewRule((current) => {
      const keywords = [...current.keywords];
      keywords[index] = value;
      return { ...current, keywords };
    });
  };

  const handleAddKeyword = () => {
    setNewRule((current) => ({
      ...current,
      keywords: [...current.keywords, ''],
    }));
  };

  const handleCreateRule = () => {
    const cleanedKeywords = newRule.keywords
      .map((keyword) => keyword.trim())
      .filter(Boolean);

 const createdRule = {
      id: Date.now(),
      name: cleanedKeywords[0] ? cleanedKeywords[0].split(',')[0] : 'New Rule',
      platform: 'whatsapp',
      keywords: cleanedKeywords.length ? cleanedKeywords : ['keyword >'],
      responseTemplate: newRule.responseTemplate,
      enabled: newRule.enabled,
      platforms: ['WhatsApp Business'],
    };

    setRules((current) => [createdRule, ...current]);
    setNewRule(initialNewRule);
  };

  return (
    <div className="automation-page">
      <div className="automation-header-shell">
        <div className="automation-header-top">
          <button
            onClick={() => navigate(-1)}
            className="automation-back-btn"
            title="Go back"
          >
            <IoArrowBack />
          </button>
          <h1 className="automation-page-title">Inbox Automation Rules</h1>
          <div className="automation-header-actions">
            <MdCheckCircle className="automation-verify-icon" />
            <button className="automation-upgrade-btn">Upgrade</button>
          </div>
        </div>

        <div className="automation-subheader">
          <p className="automation-subtitle">
            Automatically respond to incoming messages to reduce response time
            and improve SLA
          </p>
          <button className="automation-new-btn">+ New Rule</button>
        </div>
      </div>

      <div className="automation-content">
        <section className="automation-rules-panel">
          <h2 className="automation-section-title">Auto-responder rules</h2>

          <div className="automation-rules-list">
            {rules.map((rule) => (
              <article key={rule.id} className="automation-rule-card">
                <div className="automation-rule-main">
                  <div className="automation-rule-icon">
                    {platformIcons[rule.platform] || '⚙️'}
                  </div>

                  <div className="automation-rule-body">
                    <div className="automation-rule-topline">
                      <h3 className="automation-rule-title">{rule.name}</h3>

                      <div className="automation-rule-controls">
                        <button className="automation-more-btn">⋯</button>
                        <label className="automation-switch">
                          <input
                            type="checkbox"
                            checked={rule.enabled}
                            onChange={() => handleToggleRule(rule.id)}
                          />
                          <span className="automation-slider"></span>
                        </label>
                      </div>
                    </div>

                    <div className="automation-platform-row">
                      {rule.platforms.map((platform, index) => (
                        <span key={index} className="automation-platform-pill">
                          {platform}
                        </span>
                      ))}
                    </div>

                    <div className="automation-keywords-row">
                      {rule.keywords.map((keyword, index) => (
                        <span key={index} className="automation-keyword-pill">
                          {keyword}
                        </span>
                      ))}
                    </div>

                    {rule.responseTemplate ? (
                      <div className="automation-template-block">
                        <p className="automation-template-label">
                          Response template
                        </p>
                        <div className="automation-template-box">
                          {rule.responseTemplate}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

<aside className="automation-form-panel">
          <div className="automation-form-header">
            <h2 className="automation-section-title">New Automation Rule</h2>
          </div>

          <div className="automation-form-group">
            <label className="automation-form-label">
              When a message contains...
            </label>
            <div className="automation-form-box">
              {newRule.keywords.map((keyword, index) => (
                <input
                  key={index}
                  type="text"
                  value={keyword}
                  onChange={(e) => handleKeywordChange(index, e.target.value)}
                  placeholder="Keyword"
                  className="automation-input"
                />
              ))}
              <button
                type="button"
                className="automation-secondary-btn"
                onClick={handleAddKeyword}
              >
                + Add Keyword
              </button>
            </div>
          </div>

          <div className="automation-form-group">
            <label className="automation-form-label">
              Auto-responder message
            </label>
            <div className="automation-message-box">
              <textarea
                value={newRule.responseTemplate}
                onChange={(e) =>
                  setNewRule((current) => ({
                    ...current,
                    responseTemplate: e.target.value,
                  }))
                }
                className="automation-textarea"
                rows="4"
              />

              <div className="automation-message-tools">
                <div className="automation-toolset">
                  <span className="automation-tool">Aa</span>
                  <span className="automation-tool">⌄</span>
                  <span className="automation-tool">📎</span>
                </div>

                <label className="automation-switch automation-switch-small">
                  <input
                    type="checkbox"
                    checked={newRule.enabled}
                    onChange={() =>
                      setNewRule((current) => ({
                        ...current,
                        enabled: !current.enabled,
                      }))
                    }
                  />
                  <span className="automation-slider"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="automation-form-group">
            <label className="automation-form-label">Events</label>
            <div className="automation-events-box">
              <span className="automation-event-tag">
                <span className="automation-event-dot">+</span>
                auto_responder_created
              </span>
              <span className="automation-event-tag">
                <span className="automation-event-dot">+</span>
                auto_responder_triggered
              </span>
            </div>
          </div>

          <div className="automation-footer-bar">
            <div className="automation-target-copy">
              Target: &lt;{newRule.targetMinutes} min Avg. Response Time :{' '}
              {newRule.avgResponseTime} min
            </div>

            <div className="automation-footer-actions">
              <button
                className="automation-cancel-btn"
                onClick={() => setNewRule(initialNewRule)}
              >
                Cancel
              </button>
              <button
                className="automation-create-btn"
                onClick={handleCreateRule}
              >
                Create Rule
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Automation;