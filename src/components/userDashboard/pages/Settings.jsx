import React from "react"
import "./Setting.css"
import Rightbar from "./Rightbar.jsx"

export default function Setting() {
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
                    <div className="main-head">
                        <h2 classNa>Settings</h2>
                        <h4 className="edit-profile">Edit Profile</h4>
                    </div>
                    <div className="cards-section">
                        <div className="state_box2">
                            <h2 className="heading">Personal Information</h2>
                            <ul className="box_list">
                                <li>Full Name: Kamil Saeed</li>
                                <li>Username: abc_123</li>
                                <li>Email: abc@email.com</li>
                                <li>Phone Number: +92312-2345678</li>
                                <li>Date of Birth: 15th April 2000</li>
                                <li>Address: House#28, Street 16, Islamabad</li>
                            </ul>
                        </div>
                            
                        
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
    )
}

