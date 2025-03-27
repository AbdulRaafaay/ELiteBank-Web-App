import React, { useState } from "react";
import "./HelpSupport.css";
import { FaPhone, FaEnvelope, FaQuestionCircle, FaCommentDots, FaChevronDown, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInfoCircle } from "react-icons/fa";

export default function HelpSupport() {
    // FAQ Section with State for Expand/Collapse
    const [faqs, setFaqs] = useState([
        { id: 1, question: "How do I reset my password?", answer: "Go to settings > Security and click 'Reset Password'.", open: false },
        { id: 2, question: "How can I contact customer support?", answer: "Email us at support@triotech.com or call +123 456 789.", open: false },
        { id: 3, question: "How do I report a fraudulent transaction?", answer: "Immediately email fraud@triotech.com with transaction details.", open: false },
    ]);

    // Toggle FAQ Answers
    const toggleFAQ = (id) => {
        setFaqs(faqs.map(faq => faq.id === id ? { ...faq, open: !faq.open } : faq));
    };

    return (
        <div className="help-container">
            <main className="help-content">
                <h2 className="page-title">Help & Support</h2>

                <div className="help-layout">
                    {/* FAQ Section */}
                    <div className="faq-box">
                        <h2 className="box-heading"><FaQuestionCircle /> FAQs</h2>
                        <div className="faq-list">
                            {faqs.map((faq) => (
                                <div key={faq.id} className={`faq-item ${faq.open ? "open" : ""}`} onClick={() => toggleFAQ(faq.id)}>
                                    <div className="faq-header">
                                        <p className="faq-question">{faq.question}</p>
                                        <FaChevronDown className={`chevron-icon ${faq.open ? "rotate" : ""}`} />
                                    </div>
                                    {faq.open && <p className="faq-answer">{faq.answer}</p>}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact & Live Chat */}
                    <div className="support-box">
                        <h2 className="box-heading"><FaPhone /> Contact Support</h2>
                        <p><FaEnvelope /> Email: <a href="mailto:support@triotech.com">support@triotech.com</a></p>
                        <p><FaPhone /> Phone: +123 456 789</p>
                        <p><FaMapMarkerAlt /> Visit: 123 Bank Street, Islamabad</p>
                        <p><FaFacebook /> <a href="https://facebook.com/triotech">Facebook</a></p>
                        <p><FaTwitter /> <a href="https://twitter.com/triotech">Twitter</a></p>

                        {/* New Announcement/Quick Support Box */}
                        <div className="announcement-box">
                            <h3><FaInfoCircle /> Quick Support</h3>
                            <p>For urgent issues, please call our **24/7 support line** or visit your nearest branch.</p>
                        </div>

                        {/* Push Live Chat Button to Bottom */}
                        <div className="live-chat-container">
                            <button className="live-chat-btn">
                                <FaCommentDots /> Live Chat
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
