import React from "react";
import "./Setting.css";
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaMapMarkerAlt, FaEdit } from "react-icons/fa";

export default function Setting() {
    return (
        <div className="settings-container">
            <main className="settings-content">
                <div className="settings-header">
                    <h2>Settings</h2>
                    <button className="edit-profile"><FaEdit /> Edit Profile</button>
                </div>

                <div className="settings-box">
                    <h2 className="box-heading">Personal Information</h2>
                    <div className="info-grid">
                        <div className="info-item">
                            <FaUser className="icon" />
                            <div>
                                <label>Full Name</label>
                                <p>Kamil Saeed</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaEnvelope className="icon" />
                            <div>
                                <label>Email</label>
                                <p>abc@email.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaPhone className="icon" />
                            <div>
                                <label>Phone Number</label>
                                <p>+92312-2345678</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaCalendarAlt className="icon" />
                            <div>
                                <label>Date of Birth</label>
                                <p>15th April 2000</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaMapMarkerAlt className="icon" />
                            <div>
                                <label>Address</label>
                                <p>House#28, Street 16, Islamabad</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="save-btn">Save Changes</button>

            </main>
        </div>
    );
}

