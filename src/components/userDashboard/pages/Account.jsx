import React from "react";
import Card from "../pages/cards";
import "./Account.css";
import Rightbar from "../pages/Rightbar.jsx";


export default function Account() {
    return (

        <div className="user-dashboard">
                {/* Main Content*/}     
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
    )
}