import React from "react";
import "./Statement.css";
import Rightbar from "./Rightbar.jsx"
import Statement_box from "./Statement_box.jsx";

export default function Statement() {
    return (
    <main>
        <div className="user_navbar">
            <img src="../src/images/logotriotech.png" alt="logoTrioTech" className="logo" />
            <div className="text">
                <h1 className="top">Elite</h1>
                <h1 className="bottom">Bank</h1>
            </div>
            <div>
                <h1 className="home">Home</h1>
            </div>
        </div>

      <div className="dashboard">
        {/* Sidebar Box */}
        <aside className="sidebar-box">
          <nav className="nav-menu">
            <a href="#">Account</a>
            <a href="#">Statements & Reports</a>
            <a href="#">Loan Management</a>
            <a href="#">Transactions</a>
            <a href="#">Notifications & Alerts</a>

            {/* Partition Line */}
            <div className="dim-line"></div>

            <div className="nav-header"></div>
            <a href="#" className="other" >Others</a>
            <a href="#">Settings</a>
            <a href="#">Help & Support</a>
            <a href="#" className="logout">Logout</a>
          </nav>
        </aside>

        {/* Main Content */}

        <main className="main-content">
            <h2>Statements and Reports</h2>
                    <div className="cards-section">
                    <Statement_box 
                        heading="March 2025 Statement"
                        deposit="$2,000"
                        withdraw="$795"
                        balance="$5,250.45"
                        download="March"
                    />
                    <Statement_box 
                        heading="Feburary 2025 Statement"
                        deposit="$2,500"
                        withdraw="$1,200"
                        balance="$3,800"
                        download="Feburary"
                    />
                
            </div>
        </main>

            <div className="rightbar">
                    <Rightbar query="Account number" answer="(603) 555-0123" />
                    <Rightbar query="Swift code" answer="68488" />
                    <Rightbar query="IBAN" answer="CY02132164091270421" />
                    <Rightbar query="Credit interest rate" answer="20%" />
                    <Rightbar query="Overdue limit" answer="10$" />
                    <Rightbar query="Account name" answer="TrioTech" />
                    <Rightbar query="Branch" answer="Islamabad (048)" />
                    <Rightbar query="Debit interest rate" answer="7.658%" />
            </div>

        </div>
    </main>
    );
}