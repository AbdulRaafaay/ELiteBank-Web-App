import React, { useState } from "react";
import Rightbar from "./Rightbar.jsx";
import "./Notification.css";

export default function Notification() {
    // Dummy notification data
    const [notifications, setNotifications] = useState([
        { id: 1, date: "March 25, 2025 - 10:00 AM", message: "Your transaction was successful!", status: "Read" },
        { id: 2, date: "March 24, 2025 - 03:15 PM", message: "New login detected from another device.", status: "Unread" },
        { id: 3, date: "March 22, 2025 - 09:45 AM", message: "Your loan application is under review.", status: "Read" }
    ]);

    return (
        <main className="dashboard">
            {/* Main Content */}
            <div className="main-content">
                <h2 className="page-title">Notifications & Alerts</h2>
                
                <div className="notifications-box">
                    <h2 className="box-heading">Recent Notifications</h2>
                    
                    <div className="notification-header">
                        <p>Date & Time</p>
                        <p>Notification</p>
                        <p>Status</p>
                    </div>

                    <div className="notification-list">
                        {notifications.map((note) => (
                            <div key={note.id} className="notification-item">
                                <p>{note.date}</p>
                                <p>{note.message}</p>
                                <span className={`status-tag ${note.status.toLowerCase()}`}>
                                    {note.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
