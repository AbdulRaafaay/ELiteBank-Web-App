import React from "react";
import "./User-dashboard.css";
import { FaTachometerAlt, FaExchangeAlt, FaCogs, FaUsers, FaLock, FaSignOutAlt, FaChartBar, FaMoneyCheckAlt, FaCalculator } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
//import Rightbar from "./Rightbar.jsx"
//import { useNavigate, useState } from 'react-dom'

//import Card from "./cards"; // Import Card Component

export default function UserDashboard() {

  const [activeTab, setActiveTab] = React.useState("Dashboard");
      const navigate = useNavigate();
  
      const handleLogout = () => {
          navigate("/");
      };


  return (
    <>
      <div className="admin-dashboard">
                  {/* Sidebar */}
                  <aside className="sidebar">
                      <div className="logo">
                          <img src="/bankLogo.png" alt="Elite Bank" />
                          <h2><span className="elite">ELITE</span> BANK</h2>
                      </div>
                      <nav className="adminNav">
                          <ul>
                              <li className={activeTab === "Dashboard" ? "active" : ""} onClick={() => setActiveTab("Dashboard")}>
                                  <FaTachometerAlt /> Dashboard
                              </li>
                              <li className={activeTab === "Transactions" ? "active" : ""} onClick={() => setActiveTab("Transactions")}>
                                  <FaExchangeAlt /> Transactions
                              </li>
                              <li className={activeTab === "User Management" ? "active" : ""} onClick={() => setActiveTab("User Management")}>
                                  <FaUsers /> Costumer Management
                              </li>
                              <li className={activeTab === "Account Controls" ? "active" : ""} onClick={() => setActiveTab("Account Controls")}>
                                  <FaLock /> Account Management
                              </li>
                              <li className={activeTab === "Loans" ? "active" : ""} onClick={() => setActiveTab("Loans")}>
                                  <FaMoneyCheckAlt /> Loan Management
                              </li>
                              <li className={activeTab === "Interest & Fees" ? "active" : ""} onClick={() => setActiveTab("Interest & Fees")}>
                                  <FaCalculator /> Interest & Fees
                              </li>
                              <li className={activeTab === "Reports & Statements" ? "active" : ""} onClick={() => setActiveTab("Reports & Statements")}>
                                  <FaChartBar /> Reports & Statements
                              </li>
                          </ul>
                      </nav>
                      <div className="logout" onClick={handleLogout}>
                          <FaSignOutAlt /> Logout
                      </div>
                  </aside>
      
                  {/* Main Content
                  <main className="dashboard-content">
                      {activeTab === "Dashboard" && <DashboardContent />} 
                      {activeTab === "Transactions" && <Transaction />}
                      {activeTab === "User Management" && <CostumerManagement />}
                      {activeTab === "Account Controls" && <AccountManagement />}
                      {activeTab === "Loans" && <LoanManagement />}
                      {activeTab === "Interest & Fees" && <InterestManagement />}
                      {activeTab === "Reports & Statements" && <ReportManagement />}
                  </main> */}
              </div>

        {/* Main Content
        <main className="main-content">
          <h2>Manage Bank Account</h2>
          <div className="cards-section">
            <h3>My card</h3>
            <div className="cards">
              <Card balance="219.78" lastDigits="3783" expiry="05/22" color="blue-card" />
              <Card balance="245,788" lastDigits="3783" expiry="05/22" color="red-card" />
            </div>
          </div>
        </main>

        {/* Account Details */}

        {/* <div className="rightbar">
            <Rightbar query="Account number" answer="(603) 555-0123" />
            <Rightbar query="Swift code" answer="68488" />
            <Rightbar query="IBAN" answer="CY02132164091270421" />
            <Rightbar query="Credit interest rate" answer="20%" />
            <Rightbar query="Overdue limit" answer="10$" />
            <Rightbar query="Account name" answer="TrioTech" />
            <Rightbar query="Branch" answer="Islamabad (048)" />
            <Rightbar query="Debit interest rate" answer="7.658%" />
        </div> */}
    </>
  );
}
