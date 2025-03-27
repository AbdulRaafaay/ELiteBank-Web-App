import React from "react";
import '../userDashboard/User-dashboard.css'
import { FaTachometerAlt, FaExchangeAlt,  FaLock, FaSignOutAlt, FaChartBar, FaMoneyCheckAlt, FaQuestionCircle, FaCog, FaEllipsisH} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import Account from "./pages/Account";
import Transaction from "../adminDashboard/pagesAdmin/Transaction"
import Loan from "../adminDashboard/pagesAdmin/LoanManagement";
import Settings from "./pages/Settings"
import Notifications from "./pages/Notification";
import HelpSupport from "./pages/HelpSupport";


export default function UserDashboard() {

  const [activeTab, setActiveTab] = React.useState("Account");
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
                              <li className={activeTab === "Account" ? "active" : ""} onClick={() => setActiveTab("Account")}>
                                  <FaTachometerAlt /> Account
                              </li>
                              <li className={activeTab === "Transactions" ? "active" : ""} onClick={() => setActiveTab("Transactions")}>
                                  <FaExchangeAlt /> Transactions
                              </li>
                              <li className={activeTab === "Reports & Statements" ? "active" : ""} onClick={() => setActiveTab("Reports & Statements")}>
                                  <FaChartBar /> Reports & Statements
                              </li>
                              <li className={activeTab === "Notifications" ? "active" : ""} onClick={() => setActiveTab("Notifications")}>
                                  <FaLock /> Notifications & Alerts
                              </li>
                              <li className={activeTab === "Loan" ? "active" : ""} onClick={() => setActiveTab("Loan")}>
                                  <FaMoneyCheckAlt /> Loan
                              </li>
                              <li className={activeTab === "Others" ? "active" : ""} onClick={() => setActiveTab("Others")}>
                                  <FaEllipsisH size={20} /> Others
                              </li>
                              <li className={activeTab === "Settings" ? "active" : ""} onClick={() => setActiveTab("Settings")}>
                                  <FaCog size={20} /> Settings
                              </li>
                              <li className={activeTab === "Help" ? "active" : ""} onClick={() => setActiveTab("Help")}>
                                  <FaQuestionCircle size={20}/> Help & Support
                              </li>
                              
                          </ul>
                      </nav>
                      <div className="logout" onClick={handleLogout}>
                          <FaSignOutAlt /> Logout
                      </div>
                  </aside>

                  <main className="dashboard-content">
                    {activeTab === "Account" && <Account />} 
                    {activeTab === "Transactions" && <Transaction />}
                    {activeTab === "User Management" && <CostumerManagement />}
                    {activeTab === "Notifications" && <Notifications />}
                    {activeTab === "Loan" && <Loan />}
                    {activeTab === "Interest & Fees" && <InterestManagement />}
                    {activeTab === "Settings" && <Settings />}
                    {activeTab === "Help" && <HelpSupport />}
                </main> 
      
        </div>          
    </>
  );
}
