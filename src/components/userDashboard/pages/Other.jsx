import React, { useState } from "react";
import { FaMoneyBillWave,FaGift,FaExclamationTriangle,} from "react-icons/fa";
import "./Other.css";

export default function OtherSections() {
  const [activeTab, setActiveTab] = useState("budget");

  return (
    <div className="other-sections">
      <header className="other-header">
        <h1>Other Services</h1>
      </header>

      <div className="other-tabs">
        <button
          className={`other-tab ${activeTab === "budget" ? "active" : ""}`}
          onClick={() => setActiveTab("budget")}
        >
          <FaMoneyBillWave /> Budget Planning
        </button>
        <button
          className={`other-tab ${activeTab === "rewards" ? "active" : ""}`}
          onClick={() => setActiveTab("rewards")}
        >
          <FaGift /> Rewards & Offers
        </button>
        <button
          className={`other-tab ${activeTab === "alerts" ? "active" : ""}`}
          onClick={() => setActiveTab("alerts")}
        >
          <FaExclamationTriangle /> Fraud Alerts
        </button>
      </div>

      <div className="other-content">
        {activeTab === "budget" && (
          <div className="budget-section">
            <h2>Budget Planning</h2>
            <p>Set and track your monthly spending limits.</p>
            <button className="action-btn">Start Planning</button>
          </div>
        )}

        {activeTab === "rewards" && (
          <div className="rewards-section">
            <h2>Rewards & Offers</h2>
            <p>Explore cashback and exclusive deals.</p>
            <button className="action-btn">View Rewards</button>
          </div>
        )}

        {activeTab === "alerts" && (
          <div className="alerts-section">
            <h2>Fraud Alerts</h2>
            <p>Get notified of suspicious transactions.</p>
            <button className="action-btn">Enable Alerts</button>
          </div>
        )}
      </div>
    </div>
  );
}
